import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import hadith from "/public/assets/had.svg";
import quran from "/public/assets/qur.svg";
import fiqh from "/public/assets/fiqh.svg";
import arabic from "/public/assets/arabic.svg";
import { InView } from "./ui/animated/in-view";

const SUBJECTS = [
  {
    id: 1,
    icon: arabic,
    title: "Arabic",
    description:
      "Gain fluency in the Arabic language, the key to understanding Islamic texts.",
  },
  {
    id: 2,
    icon: quran,
    title: "Quran",
    description: "Master Quranic recitation, memorization, and Tafseer.",
  },
  {
    id: 3,
    icon: hadith,
    title: "Hadith",
    description:
      "Learn the sayings of the Prophet Muhammad (may the peace and blessing of Allah be upon him).",
  },
  {
    id: 4,
    icon: fiqh,
    title: "Fiqh",
    description: "Understand Islamic jurisprudence and law.",
  },
];

export function SubjectCard() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUBJECTS.map(({ id, icon, title, description }) => (
          <InView
            key={id}
            variants={{
              hidden: { opacity: 0, y: -100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="flex flex-col h-full hover:bg-black group">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e8b33f52] flex items-center justify-center">
                  <Image src={icon} alt={title} width={24} height={24} />
                </div>
                <CardTitle className="group-hover:text-yellow-500 text-[#760808] text-xl sm:text-2xl font-bold text-center">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-600 group-hover:text-yellow-500 text-center">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </InView>
        ))}
      </div>
    </section>
  );
}
