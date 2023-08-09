import Link from "next/link";
export default function socialicon(): JSX.Element {
  return (
    <>
      {/* <!-- social-icon --> */}
      <ul className="social-icons">
        {/* <!-- single item --> */}
        <li>
          <Link href={""} className="social-icon">
            <i className="fab fa-facebook"></i>
          </Link>
        </li>
        {/* <!-- end of single item --> */}
        {/* <!-- single item --> */}
        <li>
          <Link href={""} className="social-icon">
            <i className="fab fa-linkedin"></i>
          </Link>
        </li>
        {/* <!-- end of single item --> */}
        {/* <!-- single item --> */}
        <li>
          <Link href={""} className="social-icon">
            <i className="fab fa-squarespace"></i>
          </Link>
        </li>
        {/* <!-- end of single item --> */}
        {/* <!-- single item --> */}
        <li>
          <Link href={""} className="social-icon">
            <i className="fab fa-behance"></i>
          </Link>
        </li>
        {/* <!-- end of single item --> */}
        {/* <!-- single item --> */}
        <li>
          <Link href={""} className="social-icon">
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
        {/* <!-- end of single item --> */}
      </ul>

      {/* <!-- end of social-icon --> */}
    </>
  );
}
