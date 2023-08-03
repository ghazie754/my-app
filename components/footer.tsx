export default function Footer(): JSX.Element {
  return (
    <>
      {/* <!-- footer --> */}
      <footer className="footer">
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

        <p>
          &copy; <span id="date"></span>
          ghazi ramadan. All rights reserved.
        </p>
      </footer>
      {/* <!-- end of footer --> */}
    </>
  );
}
