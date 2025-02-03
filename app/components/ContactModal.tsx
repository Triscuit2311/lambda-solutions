"use client";

import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import { Resend } from "resend";

const resend = new Resend("re_65CWJuUU_Mi35D8LoFcbCCZNaiGnoBQYn"); // Replace with your actual API key

//re_65CWJuUU_Mi35D8LoFcbCCZNaiGnoBQYn

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send this data to your backend
    console.log("Sending email to: fake@email.com");
    console.log("From:", email);
    console.log("Message:", message);

    try {
      const response = await resend.emails.send({
        from: email, // Use a verified sender email
        to: ["dantetrisciuzzi@proton.me"],
        subject: "lambda-solution inquire",
        text: `From: ${email}\n\nMessage: ${message}`,
      });

      //console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    try {
      const now = new Date();
      const response = await resend.emails.send({
        from: "your@email.com", // Use a verified sender email
        to: [email],
        subject: "Thank you for contacting Lambda Solutions, LLC",
        text: `
              Dear valued customer,

              Thank you for reaching out to us on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}.
              We have received your message and will get back to you as soon as possible.

              Best regards,
              Lambda Solutions Team
            `,
      });

      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    onClose();
    setEmail("");
    setMessage("");
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="relative">
                  <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
                    Contact Us
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-burgundy focus:border-burgundy"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-burgundy focus:border-burgundy"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-burgundy text-white py-2 px-4 rounded hover:bg-crimson transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
