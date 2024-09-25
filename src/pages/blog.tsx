import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Dummy CMS data for both Blog and additional sections
const dummyData = {
  hero: {
    title: "Road map for beginners in Arabic language, Qur'an, Reading and writing",
    date: "May 23, 2022",
    author: "Abu Abdullah Ibrahim",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonText: "Read More",
    image: "/assets/blog1.png" // Replace with real image path
  },
  featuredPost: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    author: "Abu Lubaba Al-Asalafy",
    date: "May 23, 2022",
    description: "Duis aute irure dolor sit amet consectetur.",
    image: "/assets/blog2.png" // Replace with real image path
  },
  allPosts: [
    {
      title: "8 Figma design systems that you can download for free today.",
      author: "Abu Zayda Al-Muwaffaq",
      date: "Aug 23, 2021"
    },
    {
      title: "8 Figma design systems that you can download for free today.",
      author: "Abu Tohir As-Salafy",
      date: "Aug 23, 2021"
    },
    {
      title: "8 Figma design systems that you can download for free today.",
      author: "Abu Qoseem Al-Ilorly",
      date: "Aug 23, 2021"
    },
    {
      title: "8 Figma design systems that you can download for free today.",
      author: "Abu Hanifa Ibrahim",
      date: "Aug 23, 2021"
    }
  ],
  aboutUs: {
    title: "We are a community of content writers who share their learnings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum imperdiet nisi, ut lobortis magna aliquet ut.",
    buttonText: "Read More"
  },
  ourMission: {
    title: "Creating valuable content for readers all around the world",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  whyWeStarted: {
    title: "It started out as a simple idea and evolved into our passion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    buttonText: "Discover our story",
    image: "/assets/blog3.png" // Replace with real image path
  },
  testimonials: [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Abu Jamal Al-Athary",
      location: "Oluklujo, Ilorin Nigeria"
    }
  ]
};

