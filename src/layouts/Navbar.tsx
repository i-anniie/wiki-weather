import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ProfileInfo, WeatherCardSlider } from "@/components/common";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const { push } = useRouter();

  return (
    <motion.header
      initial={{ opacity: 1, y: -100 }}
      animate={{
        y: headerVisible ? 0 : -100,
        opacity: headerVisible ? 1 : 0,
      }}
      transition={{ duration: 0.8 }}
      className={` ${showDrawer ? "bg-dark-slate" : "bg-dark-blue/10"}`}
    >
      <section className="flex justify-center items-center py-2">
        <div className="main-container flex justify-between items-center">
          <div
            className="w-1/3 flex group items-center gap-2 text-xl md:text-2xl font-semibold cursor-pointer hover:gap-3 common-transition hover:text-light-yellow"
            onClick={() => push("/")}
          >
            <motion.p
              initial={{ x: 40 }}
              animate={!showDrawer ? { x: 0 } : { x: 10 }}
              transition={{ duration: 1.3 }}
            >
              Wiki
            </motion.p>
            <motion.p
              initial={{ x: 50 }}
              animate={!showDrawer ? { x: 0 } : { x: 20 }}
              transition={{ duration: 1.5 }}
            >
              Weather
            </motion.p>
          </div>
          <div className="hidden md:block w-1/3">
            <WeatherCardSlider />
          </div>
          <div className="flex justify-end items-center gap-2 w-1/3">
            <ProfileInfo fullName="John Doe" />
          </div>
        </div>
      </section>
    </motion.header>
  );
};

export default Navbar;
