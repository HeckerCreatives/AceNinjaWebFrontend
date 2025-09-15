"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LandingPageLayout from "@/components/layout/LandingPageLayout";

export default function Terms() {
  return (
   <LandingPageLayout>
        <main className="w-[95%] max-w-4xl p-6 md:p-12 text-white bg-zinc-950/50 backdrop-blur-md rounded-2xl my-[10%] shadow-md border-2 border-zinc-800"
        
        >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions for Ace Ninja Path
        </h1>
        <p className="text-sm text-zinc-300 mb-8 text-center">
          Last Updated: September 15, 2025
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <p>
            Welcome to <strong>Ace Ninja Path</strong>! These Terms and
            Conditions ("Terms") govern your use of the mobile game Ace Ninja
            Path ("the Game") provided by Ace Ninja Path ("Company", "we",
            "our", or "us"). By downloading, installing, or playing the Game,
            you agree to these Terms.
          </p>
          <p>
            If you do not agree with these Terms, please do not use the Game.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">Use of the Game</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>The Game is for personal, non-commercial entertainment use only.</li>
              <li>You must not use the Game for any illegal or unauthorized purpose.</li>
              <li>You agree to comply with all applicable local and international laws while using the Game.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">User Accounts and Data</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>We may collect limited non-personal data to improve the Game experience (see our Privacy Policy).</li>
              <li>If you contact us, you may provide personal information such as your email address.</li>
              <li>You are responsible for maintaining the confidentiality of your account (if applicable).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
            <p>
              All content, graphics, designs, music, code, and other materials
              in the Game are owned by Ace Ninja Path or licensed to us.
            </p>
            <p className="mt-2">
              You may not copy, modify, distribute, or exploit any part of the
              Game without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">In-Game Purchases</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>The Game may offer optional in-game purchases.</li>
              <li>All purchases are final and non-refundable, except as required by law or platform policies.</li>
              <li>Prices and availability of items may change without notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
            <p>
              The Game may display third-party content or advertisements from
              services like AdMob or analytics from Google Analytics for
              Firebase. We are not responsible for the content or practices of
              third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Disclaimer of Warranties</h2>
            <p>
              The Game is provided <strong>"as is"</strong> without warranties
              of any kind. We do not guarantee that the Game will be error-free,
              uninterrupted, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
            <p>
              Ace Ninja Path is not liable for any damages, losses, or claims
              resulting from your use of or inability to use the Game, to the
              fullest extent permitted by law.
            </p>
          </section>
        </div>
      </main>
   </LandingPageLayout>
  );
}
