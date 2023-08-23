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

// import getAllPosts from "@/lib/getAllPosts";
// import Link from "next/link";

// const page = async () => {
//   const postBlog = await getAllPosts();
//   return (
//     <>
//       <div className="container mx-auto my-2">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {postBlog.length === 0 ? (
//             <h2 className="text-red-500">Lodding......</h2>
//           ) : (
//             postBlog.map((posts, index) => (
//               <Link
//                 href={`/blog/${posts.id}`}
//                 key={index.toString()}
//                 className="card card-compact w-100 glass"
//               >
//                 <figure>
//                   <img src={posts.img} alt="Post-image" />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title"> {posts.title} </h2>
//                   <p> {posts.short} </p>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;
