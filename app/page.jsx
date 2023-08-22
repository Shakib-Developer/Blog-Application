import Link from "next/link";
import getAllPosts from "@/lib/getAllPosts";

export default async function Home() {
  let posts = await getAllPosts();
  return (
    <div>
      <div className="main-home mb-5">
        <h1 className="text-center">Hello Home</h1>
      </div>

      <section className="container">
        <h2 className="text-center text-light fw-bold">
          Welcome to our Newest Blog
        </h2>
        <ul className="postul">
          {posts.map((post) => (
            <li className="my-5 postli" key={post.id}>
              <Link className="postlink" href={`/single-blog/${post.id}`}>
                <img
                  src="https://roar.media/wp-content/uploads/2023/07/18.png"
                  alt="Blog Post"
                  className="img-fluid my-4"
                />
                {post.title} <br /> {post.short}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="card-item d-flex my-5">
        <div className="card mx-2">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Card title 01</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link href="/" className="btn btn-success">
              Go
            </Link>
          </div>
        </div>
        <div className="card mx-2">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Card title 02</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link href="/" className="btn btn-success">
              Go
            </Link>
          </div>
        </div>
        <div className="card mx-2">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Card title 03</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link href="/" className="btn btn-success">
              Go
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
