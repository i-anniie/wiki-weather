import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="main-container"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0 py-4">
        <div className="flex flex-col md:flex-row items-center md:gap-2 ">
          <p className="text-sm">
            ©{new Date().getFullYear()} Wiki Weather. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm md:border-l md:pl-2 border-black">
            <Link href="/privacy-policy">
              <h1 className="common-transition hover:underline">
                Privacy Policy
              </h1>
            </Link>
            <Link href="terms-and-conditions">
              <h1 className="common-transition hover:underline">
                Terms & Conditions
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end gap-1">
          <p className="text-sm">
            Designed & Developed By{" "}
            <span>
              <Link
                href="https://github.com/i-anniie"
                target="_blank"
                className="text-base font-semibold hover:text-blue-500"
              >
                Anwesh
              </Link>
            </span>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
