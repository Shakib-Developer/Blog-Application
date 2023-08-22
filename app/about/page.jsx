import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="main-home mb-5">
        <h1 className="text-center">Hello About</h1>
      </div>

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
};

export default About;
