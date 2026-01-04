import { motion } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import carBmwX7 from "@/assets/car-bmw-x7.jpg";
import carRangeRover from "@/assets/car-range-rover.jpg";
import carGle from "@/assets/car-gle.jpg";
import carCayenne from "@/assets/car-cayenne.jpg";
import carLexus from "@/assets/car-lexus.jpg";

const cars = [
  {
    id: 1,
    name: "BMW X7",
    nameAr: "بي إم دبليو إكس 7",
    year: "MMXXIV",
    yearNum: "2024",
    origin: "ألمانيا",
    image: carBmwX7,
  },
  {
    id: 2,
    name: "Range Rover",
    nameAr: "رينج روفر أوتوبيوغرافي",
    year: "MMXXIV",
    yearNum: "2024",
    origin: "بريطانيا",
    image: carRangeRover,
  },
  {
    id: 3,
    name: "Mercedes GLE Coupe",
    nameAr: "مرسيدس GLE كوبيه",
    year: "MMXXIII",
    yearNum: "2023",
    origin: "ألمانيا",
    image: carGle,
  },
  {
    id: 4,
    name: "Porsche Cayenne",
    nameAr: "بورشه كايين توربو",
    year: "MMXXIV",
    yearNum: "2024",
    origin: "ألمانيا",
    image: carCayenne,
  },
  {
    id: 5,
    name: "Lexus LX 600",
    nameAr: "لكزس LX 600",
    year: "MMXXIV",
    yearNum: "2024",
    origin: "اليابان",
    image: carLexus,
  },
];

const CarGallery = () => {
  const navigate = useNavigate();

  const handleInquiry = (carName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(`مرحباً، أرغب بالاستفسار عن سيارة ${carName}`);
    window.open(`https://wa.me/963998887359?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">معرض </span>
            <span className="text-gold-gradient">السيارات</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة حصرية من أرقى السيارات المستوردة
          </p>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="luxury-card rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => navigate(`/car/${car.id}`)}
            >
              {/* Car Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.nameAr}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Origin Badge */}
                <div className="absolute top-4 right-4 bg-charcoal/90 backdrop-blur-sm border border-gold/30 px-3 py-1 rounded-full">
                  <span className="text-gold text-sm font-medium">{car.origin}</span>
                </div>
              </div>

              {/* Car Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {car.nameAr}
                    </h3>
                    <p className="text-sm text-muted-foreground">{car.name}</p>
                  </div>
                  <div className="text-left">
                    <span className="text-gold text-lg font-bold">{car.yearNum}</span>
                    <p className="text-xs text-muted-foreground">{car.year}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="imperial"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/car/${car.id}`);
                    }}
                  >
                    <Eye className="w-4 h-4" />
                    التفاصيل
                  </Button>
                  <Button
                    variant="imperialOutline"
                    className="flex-1"
                    onClick={(e) => handleInquiry(car.nameAr, e)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    استفسار
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            هل تبحث عن سيارة محددة؟
          </p>
          <Button
            variant="imperial"
            size="lg"
            onClick={() => window.open("https://wa.me/963998887359", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            تواصل معنا الآن
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CarGallery;
