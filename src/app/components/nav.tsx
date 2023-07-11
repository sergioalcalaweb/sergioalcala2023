"use client"

import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState('about');
  const sections = useRef<NodeListOf<HTMLElement> | null>(null);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = '';

    sections.current?.forEach((section) => {
      const sectionOffsetTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset 
        < (sectionOffsetTop + sectionHeight)) {
          newActiveSection = section.id;
        }
    });

    setIsActive(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleScroll);

    return(() => window.removeEventListener('scroll', handleScroll) )
  }, []);


  return ( 
    <nav className="hidden lg:block">
      <ul>
        <li>
          <a href="#about" className={`py-3 flex items-center ${isActive === 'about'  ? 'opacity-95' : 'opacity-30'}`}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" className={`py-3 flex items-center ${isActive === 'experience' ? 'opacity-95' : 'opacity-30'}`}>
            Experience
          </a>
        </li>
        <li>
          <a href="#skills" className={`py-3 flex items-center ${isActive === 'skills' ? 'opacity-95' : 'opacity-30'}`}>
            Skills
          </a>
        </li>
        {/* <li>
          <a href="#projects" className={`py-3 flex items-center ${isActive === 'projects' ? 'opacity-95' : 'opacity-30'}`}>
            Projects
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
 
export default Nav;