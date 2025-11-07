import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import halfPhoto from "../assets/half-photo.png";
import fbIcon from "../assets/facebook.svg";
import igIcon from "../assets/instagram.svg";
import ghIcon from "../assets/github.svg";
import sendIcon from "../assets/send-icon.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-50 text-white gap-8"
    >
      {/*message text fade up animation*/}
      <motion.div
        className="z-10 flex flex-col justify-center text-left md:w-[45%] max-w-xl mt-20 md:mt-0 md:ml-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold mb-2">
          Send a <span className="text-[#e97216]">Message</span>
        </h2>
        <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
          Got a question, project idea, or just want to say hi? Feel free to reach out or fill out the form below. I’d love to hear from you!
        </p>

        {/*forms, using shadcn for input and text area*/}
        <form
          action="https://formspree.io/f/xdkporgn"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-md mb-2">Your Name:</label>
            <Input
              type="text"
              name="name"
              required
              className="w-full bg-[#3b3b3b] text-white py-4 px-5 text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#e97216] border-none"
            />
          </div>

          <div>
            <label className="block text-md mb-2">Your E-mail:</label>
            <Input
              type="email"
              name="email"
              required
              className="w-full bg-[#3b3b3b] text-white py-4 px-5 text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#e97216] border-none"
            />
          </div>

          <div>
            <label className="block text-md mb-2">Your Message:</label>
            <Textarea
              name="message"
              rows="4"
              required
              className="w-full bg-[#3b3b3b] text-white py-4 px-5 text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#e97216] border-none"
            ></Textarea>
          </div>

          {/*shadcn button*/}
          <Button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#e97216] hover:bg-[#ff8c32] text-white text-md font-semibold py-6 px-7 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,140,0,0.6)]"
          >
            <img src={sendIcon} alt="Send" className="w-5 h-5 invert" />
            <span>Send</span>
          </Button>
        </form>
      </motion.div>

      {/*image fade up animation*/}
      <motion.div
        className="relative flex justify-center md:justify-end md:w-1/2 z-10 mt-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={halfPhoto}
          alt="Mary Strelline"
          className="w-[500px] md:w-[600px] object-contain drop-shadow-[0_0_30px_rgba(233,114,22,0.5)]"
        />
      </motion.div>

      {/*social link iconss*/}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-5">
        <a
          href="https://www.facebook.com/makusannn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={fbIcon}
            alt="Facebook"
            className="w-8 hover:scale-110 transition-transform"
          />
        </a>

        <a
          href="https://instagram.com/makusannn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={igIcon}
            alt="Instagram"
            className="w-8 hover:scale-110 transition-transform"
          />
        </a>

        <a
          href="https://github.com/makusannn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ghIcon}
            alt="GitHub"
            className="w-8 hover:scale-110 transition-transform"
          />
        </a>
      </div>

    </section>
    
  );
}
