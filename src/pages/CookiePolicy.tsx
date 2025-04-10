import BackButton from '../components/BackButton';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const CookiePolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <BackButton />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-300">
              Cookies are small text files stored on your device when you visit a website. They help us enhance your browsing experience, analyze site traffic, and deliver personalized content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Necessary Cookies:</strong> Essential for the proper functioning of the website.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).</li>
              <li><strong>Marketing Cookies:</strong> Used for advertising and user behavior analysis (e.g., Microsoft Clarity).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Managing Your Cookie Preferences</h2>
            <p className="text-gray-300">
              You can manage or revoke your cookie preferences at any time using our cookie banner. Additionally, most browsers allow you to control cookies through their settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-300 mb-4">
              We use third-party services that may place cookies on your device. These include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
               
                  Google Analytics
                
              </li>
              <li>
               
                  Microsoft Clarity
                
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Cookie Policy, feel free to contact us at <a href="mailto:angelo@tryarxautomate.com" className="underline text-blue-400">angelo@tryarxautomate.com</a>.
            </p>
          </section>
        </div>
        {/* Last updated date */}
        <div className="mt-16 text-sm text-gray-400 text-center">
          Last updated: April 10, 2025
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