const Blog: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Simulate fetching data from CMS
    setTimeout(() => {
      setData(dummyData);
    }, 1000);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative w-full p-5 md:p-10 text-white mb-2 md:mb-8 " style={{ backgroundImage: `url(${data.hero.image})` }}>
        <div className="absolute inset-0 bg-cover bg-center" ></div>
        <div className="relative z-10 md:mx-auto md:px-4 md:py-24 md:container">
          <p className='py-4 text-xs md:text-sm'>POSTED ON <span className='font-bold'>MARKAZUL-BAYAN </span></p>
          <h1 className="text-lg md:text-4xl font-bold mb-4">{data.hero.title}</h1>
          <p className="mb-4 text-sm md:text-lg">{data.hero.description}</p>
          <p className="text-xs md:text-sm mb-4">By <span className='text-yellow-500'>{data.hero.author} </span> | {data.hero.date}</p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
            {data.hero.buttonText}
          </button>
        </div>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 mb-8 mx-auto px-4 py-8 container'>
        {/* Featured Post Section */}
        <section className=" mx-auto px-4 py-8 container">
          <h2 className="text-xl font-bold mb-4">Featured Post</h2>
          <div className=" rounded-lg overflow-hidden shadow-lg">
            <img src={data.featuredPost.image} alt={data.featuredPost.title} className="w-full h-54 object-cover" />
            <div className="p-6 py-8">
              <p className=" text-xs mb-4">By <span className='text-amber-900 font-bold'>{data.featuredPost.author}</span> | {data.featuredPost.date}</p>
              <h3 className="text-lg font-bold mb-2">{data.featuredPost.title}</h3>
              <p className="text-gray-600 mb-2">{data.featuredPost.description}</p>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* All Posts Section */}
        <section className='mx-auto px-4 py-8 container'>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">All Posts</h2>
            <a href="#" className="text-yellow-500">View All</a>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {data.allPosts.map((post: any, index: number) => (
              <div key={index} className="hover:bg-yellow-50 cursor-pointer p-6 rounded-lg shadow-lg">
                <p className="text-xs text-gray-600 mb-2">By <span className='text-amber-900 font-bold'>{post.author} </span> | {post.date}</p>
                <h3 className="text-sm font-bold mb-2">{post.title}</h3>
                
                
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <div className='bg-yellow-50'>
        {/* About Us and Our Mission Section */}
        <section className="grid md:grid-cols-2 gap-6 mb-8 bg-yellow-50 mx-auto px-4 py-8 container">
          {/* About Us */}
          <div className=" p-6 rounded-lg">
            <h2 className="text-sm font-semibold mb-4">About Us</h2>
            <p className="text-2xl font-bold mb-4">{data.aboutUs.title}</p>
            <p className="text-gray-600 mb-4">{data.aboutUs.description}</p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
              {data.aboutUs.buttonText}
            </button>
          </div>
          {/* Our Mission */}
          <div className=" p-6 rounded-lg  mx-auto px-4 py-8 container">
            <h2 className="text-sm font-semibold mb-4">Our Mission</h2>
            <p className="text-2xl font-bold mb-4">{data.ourMission.title}</p>
            <p className="text-gray-600">{data.ourMission.description}</p>
          </div>
        </section>
      </div>

     <div className='flex justify-center mx-auto'>
        {/* Why We Started Section */}
        <section className="relative mb-16 mx-auto pl-6 py-8 container">
          <div className="relative grid  items-center">
            {/* Image */}
            <div className="relative w-2/3 md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center " 
                style={{ backgroundImage: `url(${data.whyWeStarted.image})` }}>
              </div>
            </div>
            {/* Text Content */}
            <div className="min-w-[150px] absolute md:-translate-x-1/2 translate-x-12 translate-y-16 md:right-0 md:top-1/2 transform md:-translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-1/2 md:w-3/5 lg:w-2/5">
              <h2 className="text-xs md:text-2xl font-bold mb-4">Why We Started</h2>
              <p className="text-xs md:text-xl text-gray-700 mb-4">{data.whyWeStarted.title}</p>
              <p className="mb-6 text-xs md:text-lg">{data.whyWeStarted.description}</p>
              <button className="bg-yellow-500 text-white md:px-6 text-xs md:text-lg px-2 py-1 md:py-3 rounded-lg hover:bg-yellow-600 transition">
                {data.whyWeStarted.buttonText}
              </button>
            </div>
          </div>
        </section>
      </div>


{/* Testimonials Section */}
<div  className='bg-yellow-50'>
<div className='  md:flex md:items-center md:justify-between mx-auto px-4 py-8 container '>
  <section className="mx-auto px-4 py-8 container">
    <p className='py-4 uppercase font-bold text-neutral-700'>Testimonials</p>
    <h2 className="text-3xl font-bold mb-8">What people say about <br/> <span className='text-orange-500'>MARKAZUL-BAYAN</span></h2>
    <div className="flex flex-col md:flex-row justify-between gap-8">
      {data.testimonials.map((testimonial: any, index: number) => (
        <div key={index} className=" rounded-lg flex flex-col justify-between">
          <div className="mb-4">
            <p className="text-sm mb-4">"{testimonial.quote}"</p>
          </div>
          
        </div>
      ))}
    </div>
  </section>
  <section className='mx-auto px-4 py-8 container'>
        <p className='text-xs md:text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='md:flex md:justify-between md:items-center py-6'>
          <div className='flex justify-between items-center gap-4'>
            <div>
              <Image src={'/assets/profile.png'} alt='profile image' width={50} height={50}/>
            </div>
            <div>
              <p className='text-xs md:text-lg'>Abu Jamal Al-Athary</p>
              <p className='text-xs md:text-sm'>Olunlade, Ilorin Nigeria.</p>
            </div>
          </div>
          <div className='flex justify-between py-4 md:py-0'>
          <Image src={'/assets/Back Button.png'} alt='rev arrow' width={50} height={50}/>
          <Image src={'/assets/Next Button.png'} alt='fwd arrow' width={50} height={50}/>
          </div>
        </div>
  </section>
</div>
</div>

    </div>
  );
};

export default Blog;
