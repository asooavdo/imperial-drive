import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Shield, Calendar, MapPin, Gauge, Fuel, Settings, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import carBmwX7 from "@/assets/car-bmw-x7.jpg";
import carRangeRover from "@/assets/car-range-rover.jpg";
import carGle from "@/assets/car-gle.jpg";
import carCayenne from "@/assets/car-cayenne.jpg";
import carLexus from "@/assets/car-lexus.jpg";

const carsData = [
  {
    id: "1",
    name: "BMW X7",
    nameAr: "بي إم دبليو إكس 7",
    year: "2024",
    origin: "ألمانيا",
    originEn: "Germany",
    images: [carBmwX7, carBmwX7, carBmwX7, carBmwX7],
    price: "اتصل للسعر",
    specs: {
      engine: "3.0L Twin-Turbo 6-Cylinder",
      power: "375 حصان",
      torque: "520 نيوتن متر",
      transmission: "8-Speed Automatic",
      drivetrain: "xDrive AWD",
      fuelType: "بنزين",
      fuelEconomy: "10.5 لتر/100كم",
      seats: "7 مقاعد",
      acceleration: "5.8 ثانية (0-100)",
      topSpeed: "250 كم/س",
    },
    features: [
      "نظام الملاحة المتطور",
      "شاشة عرض أمامية",
      "مقاعد جلد فاخرة",
      "فتحة سقف بانورامية",
      "نظام صوت Harman Kardon",
      "كاميرات 360 درجة",
      "مساعد القيادة الذكي",
      "شحن لاسلكي للهاتف",
    ],
    description: "تجسد BMW X7 قمة الفخامة والأداء في فئة السيارات الرياضية متعددة الاستخدامات. مع تصميمها الجريء ومقصورتها الفسيحة التي تتسع لسبعة ركاب، توفر تجربة قيادة استثنائية تجمع بين القوة والراحة."
  },
  {
    id: "2",
    name: "Range Rover",
    nameAr: "رينج روفر أوتوبيوغرافي",
    year: "2024",
    origin: "بريطانيا",
    originEn: "UK",
    images: [carRangeRover, carRangeRover, carRangeRover, carRangeRover],
    price: "اتصل للسعر",
    specs: {
      engine: "4.4L Twin-Turbo V8",
      power: "523 حصان",
      torque: "750 نيوتن متر",
      transmission: "8-Speed Automatic",
      drivetrain: "4WD",
      fuelType: "بنزين",
      fuelEconomy: "12.8 لتر/100كم",
      seats: "5 مقاعد",
      acceleration: "4.6 ثانية (0-100)",
      topSpeed: "250 كم/س",
    },
    features: [
      "نظام Terrain Response",
      "تعليق هوائي تكيفي",
      "مقاعد مدفأة ومبردة",
      "نظام صوت Meridian",
      "شاشات خلفية للترفيه",
      "باب خلفي كهربائي",
      "إضاءة محيطية",
      "نظام الرؤية الليلية",
    ],
    description: "رينج روفر أوتوبيوغرافي تمثل أعلى مستويات الفخامة البريطانية. تجمع بين القدرات الاستثنائية على الطرق الوعرة والأناقة المطلقة، مع تقنيات متطورة ومواد فاخرة في كل تفصيل."
  },
  {
    id: "3",
    name: "Mercedes GLE Coupe",
    nameAr: "مرسيدس GLE كوبيه",
    year: "2023",
    origin: "ألمانيا",
    originEn: "Germany",
    images: [carGle, carGle, carGle, carGle],
    price: "اتصل للسعر",
    specs: {
      engine: "3.0L Inline-6 Turbo + EQ Boost",
      power: "429 حصان",
      torque: "520 نيوتن متر",
      transmission: "9G-TRONIC Automatic",
      drivetrain: "4MATIC AWD",
      fuelType: "بنزين هجين",
      fuelEconomy: "9.8 لتر/100كم",
      seats: "5 مقاعد",
      acceleration: "5.2 ثانية (0-100)",
      topSpeed: "250 كم/س",
    },
    features: [
      "نظام MBUX الذكي",
      "شاشة مزدوجة منحنية",
      "مقاعد AMG الرياضية",
      "نظام صوت Burmester",
      "القيادة شبه الذاتية",
      "إضاءة LED متكيفة",
      "نظام الركن الذاتي",
      "تحكم صوتي Hey Mercedes",
    ],
    description: "مرسيدس GLE كوبيه تجمع بين أناقة الكوبيه وعملية SUV. مع تقنية EQ Boost الهجينة وتصميمها الرياضي الديناميكي، توفر أداءً مثيراً مع كفاءة استثنائية في استهلاك الوقود."
  },
  {
    id: "4",
    name: "Porsche Cayenne",
    nameAr: "بورشه كايين توربو",
    year: "2024",
    origin: "ألمانيا",
    originEn: "Germany",
    images: [carCayenne, carCayenne, carCayenne, carCayenne],
    price: "اتصل للسعر",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "631 حصان",
      torque: "850 نيوتن متر",
      transmission: "8-Speed Tiptronic S",
      drivetrain: "AWD",
      fuelType: "بنزين",
      fuelEconomy: "13.5 لتر/100كم",
      seats: "5 مقاعد",
      acceleration: "3.7 ثانية (0-100)",
      topSpeed: "286 كم/س",
    },
    features: [
      "نظام PASM التكيفي",
      "فرامل سيراميك كربونية",
      "مقاعد رياضية Plus",
      "نظام صوت Bose",
      "شاشة لمسية مركزية",
      "عجلات 22 بوصة",
      "وضع Sport Chrono",
      "نظام رفع أمامي",
    ],
    description: "بورشه كايين توربو تقدم أداء سيارة رياضية حقيقية في هيكل SUV. مع محركها V8 المزدوج التوربو وتقنيات بورشه الحصرية، تمنحك تجربة قيادة لا تُنسى على كل طريق."
  },
  {
    id: "5",
    name: "Lexus LX 600",
    nameAr: "لكزس LX 600",
    year: "2024",
    origin: "اليابان",
    originEn: "Japan",
    images: [carLexus, carLexus, carLexus, carLexus],
    price: "اتصل للسعر",
    specs: {
      engine: "3.5L Twin-Turbo V6",
      power: "409 حصان",
      torque: "650 نيوتن متر",
      transmission: "10-Speed Automatic",
      drivetrain: "4WD",
      fuelType: "بنزين",
      fuelEconomy: "11.2 لتر/100كم",
      seats: "7 مقاعد",
      acceleration: "6.9 ثانية (0-100)",
      topSpeed: "210 كم/س",
    },
    features: [
      "نظام Multi-Terrain Select",
      "شاشة 12.3 بوصة",
      "مقاعد شبه كهربائية",
      "نظام صوت Mark Levinson",
      "تحكم مناخي 4 مناطق",
      "نظام أمان Lexus Safety+",
      "كاميرا تحت السيارة",
      "شاحن لاسلكي",
    ],
    description: "لكزس LX 600 تجسد الفخامة اليابانية الأصيلة مع موثوقية لا تضاهى. تتميز بقدرات استثنائية على الطرق الوعرة ومقصورة فاخرة تضمن الراحة القصوى لجميع الركاب."
  },
];

