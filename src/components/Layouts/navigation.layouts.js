import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({ active }) {
  console.log(window.location.href.split('/'));
  const [isMobile, setIsMobile] = useState(true);
  const [isActive, setIsActive] = useState(window.location.href.split('/')[3]);

  let activeHome,
    activeCertificates,
    activeProjects = '';
  if (isActive == 'Home') {
    activeHome = 'md:border-b-2 md:border-orange-500 text-blue-500';
  } else if (isActive == 'gallery') {
    activeProjects = 'md:border-b-2 md:border-orange-500 text-blue-500';
  } else if (isActive == 'posts') {
    activeCertificates = 'md:border-b-2 md:border-orange-500 text-blue-500';
  } 
  return (
    <div className="flex flex-col md:flex-row md:h-12 md:justify-between border-b-2 border-slate-200 px-3 py-2 bg-white ">
      <div className="flex flex-row justify-between">
        <h5>LOGO</h5>
      </div>
      <div className={isMobile ? 'hidden md:block' : 'block'}>
        <div className="flex flex-col md:flex-row text-center gap-2 md:gap-8 md:pt-0 md:pr-4">
          <Link
            onClick={() => setIsActive('Home')}
            to="/"
            className={
              'text-md font-semibold hover:text-blue-500 ' + activeHome
            }
          >
            Home
          </Link>
          <Link
            onClick={() => setIsActive('gallery')}
            to="/albums"
            className={
              'text-md font-semibold hover:text-blue-500 ' + activeProjects
            }
          >
            Gallery
          </Link>
          <Link
            onClick={() => setIsActive('posts')}
            to="/posts"
            className={
              'text-md font-semibold hover:text-blue-500 ' + activeCertificates
            }
          >
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;