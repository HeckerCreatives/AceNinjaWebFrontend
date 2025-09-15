'use client'
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { GiSharpShuriken } from 'react-icons/gi'
import axios from 'axios';
import { div } from 'framer-motion/client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useLenis } from "@studio-freight/react-lenis"; 
import PaginitionComponent from './common/Pagination';
  

export interface NewsItem {
    id: string;
    title: string;
    content: string;
    type: string
    url: string;
}


export default function News() {
    const [api, setApi] = React.useState<CarouselApi>()
        const [current, setCurrent] = React.useState(0)
        const [count, setCount] = React.useState(0)
        const [list, setList] = useState<NewsItem[]>([])

        const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const lenis = useLenis();
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(false)


    // Mouse Drag Handlers
    const startDragging = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
        setScrollLeft(containerRef.current?.scrollLeft || 0);
    };

    const onDragging = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - (containerRef.current.offsetLeft || 0);
        const walk = (x - startX) * 2; // Adjust sensitivity
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    // Touch Drag Handlers
    const startTouch = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
        setScrollLeft(containerRef.current?.scrollLeft || 0);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !containerRef.current) return;
        const x = e.touches[0].pageX - (containerRef.current.offsetLeft || 0);
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const stopTouch = () => {
        setIsDragging(false);
    };
    
        React.useEffect(() => {
            if (!api) {
              return
            }
         
            setCount(api.scrollSnapList().length)
            setCurrent(api.selectedScrollSnap() + 1)
         
            api.on("select", () => {
              setCurrent(api.selectedScrollSnap() + 1)
            })
          }, [api])
    

    useEffect(() => {
        AOS.init({
        offset: 100,
        });
    }, []);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news/getnews?limit=3&page=${currentPage}`)

            setList(response.data.data)
            setTotalPage(response.data.totalPages)
            setLoading(false)
        }
        getData()
    },[currentPage])


    useEffect(() => {
        const handleBodyScroll = (disable: boolean) => {
            document.body.style.overflow = disable ? "hidden" : "";
        };

        return () => handleBodyScroll(false);
    }, []);

    //paginition
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

    
  return (
    <div id='news' className=' w-full h-auto flex flex-col items-center py-4 lg:px-8'
    // style={{backgroundImage: "url('/v2/download/White BG B.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}
    >

        <div id='' className=' relative max-w-[1440px] w-full h-auto mt-8 lg:flex hidden flex-col gap-8 scroll-mt-24'
        data-aos='fade-up' data-aos-duration={500} data-aos-delay={600}
        >
            <img src="/v2/download/Scroll TAB Horizontal.png" alt="" />

            <div className=' absolute w-full h-full flex flex-col items-center p-20'>
                <div className=' w-full flex flex-col items-center p-8'>
                    <div className=' flex items-center justify-center gap-12'>
                        <img src="/v2/download/Title Side D.png" alt="" className=' rotate-180 w-[40px]'/>
                        <h2 className=' text-3xl font-bold uppercase'>News</h2>
                        <img src="/v2/download/Title Side D.png" alt="" className=' w-[40px]'/>

                    </div>
                </div>

                {list.length !== 0 ? (
                 <>
                    {loading ? (
                        <>
                         <div className=' w-full flex items-center justify-center h-[300px] '>
                            <span className=' spinner'></span>

                        </div>
                        </>
                    ): (
                        <>
                        <div className="w-[88%] h-[80%] flex flex-col cursor-pointer overflow-x-auto overflow-y-hidden"
                    onMouseDown={startDragging}
                    onMouseMove={onDragging}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    onTouchStart={startTouch}
                    onTouchMove={onTouchMove}
                    onTouchEnd={stopTouch}
                    ref={containerRef}
                    >
                    <div className="flex h-full gap-4 w-max ">
                        {list.map((item, index) => (
                            <div key={item.id} className="w-[365px] h-full  border-4 border-amber-900 bg-white rounded-sm p-[.1rem]">
                                <div className="w-full min-h-[100%] h-full flex flex-col border-[1px] border-amber-500 p-2">
                                    {item.type === "image" ? (
                                        <div 
                                            className="w-full aspect-video bg-zinc-200"
                                            style={{
                                                backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${item.url}')`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                backgroundPosition: "bottom",
                                            }}
                                        >
                                            <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.url}`} alt="img" />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-video bg-zinc-200">
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${item.url.split("/").pop()?.split("?")[0]}`}
                                                title="YouTube Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    )}
                
                                    <div className="w-full h-full p-4 flex flex-col gap-4">
                                        <Dialog>
                                        <DialogTrigger>
                                            <h2 className=" ~text-sm/lg font-bold text-amber-800 lg:line-clamp-2 xl:line-clamp-3 underline">{item.title}</h2>
                                        </DialogTrigger>
                                        <DialogContent className=' overflow-y-auto max-h-[70vh] touch-none'>
                                            <DialogHeader>
                                            <DialogTitle>News</DialogTitle>
                                            <DialogDescription>
                                               
                                            </DialogDescription>
                                            </DialogHeader>

                                            {item.type === "image" ? (
                                                <div 
                                                    className="w-full aspect-video bg-zinc-200"
                                                    style={{
                                                        backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${item.url}')`,
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "bottom",
                                                    }}
                                                >
                                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.url}`} alt="img" />
                                                </div>
                                            ) : (
                                                <div className="w-full aspect-video bg-zinc-200">
                                                    <iframe
                                                        className="w-full h-full"
                                                        src={`https://www.youtube.com/embed/${item.url.split("/").pop()?.split("?")[0]}`}
                                                        title="YouTube Video"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}

                                            <div className=' flex flex-col gap-4'>
                                                <h2 className=" text-start ~text-sm/lg font-bold text-amber-800 underline">{item.title}</h2>
                                                <p className="  ~text-xs/sm text-start whitespace-pre-wrap">{item.content}</p>
                                            </div>
                                        </DialogContent>
                                        </Dialog>

                                        <p className="  ~text-xs/sm text-start line-clamp-3 xl:line-clamp-4">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {list.length !== 0 && (
                    <div className=' w-full flex items-center justify-center mb-4'>
                    <PaginitionComponent currentPage={currentPage} total={totalPage} onPageChange={handlePageChange}/>

                    </div>

                    )}
                </div>
                        
                        </>
                    )}
                    
                 </>
                
                ) : (
                    <div className=' flex items-center justify-center w-full h-full '>
                        <p>No news yet.</p>
                    </div>
                )}



               
               
            </div>

        </div>

        <div id='' className=' relative max-w-[1440px] w-full h-auto mt-8 lg:hidden flex flex-col gap-8 scroll-mt-24'
        data-aos='fade-up' data-aos-duration={500} data-aos-delay={600}
        >

            <div className=' w-full h-full flex flex-col items-center'>
                <div className=' w-full flex flex-col items-center p-8'>
                    <div className=' flex items-center justify-center ~gap-6/12'>
                        <img src="/v2/download/Title Side D.png" alt="" className=' rotate-180 ~w-8/10'/>
                        <h2 className=' ~text-lg/3xl font-bold uppercase'>News</h2>
                        <img src="/v2/download/Title Side D.png" alt="" className=' ~w-8/10'/>

                    </div>
                </div>

                {list.length !== 0 ? (
                   <>
                   {loading ? (
                    <>
                    <div className=' w-full flex items-center justify-center h-[400px] '>
                        <span className=' spinner'></span>

                    </div>
                    </>
                   ): (
                    <>
                     <div className=" flex flex-wrap h-full gap-4 items-center justify-center">
                        {list.map((item, index) => (
                            <div key={item.id} className="max-w-[365px] w-full min-h-[355px]  border-4 border-amber-900 bg-white rounded-sm p-[.1rem]">
                                <div className="w-full h-full flex flex-col border-[1px] min-h-[355px] border-amber-500 p-2">
                                    {item.type === "image" ? (
                                        <div 
                                            className="w-full aspect-video bg-zinc-200"
                                            style={{
                                                backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${item.url}')`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                backgroundPosition: "bottom",
                                            }}
                                        >
                                            <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.url}`} alt="img" />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-video bg-zinc-200">
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${item.url.split("/").pop()?.split("?")[0]}`}
                                                title="YouTube Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    )}
                
                                    <div className="w-full h-full p-4 flex flex-col items-center justify-center gap-4">
                                        <Dialog>
                                        <DialogTrigger>
                                            <h2 className=" ~text-sm/lg font-bold text-amber-800 lg:line-clamp-2 xl:line-clamp-3 underline">{item.title}</h2>
                                        </DialogTrigger>
                                        <DialogContent className=' overflow-y-auto max-h-[70vh] touch-none'>
                                            <DialogHeader>
                                            <DialogTitle>News</DialogTitle>
                                            <DialogDescription>
                                               
                                            </DialogDescription>
                                            </DialogHeader>

                                            {item.type === "image" ? (
                                                <div 
                                                    className="w-full aspect-video bg-zinc-200"
                                                    style={{
                                                        backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${item.url}')`,
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "bottom",
                                                    }}
                                                >
                                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.url}`} alt="img" />
                                                </div>
                                            ) : (
                                                <div className="w-full aspect-video bg-zinc-200">
                                                    <iframe
                                                        className="w-full h-full"
                                                        src={`https://www.youtube.com/embed/${item.url.split("/").pop()?.split("?")[0]}`}
                                                        title="YouTube Video"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}

                                            <div className=' flex flex-col gap-4'>
                                                <h2 className=" text-start ~text-sm/lg font-bold text-amber-800 underline">{item.title}</h2>
                                                <p className="  ~text-xs/sm text-start whitespace-pre-wrap">{item.content}</p>
                                            </div>
                                        </DialogContent>
                                        </Dialog>

                                        <p className="  ~text-xs/sm text-center line-clamp-3 xl:line-clamp-6">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {list.length !== 0 && (
                    <div className=' w-full flex items-center justify-center mb-4'>
                    <PaginitionComponent currentPage={currentPage} total={totalPage} onPageChange={handlePageChange}/>

                    </div>
                    )}
                    </>
                   )}
                   
                   </>
                
                ) : (
                    <div className=' flex items-center justify-center w-full h-[300px] '>
                        <p>No news yet.</p>
                    </div>
                )}

              

            </div>

        </div>
       
    </div>
  )
}
