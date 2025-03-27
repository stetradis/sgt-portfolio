import { Disclosure } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun, BsDownload } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
];

const Navigation = (props: any) => {
  const { mode, setMode } = props;

  const toggleDarkMode = () => {
    const newMode = !mode;
    setMode(newMode);
    try {
      localStorage.setItem("dark", JSON.stringify(newMode));

      if (newMode) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white/90 dark:bg-dark backdrop-blur-sm shadow-sm"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AiOutlineClose
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileTap={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    </motion.div>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <motion.div
                  className="flex flex-shrink-0 items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    className="h-10 w-auto"
                    src="/st-logo.png"
                    alt="ST logo"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="rounded-md px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-300"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="rounded-full shadow-md bg-gray-100 dark:bg-dark-card p-2 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleDarkMode}
                >
                  {mode ? (
                    <BsFillMoonStarsFill className="text-xl text-gray-700 dark:text-gray-300" />
                  ) : (
                    <BsSun className="text-xl text-gray-700 dark:text-gray-300" />
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={motion.a}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-dark-card transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          <div className="h-0.5 bg-gradient-to-r from-primary-light via-primary to-primary-dark"></div>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
