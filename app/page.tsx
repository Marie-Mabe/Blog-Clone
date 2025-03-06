import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { getPosts } from "@/src/lib/posts";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.slug}>
          <CardHeader>
            <p className="text-xs text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              className="text-blue-500 hover:underline"
              href={`/posts/${post.slug}`}
            >
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
