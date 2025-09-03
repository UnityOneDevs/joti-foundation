import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/governor-body" className="text-gray-300 hover:text-white transition-colors">
                  Governor Body
                </Link>
              </li>
              <li>
                <Link href="/about/annual-reports" className="text-gray-300 hover:text-white transition-colors">
                  Annual Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Causes */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Causes</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/causes/jal-jeevan" className="text-gray-300 hover:text-white transition-colors">
                  Jal Jeevan
                </Link>
              </li>
              <li>
                <Link href="/causes/clearer-vision" className="text-gray-300 hover:text-white transition-colors">
                  Clearer Vision for Brighter Future
                </Link>
              </li>
              <li>
                <Link href="/causes/disaster-relief" className="text-gray-300 hover:text-white transition-colors">
                  Disaster Relief
                </Link>
              </li>
              <li>
                <Link href="/causes/samarth" className="text-gray-300 hover:text-white transition-colors">
                  Samarth
                </Link>
              </li>
              <li>
                <Link href="/causes/distribution-drive" className="text-gray-300 hover:text-white transition-colors">
                  Distribution Drive
                </Link>
              </li>
              <li>
                <Link href="/causes/empower-ed" className="text-gray-300 hover:text-white transition-colors">
                  Empower-ED
                </Link>
              </li>
              <li>
                <Link href="/causes/health-camps" className="text-gray-300 hover:text-white transition-colors">
                  Health Camps
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  News & Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">📞</span>
                <a href="tel:+919315064855" className="text-gray-300 hover:text-white transition-colors">
                  +91-9315064855
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✉️</span>
                <a href="mailto:info@jotifoundation.org" className="text-gray-300 hover:text-white transition-colors">
                  info@jotifoundation.org
                </a>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">📍</span>
                <div className="text-gray-300">
                  <p>Gurgaon, Haryana, India - 122102</p>
                  <p>Muktsar, Punjab, India - 152032</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                Joti Foundation © {currentYear} All Right Reserved
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
