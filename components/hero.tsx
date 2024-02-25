import Image from 'next/image';
import Navbar from './navbar';
export default function Hero(): JSX.Element {
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
        <Navbar />
      </div>
      {/* <!-- end of Hero -->*/}
    </>
  );
}
