import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book, GraduationCap, Users, MessageCircle, Star, Quote } from "lucide-react";
import Button from "../components/button";
import { testimonialsData } from "@/components/testimonial";
import { motion } from "framer-motion";

export default function Component() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
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
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="bg-center object-cover bg-cover text-primary-foreground py-36 xl:py-32 lg:py-28 md:py-24 sm:py-20 mb-8 lg:mb-6 md:mb-4 bg-[url('../../public/assets/blog3.png')] relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4 text-center relative z-10">
          <motion.h2 
            className="text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-bold mb-4 lg:mb-3 md:mb-2"
            variants={itemVariants}
          >
            Markazul-Bayan
          </motion.h2>
          <motion.p 
            className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs mb-8 lg:mb-6 md:mb-4 text-yellow-500 p-4 lg:p-3 md:p-2 px-10 xl:px-8 lg:px-6 md:px-4 sm:px-2 max-w-5xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            At Markazul Bayaan, students from around the globe gather to deepen
            their understanding of Islam, guided by expert teachers and a rich
            curriculum. Our community is built on a shared passion for learning
            and spiritual growth. Below, you can read what some of our students
            have to say about their experiences and the impact our school has
            had on their journey.
          </motion.p>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section 
        className="mb-16 lg:mb-12 md:mb-8 w-[90%] xl:w-[92%] lg:w-[95%] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold text-center mb-8 lg:mb-6 md:mb-4 text-yellow-500"
          variants={itemVariants}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-6 lg:gap-4 md:gap-3">
          {[
            {
              icon: Book,
              title: "Comprehensive Curriculum",
              description:
                "From Quran and Hadith to Islamic history and jurisprudence",
            },
            {
              icon: GraduationCap,
              title: "Expert Instructors",
              description: "Learn from qualified scholars and educators",
            },
            {
              icon: Users,
              title: "Interactive Community",
              description:
                "Engage with fellow learners in discussions and group activities",
            },
            {
              icon: MessageCircle,
              title: "Live Sessions",
              description: "Participate in real-time classes and Q&A sessions",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm group">
                <CardHeader className="text-center pb-4 lg:pb-3">
                  <feature.icon className="w-10 h-10 lg:w-8 lg:h-8 md:w-6 md:w-6 text-yellow-500 mb-2 lg:mb-1 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="lg:text-base md:text-sm sm:text-xs group-hover:text-yellow-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center lg:text-sm md:text-xs leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Student Testimonials Section */}
      <motion.section 
        className="mb-16 lg:mb-12 md:mb-8 w-[90%] xl:w-[92%] lg:w-[95%] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold text-center mb-8 lg:mb-6 md:mb-4 text-yellow-500"
          variants={itemVariants}
        >
          What Our Students Say
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-4 md:gap-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group h-full">
                <CardHeader className="relative">
                  <Quote className="absolute top-4 lg:top-3 right-4 lg:right-3 w-8 h-8 lg:w-6 lg:h-6 md:w-5 md:h-5 text-yellow-500/30" />
                  <CardTitle className="text-white lg:text-base md:text-sm group-hover:text-yellow-300 transition-colors duration-300">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-yellow-500 lg:text-sm md:text-xs flex items-center">
                    <Star className="w-4 h-4 lg:w-3 lg:h-3 mr-1 fill-yellow-500" />
                    {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white lg:text-sm md:text-xs leading-relaxed italic">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="text-center w-[90%] xl:w-[92%] lg:w-[95%] mx-auto mb-12 lg:mb-10 md:mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl lg:rounded-xl p-12 xl:p-10 lg:p-8 md:p-6 sm:p-4 border border-yellow-100 shadow-lg">
          <motion.h2 
            className="text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold mb-4 lg:mb-3 md:mb-2 text-yellow-500"
            variants={itemVariants}
          >
            Start Your Islamic Learning Journey Today
          </motion.h2>
          <motion.p 
            className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-muted-foreground mb-6 lg:mb-4 md:mb-3 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join thousands of students worldwide in pursuing sacred knowledge and spiritual growth
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asLink
              href="https://bit.ly/Learn-at-markazbayan"
              text="Enroll now"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
