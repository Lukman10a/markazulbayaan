import Link from "next/link";
import { getSortedPostsData } from "@/lib/getMarkdownData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PostData } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData || [], // Always return an array
    },
  };
};

const HomePage = ({ posts }: { posts: PostData[] }) => {
  console.log({ posts });

  return (
    <main className="p-10">
      <h1>Welcome to My Blog</h1>
      <section className="grid grid-cols-responsive250 gap-4">
        {posts.map((post: PostData) => (
          <Card key={post.slug} className="w-fit">
            {/* Use slug as the key */}
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              {/* Use title instead of fileName */}
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="w-full">
                <Image
                  src={post?.thumbnail as string}
                  alt={post.slug}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              <div className="flex gap items-center text-sm text-purple-500">
                <span>{post.author}</span> <span>{formatDate(post.date)}</span>
              </div>

              <h2>{post.description}</h2>

              {/* Date should already be a string */}
              <Link href={`/test/${post.slug}`}>Read More</Link>
              {/* Use slug */}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
