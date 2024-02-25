import React from 'react';
import Logo from './Logo';

export default function Hero(): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen(!open);
  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  }, []);
  return (
    <>
      {/* <!-- Hero --> */}
      <div className='Hero' id='Hero'>
        {/* <!-- sidebar --> */}
        <aside className='sidebar' id='sidebar'>
          <div>
            <button id='close-btn' className='close-btn'>
              <i className='fas fa-times'></i>
            </button>
          </div>
        </aside>
        {/* <!-- end of sidebar --> */}
        {/* <!-- navbar --> */}
        <nav className='nav' id='nav'>
          {/* <Image src="./images/logo.svg" className="nav-logo" alt="" width={100} /> */}
          <button className='nav-btn' id='nav-btn'>
            {isVisible && <Logo />}
          </button>
          <ul className='nav-links'>
            <li>
              <a href='./'>home</a>
            </li>
            <li>
              <a href='./about'>about</a>
            </li>
            <li>
              <a href='./projects'>projects</a>
            </li>
            <li>
              <a href='./contact'>contact</a>
            </li>
          </ul>
          {/* <!-- end of nav links -->*/}
        </nav>
        {/* <!-- end of navbar -->*/}
      </div>
      {/* <!-- end of Hero -->*/}
    </>
  );
}
