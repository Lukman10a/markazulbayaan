import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";
import { FaQuran } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <main className="flex-grow">
        <section className="bg-center object-cover bg-cover text-primary-foreground py-20 bg-[url('../../public/assets/blog3.png')]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Markazul-Bayan
            </h2>
            <p className="text-xl mb-8">
              Your Premier Destination for Arabic, Quranic Studies, and Islamic
              Monotheism
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-8 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto">
              At Markazul-Bayan, we are dedicated to guiding individuals on
              their journey of spiritual and intellectual growth. Our mission is
              to provide comprehensive education in Arabic language, Quranic
              studies, and Islamic monotheism, empowering our students to deepen
              their understanding and strengthen their connection to their
              faith.
            </p>
          </div>
        </section>

        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-12 text-center">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h4 className="text-xl font-semibold mb-2">Arabic Language</h4>
                <p>
                  Comprehensive Arabic courses for all levels, from beginners to
                  advanced learners.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md text-center">
                <FaQuran className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h4 className="text-xl font-semibold mb-2">Quranic Studies</h4>
                <p>
                  In-depth Quranic courses focusing on recitation, memorization,
                  and understanding.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h4 className="text-xl font-semibold mb-2">
                  Tawhid (Islamic Monotheism)
                </h4>
                <p>
                  Courses on Islamic theology and monotheism to strengthen your
                  faith and understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold mb-8">
              Begin Your Journey Today
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you aspire to become a proficient Arabic speaker, deepen
              your understanding of the Quran, or strengthen your connection to
              Islamic monotheism, Markazul-Bayan is here to guide you on your
              quest for wisdom, insight, and enlightenment.
            </p>
            <Link href="https://bit.ly/Learn-at-markazbayan">
              <Button size="lg" className="bg-yellow-900">
                Enroll Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
