import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <>
      {/* <!-- footer --> */}
      <footer className='footer'>
        {/* <!-- social-icon --> */}
        <ul className='social-icons'>
          {/* <!-- single item --> */}
          <li>
            <Link href={'https://twitter.com/GhaziErn'} className='social-icon'>
              <i className='fab fa-twitter'>twitter</i>
            </Link>
          </li>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <li>
            <Link
              href={'https://www.linkedin.com/in/ghazi-ern-52a32b21a/'}
              className='social-icon'
            >
              <i className='fab fa-linkedin'>linkedin</i>
            </Link>
          </li>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <li>
            <Link href={'https://github.com/ghazie754'} className='social-icon'>
              <i className='fab fa-github'>github</i>
            </Link>
          </li>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <li>
            <Link href={'https://codepen.io/ghazie754'} className='social-icon'>
              <i className='fab fa-codepen'>codepen</i>
            </Link>
          </li>
          {/* <!-- end of single item --> */}
        </ul>

        {/* <!-- end of social-icon --> */}

        <p>
          &copy; <span id='date'></span>
          ghazi ramadan. All rights reserved.
        </p>
      </footer>
      {/* <!-- end of footer --> */}
    </>
  );
}
