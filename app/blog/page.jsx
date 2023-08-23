import Link from "next/link";
import getAllPosts from "@/lib/getAllPosts";

export default async function page() {
  const posts = await getAllPosts();
  return (
    <div>
      <section className="container">
        <h2 className="text-center text-light fw-bold">Latest Blog Posts</h2>
        <ul className="postul">
          {posts.map((post) => (
            <li className="my-5 postli" key={post.id}>
              <Link className="postlink" href={`/single-blog/${post.id}`}>
                <img
                  src="https://roar.media/wp-content/uploads/2023/07/18.png"
                  alt="Blog Post"
                  className="img-fluid mb-4"
                />
                <h4>{post.title}</h4> <br /> {post.short}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

