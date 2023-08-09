import Socialicon from "./socialicon";
import Navlinks from "./sidebarlinks";

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
          <Navlinks />
          <Socialicon />
        </div>
      </aside>
      {/* <!-- end of sidebar --> */}
    </>
  );
}
