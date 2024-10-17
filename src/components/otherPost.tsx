import React from "react";
import Link from "next/link";
import Image from "next/image";

const OtherBlogs: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "A UX Case Study Creating a Studious Environment for Students:",
      author: "John Doe",
      date: "Aug 23, 2021",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      imageUrl: "/assets/other1.png",
    },
    {
      id: 2,
      title: "A UX Case Study Creating a Studious Environment for Students:",
      author: "John Doe",
      date: "Aug 23, 2021",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      imageUrl: "/assets/other2.png",
    },
    {
      id: 3,
      title: "A UX Case Study Creating a Studious Environment for Students:",
      author: "John Doe",
      date: "Aug 23, 2021",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      imageUrl: "/assets/blog2.png",
    },
  ];

  return (
    <div>
      {/* Blog Section */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          What to read next
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                className="w-full h-48 object-cover"
                src={post.imageUrl}
                alt={`Blog post ${post.id}`}
              />
              <div className="p-6">
                <p className="text-sm text-gray-500">
                  By {post.author} | {post.date}
                </p>
                <h3 className="font-bold text-sm sm:text-xl mt-2 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                <Link href="#" className="text-yellow-500">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OtherBlogs;
