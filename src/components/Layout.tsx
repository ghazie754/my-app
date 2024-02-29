import Footer from './footer';
import Hero from './hero';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hero />
      {/* <!-- sidebar --> */}
      <aside className='sidebar' id='sidebar'>
        <div>
          <button id='close-btn' className='close-btn'>
            <i className='fas fa-times'></i>
          </button>
        </div>
      </aside>
      {/* <!-- end of sidebar --> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
