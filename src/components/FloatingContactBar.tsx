import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/altayer-logo.png";

const FloatingContactBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 contact-bar py-4 px-4 md:hidden"
    >
      <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
        {/* Logo */}
        <img
          src={logo}
          alt="الطير الذهبي"
          className="w-12 h-12 object-contain"
        />

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="contact"
            size="iconLg"
            onClick={() => window.open("https://wa.me/963998887359", "_blank")}
            aria-label="واتساب"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button
            variant="contact"
            size="iconLg"
            onClick={() => window.open("tel:+963998887359", "_blank")}
            aria-label="اتصال"
          >
            <Phone className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingContactBar;
