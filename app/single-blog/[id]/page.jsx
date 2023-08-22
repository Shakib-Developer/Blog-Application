import getAllPosts from "@/lib/getAllPosts";
import getSinglePost from "@/lib/getSinglePost";

export default async function page({ params }) {
  const { id } = params;

  const post = await getSinglePost(id);

  return (
    <div>
      <section>
        <h1 className="font-bold text-lg">{post.title}</h1>

        <div className="mt-5">{post.short}</div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: "" + post.id,
  }));
}
