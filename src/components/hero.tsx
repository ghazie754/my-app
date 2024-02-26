import { useEffect, useState } from 'react';

export default function Hero(): JSX.Element {
  const [clientWindowHeight, setClientWindowHeight] = useState<any>('');
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 120;
    backgroundTransparacyVar < 10
      ? setBackgroundTransparacy(backgroundTransparacyVar)
      : null;
  }, [clientWindowHeight]);
  return (
    <>
      {/* <!-- Hero --> */}
      <div
        className='Hero'
        id='Hero'
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        }}
      >
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
