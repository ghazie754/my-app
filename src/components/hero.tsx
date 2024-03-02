export default function Hero(): JSX.Element {
  return (
    <>
      {/* <!-- Hero --> */}
      <div className='Hero' id='Hero'>
        {/* <!-- Logo -->*/}
        <button className='nav-btn' id='logo'>
          Ghazi Ramadan
        </button>
        {/* <!-- end of Logo -->*/}
        {/* <!-- navbar --> */}
        <nav className='nav' id='nav'>
          {/* <Image src="./images/logo.svg" className="nav-logo" alt="" width={100} /> */}
          <a href='./'>home</a>
          <a href='./about'>about</a>
          <a href='./projects'>projects</a>
          <a href='./contact'>contact</a>
          {/* <!-- end of nav links -->*/}
        </nav>
        {/* <!-- end of navbar -->*/}
      </div>
      {/* <!-- end of Hero -->*/}
    </>
  );
}
