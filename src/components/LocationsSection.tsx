import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "المقر الرئيسي",
    nameEn: "Imperial Headquarters",
    city: "دمشق",
    address: "طريق المطار",
    phone: "0998887359",
  },
  {
    id: 2,
    name: "المعقل الجنوبي",
    nameEn: "Southern Stronghold",
    city: "حمص",
    address: "البياضة - سوق السيارات",
    phone: "0998887359",
  },
  {
    id: 3,
    name: "القلعة الشمالية",
    nameEn: "Northern Citadel",
    city: "إدلب",
    address: "سرمدا",
    phone: "0998887359",
  },
];

const LocationsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/20 rounded-full" />
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
            <span className="text-foreground">أراضينا </span>
            <span className="text-gold-gradient">الاستراتيجية</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ثلاث قلاع تخدمك أينما كنت
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="luxury-card rounded-lg p-8 text-center relative group"
            >
              {/* Castle Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center group-hover:shadow-gold transition-all duration-500">
                <MapPin className="w-8 h-8 text-gold" />
              </div>

              {/* Location Name */}
              <h3 className="text-xl font-bold text-gold mb-1">
                {location.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {location.nameEn}
              </p>

              {/* City */}
              <p className="text-2xl font-bold text-foreground mb-2">
                {location.city}
              </p>

              {/* Address */}
              <p className="text-muted-foreground mb-6">
                {location.address}
              </p>

              {/* Phone */}
              <a
                href={`tel:+963${location.phone.slice(1)}`}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{location.phone}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
