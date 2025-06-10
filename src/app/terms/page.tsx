import React from 'react';

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-xl"></div>
        </div>

        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-8">
            Last updated: March 15, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily access the materials (information or software) on MedFuture's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-300">This license shall automatically terminate if you violate any of these restrictions and may be terminated by MedFuture at any time.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              The materials on MedFuture's website are provided on an 'as is' basis. MedFuture makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. Limitations</h2>
            <p className="text-gray-300 mb-4">
              In no event shall MedFuture or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MedFuture's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-300 mb-4">
              The materials appearing on MedFuture's website could include technical, typographical, or photographic errors. MedFuture does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">6. Links</h2>
            <p className="text-gray-300 mb-4">
              MedFuture has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by MedFuture of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">7. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@medical-news-n63pjqom4-junseolees-projects.vercel.app" className="text-cyan-400 hover:text-cyan-300">
                legal@medical-news-n63pjqom4-junseolees-projects.vercel.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 