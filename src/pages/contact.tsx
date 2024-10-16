import { useToast } from "@/components/ui/use-toast";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3, MdMessage } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [touched, setTouched] = useState({
    from_name: false,
    from_email: false,
    phone_number: false,
    message: false,
  });
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone_number: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    from_name: "",
    from_email: "",
    phone_number: "",
    message: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const { from_name, from_email, phone_number, message } = formData;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email);
    const isPhoneNumberValid = /^[+]?[0-9]{10,15}$/.test(phone_number); // Validates phone numbers with optional + and 10-15 digits

    const isFormValid =
      from_name.trim() !== "" &&
      isEmailValid &&
      isPhoneNumberValid &&
      message.trim() !== "";
    setIsFormValid(isFormValid);

    setValidationErrors({
      from_name:
        from_name.trim() === ""
          ? touched.from_name
            ? "Name is required"
            : ""
          : "",
      from_email:
        from_email.trim() === ""
          ? touched.from_email
            ? "Email is required"
            : ""
          : !isEmailValid
          ? touched.from_email
            ? "Invalid email format"
            : ""
          : "",
      phone_number:
        phone_number.trim() === ""
          ? touched.phone_number
            ? "Phone number is required"
            : ""
          : !isPhoneNumberValid
          ? touched.phone_number
            ? "Invalid phone number format"
            : ""
          : "",
      message:
        message.trim() === ""
          ? touched.message
            ? "Message is required"
            : ""
          : "",
    });
  }, [formData, touched]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAIL_KEY as string
        );

        if (result.text === "OK" && formRef.current) {
          formRef.current.reset();
          setFormData({
            from_name: "",
            from_email: "",
            phone_number: "",
            message: "",
          });
          setTouched({
            from_name: false,
            from_email: false,
            phone_number: false,
            message: false,
          });
          toast({
            title: "Successful",
            description: `Message Sent: ${result.text}`,
            className: "w-fit",
            duration: 3000,
          });
        } else {
          throw new Error(result.text);
        }
      } catch (error: any) {
        console.error("Error sending email:", error);
        console.log(error);
        toast({
          variant: "destructive",
          className: "w-fit",
          title: "An error occurred while sending the email",
          description: `${error.message || "Unknown error"}`,
          duration: 3000,
        });
        setError("An error occurred while sending the email");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative isolate px-4 bg-[url(/assets/bg.jpg)] bg-no-repeat bg-cover">
        <div className="absolute inset-0 z-[-1] ">
          <div className="h-full w-full bg-opacity-30 bg-black"></div>
        </div>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-6">
            Contact Markazul-Bayan
          </h1>
          <p className="text-xl text-white  mb-8 max-w-2xl mx-auto">
            Reach out to us for any inquiries about our courses, instructors, or
            to start your journey in Islamic learning.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="https://bit.ly/Learn-at-markazbayan">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" className="bg-black text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex items-start justify-between gap-7 px-16 py-10">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-emerald-600" />
              <p>Olunlade, Ilorin, Nigeria</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-emerald-600" />
              <p>+234 8089287065</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-emerald-600" />
              <p>markazulbayaan9@gmail.com</p>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </CardContent>
        </Card>
        <div className="rounded-lg bg-white p-5 text-black shadow-lg">
          <h3 className="mb-5 text-2xl font-medium">
            Fill out the form and we will be in touch!
          </h3>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="space-y-4">
              <label htmlFor="from_name" className="mb-4 block">
                <p className="mb-2 text-sm font-semibold">Name</p>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-gray-400 p-3"
                />
                {validationErrors.from_name && (
                  <p className="text-sm text-red-500">
                    {validationErrors.from_name}
                  </p>
                )}
              </label>
              <label htmlFor="from_email" className="mb-4 block">
                <p className="mb-2 text-sm font-semibold">Email</p>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-gray-400 p-3"
                />
                {validationErrors.from_email && (
                  <p className="text-sm text-red-500">
                    {validationErrors.from_email}
                  </p>
                )}
              </label>
              <label htmlFor="phone_number" className="mb-4 block">
                <p className="mb-2 text-sm font-semibold">Phone Number</p>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-gray-400 p-3"
                />
                {validationErrors.phone_number && (
                  <p className="text-sm text-red-500">
                    {validationErrors.phone_number}
                  </p>
                )}
              </label>
              <label htmlFor="message" className="mb-4 block">
                <p className="mb-2 text-sm font-semibold">
                  How can we help you
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  cols={30}
                  rows={10}
                  className="w-full rounded-lg border border-gray-400 p-3"
                ></textarea>
                {validationErrors.message && (
                  <p className="text-sm text-red-500">
                    {validationErrors.message}
                  </p>
                )}
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-black p-2 font-normal text-white disabled:cursor-not-allowed disabled:bg-gray-400"
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </form>
        </div>
      </section>
      {/* Instructors Section */}
      <section className="container mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>One on One Convenient Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Take Qur&apos;ān, Tawheed, Arabiyyah, Fiqh at your convenience
                no matter how tight your schedule is.
              </p>
              <p className="font-semibold">Tutor: Abu Anwar</p>
              <p>Female Tutors available</p>
              <Button asChild className="mt-4">
                <Link href="https://wa.link/gwee51">
                  Contact for Qur&apos;an Made Easy
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Qur&apos;an Recitation and Memorization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Do you want to learn and develop love for the Qur&apos;an? Join
                other students who have aced their recitation and memorization
                through our one-on-one Qur&apos;an sessions.
              </p>
              <p className="font-semibold">Tutor: Abu Haleemah</p>
              <p>Your specific needs guide our teachings.</p>
              <Button asChild className="mt-4">
                <Link href="https://bit.ly/Quran-MarkazulBayan">
                  Contact for Qur&apos;an Sessions
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Nurture Your Kid’s Eemān (بإذن الله) 📖</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our interactive online classes, led by experienced teachers,
                provide your kid(s) with a strong foundation in Qur’an, Basic
                Aqeedah, Arabic Conversation, and Reading & Writing.
              </p>
              <p className="font-semibold">Tutor: Multiple</p>
              <p>Register for any of the courses today</p>
              <Button asChild className="mt-4">
                <Link href="http://wa.link/j2fsqe">
                  Contact for Kids Sessions
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arabic Learning Section */}
      <section className="container mx-auto mt-16  px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Arabic Learning</h2>
        <Card>
          <CardHeader>
            <CardTitle>Master the Arabic Language</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Unlock the beauty of the Qur&apos;an and deepen your understanding
              of Islamic texts through our comprehensive Arabic language
              courses.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Learn Arabic grammar and vocabulary</li>
              <li>Practice conversation with native speakers</li>
              <li>Understand Qur&apos;anic Arabic</li>
              <li>Flexible learning options to fit your schedule</li>
            </ul>
            <Button>Enroll in Arabic Courses</Button>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mt-16 mb-4 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Markazul-Bayan?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-10 w-10 text-yellow-600" />}
            title="Comprehensive Curriculum"
            description="From Arabic language to Quranic studies, our courses cover all aspects of Islamic education."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-yellow-600" />}
            title="Expert Instructors"
            description="Learn from qualified scholars and educators with years of experience in Islamic studies."
          />
          <FeatureCard
            icon={<GraduationCap className="h-10 w-10 text-yellow-600" />}
            title="Flexible Learning"
            description="Study at your own pace with our online courses, accessible anytime, anywhere."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
