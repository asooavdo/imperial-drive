import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConversionSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">السيارة المناسبة</span>
            <br />
            <span className="text-gold-gradient">تنتظر مالكها الحقيقي</span>
          </h2>

          <div className="section-divider" />

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            ابدأ رحلتك نحو امتلاك سيارة أحلامك اليوم
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="imperial"
                size="xl"
                className="text-lg px-12"
                onClick={() => window.open("tel:+963998887359", "_blank")}
              >
                <Phone className="w-6 h-6" />
                اتصل الآن: 0998887359
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="imperialOutline"
                size="xl"
                className="text-lg px-12"
                onClick={() => window.open("https://wa.me/963998887359", "_blank")}
              >
                <MessageCircle className="w-6 h-6" />
                استشارة واتساب خاصة
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionSection;
