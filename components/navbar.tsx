import Navlinks from './sidebarlinks';
export default function Navbar(): JSX.Element {
  return (
    <>
      {/* <!-- navbar --> */}
      <nav className='nav' id='nav'>
        {/* <Image src="./images/logo.svg" className="nav-logo" alt="" width={100} /> */}
        <button className='nav-btn' id='nav-btn'>
          <i className='fas fa-bars'></i>
        </button>
        <Navlinks />
      </nav>
      {/* <!-- end of navbar -->*/}
    </>
  );
}
