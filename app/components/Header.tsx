"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";
import Image from "next/image";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-accent-light shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lambda_solutions-NpmfBrAhAO6EJNxq3kLUMRuS2Reyi5.svg"
            alt="Lambda Solutions Logo"
            width={120}
            height={120}
            priority
          />
          {/* <span className="ml-2 text-xl font-bold text-primary">Lambda Solutions</span> */}
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="text-primary hover:text-crimson transition duration-300"
              >
                Solutions
              </button>
            </li>
            {/* <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-primary hover:text-orange transition duration-300"
              >
                Testimonials
              </button>
            </li> */}
            <li>
              <button
                onClick={() => scrollToSection("founder")}
                className="text-primary hover:text-coral transition duration-300"
              >
                About Us
              </button>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            const email = "lambda.solutions.llc@proton.me";
            const subject = encodeURIComponent("Inquiry about your services");
            const body = encodeURIComponent(
              "Hello,\n\nI would like to get more information about...",
            );
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
          }}
          className="bg-burgundy text-accent-light px-4 py-2 rounded hover:bg-crimson transition duration-300"
        >
          Contact Us
        </button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
