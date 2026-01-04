import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/altayer-logo.png";
import heroCar from "@/assets/hero-car.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroCar} alt="سيارة فاخرة" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo with Animation */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1,
        ease: "easeOut"
      }} className="mb-6">
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-2xl overflow-hidden shadow-gold">
            <img src={logo} alt="الطير الذهبي لتجارة السيارات" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-foreground">الطير الذهبي</span>
          <br />
          <span className="text-gold-gradient">لتجارة السيارات</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="text-xl md:text-2xl text-ivory-muted mb-4 max-w-2xl mx-auto">
          سيارتك من الحلم إلى الواقع 🏎️
        </motion.p>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          استيراد مباشر من الإمارات، كوريا، وأمريكا
          <br />
          اختيار النخبة لمن يعرف قيمة السيارة الحقيقية
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="imperial" size="xl" className="w-full sm:w-auto" onClick={() => window.open("https://wa.me/963998887359", "_blank")}>
            <MessageCircle className="w-5 h-5" />
            ابدأ رحلتك نحو التميز
          </Button>
          <Button variant="imperialOutline" size="xl" className="w-full sm:w-auto" onClick={() => window.open("tel:+963998887359", "_blank")}>
            <Phone className="w-5 h-5" />
            اتصل الآن
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        
      </motion.div>
    </section>;
};
export default HeroSection;