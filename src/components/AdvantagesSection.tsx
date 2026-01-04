import { motion } from "framer-motion";
import { Shield, Globe, Award, FileCheck } from "lucide-react";

const advantages = [
  {
    icon: Globe,
    title: "استيراد مباشر",
    description: "أقصر سلسلة توريد لأعلى مستوى من ضبط الجودة",
  },
  {
    icon: Shield,
    title: "ثقة إمبراطورية",
    description: "سمعة بُنيت عبر عقود، لا سنوات",
  },
  {
    icon: Award,
    title: "انتقاء نخبوي",
    description: "عيون خبيرة تختار بيان سيارتك",
  },
  {
    icon: FileCheck,
    title: "ضمان الأصالة",
    description: "كل سيارة تحمل حمضها النووي الأصيل",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gold-gradient">لماذا الطير الذهبي؟</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم لك تجربة شراء سيارة لا مثيل لها
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="luxury-card rounded-lg p-8 text-center group"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-charcoal-light border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-all duration-500 group-hover:shadow-gold-sm">
                <advantage.icon className="w-10 h-10 text-gold" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
