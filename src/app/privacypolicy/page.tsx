"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LandingPageLayout from "@/components/layout/LandingPageLayout";

export default function PrivacyPolicy() {
  return (
    <LandingPageLayout>
          <main className="w-[95%] max-w-4xl p-6 md:p-12 text-white bg-zinc-950/50 backdrop-blur-md rounded-2xl my-[10%] shadow-md border-2 border-zinc-800"
         
          >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy for Ace Ninja Path
        </h1>
        <p className="text-sm text-zinc-300 mb-8 text-center">
          Last Updated: September 15, 2025
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <p>
            Welcome to <strong>Ace Ninja Path</strong>! This Privacy Policy
            explains how we collect, use, and protect your information when you
            use our mobile game.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Information We Collect
            </h2>
            <p>
              We value your privacy. Ace Ninja Path is designed to be fun and
              safe, and we collect as little personal information as possible.
            </p>
            <p>Depending on how you use the game, we may collect:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>
                <strong>Non-personal information</strong> such as:
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                  <li>Device type and model</li>
                  <li>Operating system version</li>
                  <li>Gameplay statistics (scores, progress, achievements)</li>
                  <li>Crash logs or error reports</li>
                </ul>
              </li>
              <li>
                <strong>Personal information</strong> (only if voluntarily
                provided, e.g., through contacting us):
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                  <li>Name and email address</li>
                </ul>
              </li>
            </ul>
            <p className="mt-2">
              We do not knowingly collect any personal data from children under
              13 years old.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Improve game performance and user experience</li>
              <li>Fix bugs and technical issues</li>
              <li>Analyze gameplay to make updates and improvements</li>
              <li>Respond to player support requests or feedback</li>
            </ul>
            <p className="mt-2">
              We do <strong>not</strong> sell, rent, or share your personal
              information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
            <p>
              Ace Ninja Path may use trusted third-party services (like
              analytics or ads) that collect non-personal information
              automatically. These services have their own privacy policies.
            </p>
            <p className="mt-2">Examples include:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Google Analytics for Firebase (for analytics)</li>
              <li>AdMob (for ads)</li>
            </ul>
            <p className="mt-2">
              We encourage you to review their privacy policies to understand
              how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Data Security</h2>
            <p>
              We take reasonable steps to protect your information from
              unauthorized access, loss, or misuse. However, no method of
              transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Your Privacy Choices</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Turn off analytics or ad tracking in your device settings (if
                supported)
              </li>
              <li>
                Contact us to request deletion of any personal information you
                have provided
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted here with a new “Last Updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> aceninjapath@gmail.com <br />
              <strong>Developer:</strong> Ace Ninja Path
            </p>
          </section>
        </div>
      </main>
    </LandingPageLayout>
  );
}
