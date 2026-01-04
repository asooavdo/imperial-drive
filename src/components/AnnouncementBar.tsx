import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has dismissed the bar before
    const dismissed = sessionStorage.getItem("announcementDismissed");
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementDismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gold via-gold-light to-gold py-3 px-4"
        >
          <div className="container mx-auto flex items-center justify-center gap-4">
            <p className="text-imperial-black font-semibold text-sm md:text-base text-center">
              🚗 وصول جديد: BMW X7 2024 - محجوزة لعميل مميز
            </p>
            <button
              onClick={handleDismiss}
              className="text-imperial-black/70 hover:text-imperial-black transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
