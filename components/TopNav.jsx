import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="nav shadow p-2 justify-content-around mb-3">
      <Link className="nav-link" href="/">
        Blog Application
      </Link>
      <div className="d-flex">
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <Link className="nav-link" href="/blog">
          Blog
        </Link>
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;
