"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { useTranslation } from "react-i18next";

export const AuthContainer = () => {
  const [showRegister, setShowRegister] = useState(false);
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };
  const springTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  };
  const welcomeVariantsRight: Variants = {
    hidden: { x: "100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: springTransition,
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: springTransition,
    },
  };

  const welcomeVariantsLeft: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: springTransition,
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: springTransition,
    },
  };

  const formVariantsRight: Variants = {
    hidden: { x: "100%", opacity: 0, scale: 0.98 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: springTransition,
    },
    exit: {
      x: "-100%",
      opacity: 0,
      scale: 0.98,
      transition: springTransition,
    },
  };

  const formVariantsLeft: Variants = {
    hidden: { x: "-100%", opacity: 0, scale: 0.98 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: springTransition,
    },
    exit: {
      x: "100%",
      opacity: 0,
      scale: 0.98,
      transition: springTransition,
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl h-[90vh] overflow-hidden flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={showRegister ? "welcome-left" : "welcome-right"}
            className={`w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-12 text-white text-center
              ${
                !showRegister
                  ? "order-2 rounded-l-[180px]"
                  : "order-1 rounded-r-[180px]"
              }`}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={showRegister ? welcomeVariantsLeft : welcomeVariantsRight}
          >
            <motion.div
              className="max-w-md relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                className="text-4xl font-bold mb-4"
                variants={itemVariants}
              >
                {showRegister
                  ? t("register.titleRegister")
                  : t("login.titleLogin")}
              </motion.h1>
              <motion.p className="mb-8 text-blue-100" variants={itemVariants}>
                {showRegister
                  ? t("register.options")
                  : t("login.subtitleLogin")}
              </motion.p>
              <motion.button
                onClick={() => setShowRegister(!showRegister)}
                className="border-2 border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-200"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showRegister
                  ? t("register.buttonLogin")
                  : t("login.buttonRegister")}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={showRegister ? "register" : "login"}
            variants={showRegister ? formVariantsRight : formVariantsLeft}
            initial="hidden"
            animate="show"
            exit="exit"
            className={`w-1/2 flex items-center justify-center p-8 bg-white ${
              !showRegister ? "order-1" : "order-2"
            }`}
          >
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              {showRegister ? (
                <RegisterForm onSwitchToLogin={() => setShowRegister(false)} />
              ) : (
                <LoginForm onSwitchToRegister={() => setShowRegister(true)} />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
