import { motion } from "framer-motion";
import logo from "@/assets/altayer-logo.png";
import { Instagram, Send, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <img
              src={logo}
              alt="الطير الذهبي"
              className="w-24 h-24 mx-auto md:mx-0 mb-4 object-contain"
            />
            <h3 className="text-xl font-bold text-foreground mb-2">
              الطير الذهبي لتجارة السيارات
            </h3>
            <p className="text-muted-foreground text-sm">
              سيارتك من الحلم إلى الواقع
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-gold font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="tel:+963998887359"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                0998887359
              </a>
              <p className="text-muted-foreground text-sm">
                دمشق - حمص - إدلب
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-gold font-bold mb-4">تابعنا</h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/altayeralzhabi_cars"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-charcoal-light border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-imperial-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/altayeralzahabi_cars"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-charcoal-light border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-imperial-black transition-all duration-300"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} الطير الذهبي لتجارة السيارات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
