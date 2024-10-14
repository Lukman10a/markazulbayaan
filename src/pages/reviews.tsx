import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book, GraduationCap, Users, Star, MessageCircle } from "lucide-react";
import Button from "../components/button";

export default function Component() {
  return (
    <div className=" ">
      <section className="bg-center object-cover bg-cover text-primary-foreground py-36 mb-8 bg-[url('../../public/assets/blog3.png')]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Markazul-Bayan</h2>
          <p className="text-xl mb-8 text-yellow-500">
            Seeking knowledge is a duty of all Muslims
          </p>
        </div>
      </section>

      <section className="mb-16 w-[90%] mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-yellow-500 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 w-[90%] mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Abu Isa Ibn Daud",
              location: "Kano, Nigeria",
              content:
                "I appreciate the structured roadmap provided for beginners. It helped me develop a solid foundation in Qur'an recitation and writing skills.",
            },
            {
              name: "Abu Khadija Al-Fulani",
              location: "Zaria, Nigeria",
              content:
                "Markazul-Bayan's approach to teaching the Arabic language is exceptional. I've learned so much in such a short time, and the teachers are incredibly supportive.",
            },
            {
              name: "Abu Jamal Al-Athary",
              location: "Olunlade, Ilorin Nigeria",
              content:
                "The lessons on Arabic grammar were clear and easy to follow. I now feel much more confident in my recitation and understanding of the Qur'an.",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-[#2e2101ec] text-white">
              <CardHeader className=" text-white">
                <CardTitle className=" text-white">
                  {testimonial.name}
                </CardTitle>
                <CardDescription className=" text-yellow-500">
                  {testimonial.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center w-[90%] mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">
          Start Your Islamic Learning Journey Today
        </h2>
        <p className="text-xl text-muted-foreground mb-6">
          Join thousands of students worldwide in pursuing sacred knowledge
        </p>
        <Button text="Enroll now" />
      </section>
    </div>
  );
}
