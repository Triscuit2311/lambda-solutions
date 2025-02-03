import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-accent-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-coral">Lambda Solutions, LLC</h3>
            <p className="text-secondary-light">Revolutionizing motorsports software research and development</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-secondary-light hover:text-coral transition duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-secondary-light hover:text-orange transition duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#founder" className="text-secondary-light hover:text-crimson transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-light hover:text-burgundy transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-crimson">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-light hover:text-coral transition duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-secondary-light hover:text-orange transition duration-300">
                <Twitter />
              </a>
              <a href="#" className="text-secondary-light hover:text-crimson transition duration-300">
                <LinkedIn />
              </a>
              <a href="#" className="text-secondary-light hover:text-burgundy transition duration-300">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary text-center">
          <p className="text-secondary-light">
            &copy; {new Date().getFullYear()} Lambda Solutions, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

