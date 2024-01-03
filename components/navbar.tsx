import Navlinks from './sidebarlinks';
export default function Navbar(): JSX.Element {
  return (
    <>
      {/* <!-- navbar --> */}
      <nav className='nav' id='nav'>
        <div className='nav-center'>
          {/* <!-- nav header --> */}
          <div className='nav-header'>
            {/* <Image src="./images/logo.svg" className="nav-logo" alt="" width={100} /> */}
            <button className='nav-btn' id='nav-btn'>
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <Navlinks />
        </div>
      </nav>
      {/* <!-- end of navbar -->*/}
    </>
  );
}
