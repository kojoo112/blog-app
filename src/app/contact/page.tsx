import React from "react";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const HEADING_CLASS = "text-2xl font-bold";
const ICON_CLASS = "text-5xl transition-all hover:text-yellow-500";

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="text-center">
        <h2 className={HEADING_CLASS}>Contact Me</h2>
        <p>kapella000@gmail.com</p>
        <div className="flex justify-around mt-2 mb-8">
          <Link href="https://github.com/kojoo112">
            <FaGithub className={ICON_CLASS} />
          </Link>
          <Link href="https://youtube.com/@KoFiix">
            <FaYoutube className={ICON_CLASS} />
          </Link>
        </div>
        <h2 className={HEADING_CLASS}>Or Send me an email</h2>
      </div>
      <div className="w-full max-w-lg mt-4">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
