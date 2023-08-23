export default function SingleBlogPage({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <h1 className="font-bold text-lg">{post.title}</h1>
        <div className="mt-5">{post.short}</div>
      </section>
    </div>
  );
}