const financingPlans = [
  { months: 12, rate: "0%", note: "بدون فوائد" },
  { months: 24, rate: "2.5%", note: "فائدة تنافسية" },
  { months: 36, rate: "3.5%", note: "الأكثر شيوعاً" },
  { months: 48, rate: "4.5%", note: "أقساط مريحة" },
];

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const car = carsData.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">السيارة غير موجودة</h1>
          <Button variant="imperial" onClick={() => navigate("/")}>
            العودة للرئيسية
          </Button>
        </div>
      </div>
    );
  }

  const handleInquiry = () => {
    const message = encodeURIComponent(`مرحباً، أرغب بالاستفسار عن سيارة ${car.nameAr} ${car.year}`);
    window.open(`https://wa.me/963998887359?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            <span>العودة للمعرض</span>
          </button>
          <div className="text-foreground font-bold">{car.nameAr}</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Image Gallery */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[50vh] md:h-[70vh] overflow-hidden"
          >
            <img
              src={car.images[selectedImage]}
              alt={car.nameAr}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Origin Badge */}
            <div className="absolute top-24 right-6 bg-charcoal/90 backdrop-blur-sm border border-gold/30 px-4 py-2 rounded-full">
              <span className="text-gold font-medium">{car.origin} · {car.year}</span>
            </div>
          </motion.div>

          {/* Thumbnail Gallery */}
          <div className="container mx-auto px-6 -mt-16 relative z-10">
            <div className="flex gap-3 overflow-x-auto pb-4">
              {car.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-gold shadow-lg shadow-gold/30"
                      : "border-charcoal-light hover:border-gold/50"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Car Info */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-foreground">{car.nameAr}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6">{car.name}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {car.description}
                </p>

                {/* Specifications */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Settings className="w-6 h-6 text-gold" />
                    المواصفات التقنية
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { icon: Car, label: "المحرك", value: car.specs.engine },
                      { icon: Gauge, label: "القوة", value: car.specs.power },
                      { icon: Settings, label: "العزم", value: car.specs.torque },
                      { icon: Settings, label: "ناقل الحركة", value: car.specs.transmission },
                      { icon: Car, label: "الدفع", value: car.specs.drivetrain },
                      { icon: Fuel, label: "الوقود", value: car.specs.fuelType },
                      { icon: Fuel, label: "الاستهلاك", value: car.specs.fuelEconomy },
                      { icon: Car, label: "المقاعد", value: car.specs.seats },
                      { icon: Gauge, label: "التسارع", value: car.specs.acceleration },
                    ].map((spec, index) => (
                      <div
                        key={index}
                        className="luxury-card p-4 rounded-lg"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <spec.icon className="w-4 h-4 text-gold" />
                          <span className="text-sm text-muted-foreground">{spec.label}</span>
                        </div>
                        <p className="text-foreground font-medium text-sm">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-gold" />
                    المزايا والتجهيزات
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-charcoal/50 rounded-lg border border-charcoal-light"
                      >
                        <div className="w-2 h-2 bg-gold rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                {/* Price Card */}
                <div className="luxury-card p-6 rounded-xl">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">السعر</p>
                    <p className="text-3xl font-bold text-gold">{car.price}</p>
                  </div>
                  <div className="space-y-3">
                    <Button
                      variant="imperial"
                      className="w-full"
                      size="lg"
                      onClick={handleInquiry}
                    >
                      <MessageCircle className="w-5 h-5" />
                      استفسار عبر واتساب
                    </Button>
                    <Button
                      variant="imperialOutline"
                      className="w-full"
                      size="lg"
                      onClick={() => window.open("tel:+963998887359")}
                    >
                      <Phone className="w-5 h-5" />
                      اتصل الآن
                    </Button>
                  </div>
                </div>

                {/* Financing Options */}
                <div className="luxury-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    خيارات التمويل
                  </h3>
                  <div className="space-y-3">
                    {financingPlans.map((plan, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-charcoal/50 rounded-lg border border-charcoal-light hover:border-gold/30 transition-colors"
                      >
                        <div>
                          <p className="text-foreground font-medium">{plan.months} شهر</p>
                          <p className="text-xs text-muted-foreground">{plan.note}</p>
                        </div>
                        <div className="text-gold font-bold">{plan.rate}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    * الأسعار والشروط قابلة للتغيير
                  </p>
                </div>

                {/* Location */}
                <div className="luxury-card p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    متوفرة في
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📍 دمشق - طريق المطار</p>
                    <p>📍 حمص - البياضة - سوق السيارات</p>
                    <p>📍 إدلب - سرمدا</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-charcoal/95 backdrop-blur-md border-t border-gold/20 lg:hidden">
        <div className="flex gap-3">
          <Button
            variant="imperial"
            className="flex-1"
            onClick={handleInquiry}
          >
            <MessageCircle className="w-5 h-5" />
            واتساب
          </Button>
          <Button
            variant="imperialOutline"
            className="flex-1"
            onClick={() => window.open("tel:+963998887359")}
          >
            <Phone className="w-5 h-5" />
            اتصال
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
