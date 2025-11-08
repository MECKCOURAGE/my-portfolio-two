import {type ReactNode } from "react";
// import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
};

const Dialog = ({ isOpen, onClose, title, children, className = "" }: DialogProps) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`relative z-50 bg-background border border-[#E2E8F0]/20 rounded-2xl shadow-xl w-80 md:w-full md:max-w-md p-6 text-slate ${className}`}
          >
            {title && (
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  ✕
                </button>
              </div>
            )}
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
