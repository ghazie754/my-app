import Socialicon from "./socialicon";

export default function Footer(): JSX.Element {
  return (
    <>
      {/* <!-- footer --> */}
      <footer className="footer">
        <Socialicon />

        <p>
          &copy; <span id="date"></span>
          ghazi ramadan. All rights reserved.
        </p>
      </footer>
      {/* <!-- end of footer --> */}
    </>
  );
}
