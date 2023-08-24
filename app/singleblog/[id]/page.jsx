import getSinglePost from "@/lib/getSinglePost";

export default async function page({ params }) {
  const id = params.id;

  const post = await getSinglePost(id);

  return (
    <div>
      <section>
        <figure>
          <img
            src={post.postDetails.img}
            alt="Single Blog Post"
            className="img-fluid mb-4"
          />
        </figure>
        <h1 className="font-bold text-lg my-5">{post.postDetails.title}</h1>

        <div className="my-5">{post.postDetails.content}</div>
      </section>
    </div>
  );
}
