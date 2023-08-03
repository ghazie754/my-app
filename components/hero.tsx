export default function Hero(): JSX.Element {
  return (
    <>
      {/* <!-- Hero --> */}
      <div className="Hero" id="Hero"></div>
      {/* <!-- end of Hero -->*/}
      {/* <!-- sidebar --> */}
      <aside className="sidebar" id="sidebar">
        <div>
          <button id="close-btn" className="close-btn">
            <i className="fas fa-times"></i>
          </button>
          <ul className="sidebar-links">
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
          <ul className="social-icons">
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
          </ul>
        </div>
      </aside>
      {/* <!-- end of sidebar --> */}
    </>
  );
}
