export default function Navbar(): JSX.Element {
  return (
    <>
      {/* <!-- navbar --> */}
      <nav className="nav" id="nav">
        <div className="nav-center">
          {/* <!-- nav header --> */}
          <div className="nav-header">
            {/* <Image src="./images/logo.svg" className="nav-logo" alt="" width={100} /> */}
            <button className="nav-btn" id="nav-btn">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- nav links --> */}
          <ul className="nav-links">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="projects.html">projects</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- end of navbar -->*/}
    </>
  );
}
