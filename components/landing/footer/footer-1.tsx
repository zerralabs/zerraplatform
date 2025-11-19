"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { Link } from "@/i18n/navigation";

export default function Footer1() {
  return (
    <motion.footer
      className="border-t mt-[55px] py-[55px]"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto lg:px-10 md:px-5 px-4 2xl:px-0 max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link href="/">
              <div className="flex items-center gap-2">
                <Logo className="w-[45px] h-[45px]" />
                <span className="text-xl font-semibold text-black">ZerraLabs</span>
              </div>
            </Link>
          </motion.div>
          <p className="mt-4 text-sm text-[#686869]">
            © {new Date().getFullYear()} ZerraLabs. All rights reserved.
          </p>
        </div>

        {/* Legal Links */}
        <motion.div
          className="flex gap-6 text-sm"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="/terms" className="text-[#686869] hover:text-black transition-colors">
            Terms of Service
          </Link>
          <Link href="/policy" className="text-[#686869] hover:text-black transition-colors">
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}
