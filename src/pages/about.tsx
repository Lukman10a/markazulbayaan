import Testimonials from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";
import { FaQuran } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

export default function AboutUs() {
  const { theme } = useTheme();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          className={`bg-center object-cover bg-cover text-primary-foreground py-32 xl:py-28 lg:py-24 md:py-20 sm:py-16 bg-[url('../../public/assets/blog3.png')] relative ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Dark overlay for better text readability */}
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-black/70' 
              : 'bg-black/40'
          }`}></div>
          
          <div className="container mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4 text-center relative z-10">
            <motion.h2 
              className="text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-bold mb-4 lg:mb-3 md:mb-2 text-white"
              variants={itemVariants}
            >
              Welcome to Markazul-Bayan
            </motion.h2>
            <motion.p 
              className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs mb-8 lg:mb-6 md:mb-4 max-w-4xl mx-auto text-white"
              variants={itemVariants}
            >
              Your Premier Destination for Arabic, Quranic Studies, and Islamic
              Monotheism
            </motion.p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          className={`py-16 xl:py-14 lg:py-12 md:py-10 sm:py-8 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-background'
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4">
            <motion.h3 
              className={`text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold mb-8 lg:mb-6 md:mb-4 text-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              variants={itemVariants}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className={`text-lg xl:text-base lg:text-sm md:text-xs text-center max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              variants={itemVariants}
            >
              At Markazul-Bayan, we are dedicated to guiding individuals on
              their journey of spiritual and intellectual growth. Our mission is
              to provide comprehensive education in Arabic language, Quranic
              studies, and Islamic monotheism, empowering our students to deepen
              their understanding and strengthen their connection to their
              faith.
            </motion.p>
          </div>
        </motion.section>

        {/* What We Offer Section */}
        <motion.section 
          className={`py-16 xl:py-14 lg:py-12 md:py-10 sm:py-8 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-yellow-200'
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4">
            <motion.h3 
              className={`text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold mb-12 lg:mb-10 md:mb-8 sm:mb-6 text-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              variants={itemVariants}
            >
              What We Offer
            </motion.h3>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-6 md:gap-4">
              <motion.div 
                className={`p-6 lg:p-5 md:p-4 rounded-lg shadow-md text-center group transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-background'
                }`}
                variants={cardVariants}
                whileHover="hover"
              >
                <BookOpen className="w-12 h-12 lg:w-10 lg:h-10 md:w-8 md:h-8 mx-auto mb-4 lg:mb-3 md:mb-2 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                <h4 className={`text-xl lg:text-lg md:text-base sm:text-sm font-semibold mb-2 lg:mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Arabic Language</h4>
                <p className={`lg:text-sm md:text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Comprehensive Arabic courses for all levels, from beginners to
                  advanced learners.
                </p>
              </motion.div>
              <motion.div 
                className={`p-6 lg:p-5 md:p-4 rounded-lg shadow-md text-center group transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-background'
                }`}
                variants={cardVariants}
                whileHover="hover"
              >
                <FaQuran className="w-12 h-12 lg:w-10 lg:h-10 md:w-8 md:h-8 mx-auto mb-4 lg:mb-3 md:mb-2 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                <h4 className={`text-xl lg:text-lg md:text-base sm:text-sm font-semibold mb-2 lg:mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Quranic Studies</h4>
                <p className={`lg:text-sm md:text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  In-depth Quranic courses focusing on recitation, memorization,
                  and understanding.
                </p>
              </motion.div>
              <motion.div 
                className={`p-6 lg:p-5 md:p-4 rounded-lg shadow-md text-center group transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-background'
                }`}
                variants={cardVariants}
                whileHover="hover"
              >
                <Heart className="w-12 h-12 lg:w-10 lg:h-10 md:w-8 md:h-8 mx-auto mb-4 lg:mb-3 md:mb-2 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                <h4 className={`text-xl lg:text-lg md:text-base sm:text-sm font-semibold mb-2 lg:mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Tawhid (Islamic Monotheism)
                </h4>
                <p className={`lg:text-sm md:text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Courses on Islamic theology and monotheism to strengthen your
                  faith and understanding.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section 
          className={`py-16 xl:py-14 lg:py-12 md:py-10 sm:py-8 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-background'
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4 text-center">
            <motion.h3 
              className={`text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold mb-8 lg:mb-6 md:mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              variants={itemVariants}
            >
              Begin Your Journey Today
            </motion.h3>
            <motion.p 
              className={`text-lg xl:text-base lg:text-sm md:text-xs mb-8 lg:mb-6 md:mb-4 max-w-2xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              variants={itemVariants}
            >
              Whether you aspire to become a proficient Arabic speaker, deepen
              your understanding of the Quran, or strengthen your connection to
              Islamic monotheism, Markazul-Bayan is here to guide you on your
              quest for wisdom, insight, and enlightenment.
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="lg:text-sm md:text-xs">
                <Link href="https://bit.ly/Learn-at-markazbayan">Enroll Now</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
        
        <Testimonials />
      </main>
    </>
  );
}
