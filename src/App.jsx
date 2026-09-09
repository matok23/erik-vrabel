import { useEffect, useState } from 'react';

import SideNav from './components/SideNav.jsx';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Priorities from './sections/Priorities.jsx';
import Program from './sections/Program.jsx';
import Contact from './sections/Contact.jsx';


const sectionIds = [
  'about',
  'priorities',
  'program',
  'contact',
];


function App() {
  const [navigationVisible, setNavigationVisible] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState('about');


  useEffect(() => {
    let ticking = false;


    const updatePageState = () => {
      /*
        --------------------------------------------------
        NAVIGATION VISIBILITY
        --------------------------------------------------

        The menu appears once we have scrolled roughly
        35% through the hero.

        hero bottom <= 65% of viewport
      */

      const hero = document.getElementById('hero');

      if (hero) {
        const heroRect =
          hero.getBoundingClientRect();

        const navigationTrigger =
          window.innerHeight * 0.65;

        setNavigationVisible(
          heroRect.bottom <= navigationTrigger,
        );
      }


      /*
        --------------------------------------------------
        ACTIVE SECTION
        --------------------------------------------------

        We use the exact vertical center of the viewport.

        Whichever section contains this point becomes
        active.

        This is much more reliable for full-screen
        sections than IntersectionObserver thresholds.
      */

      const triggerPoint =
        window.innerHeight * 0.5;


      let currentSection = null;


      for (const id of sectionIds) {
        const section =
          document.getElementById(id);

        if (!section) {
          continue;
        }


        const rect =
          section.getBoundingClientRect();


        if (
          rect.top <= triggerPoint &&
          rect.bottom > triggerPoint
        ) {
          currentSection = id;

          break;
        }
      }


      /*
        Fallback.

        Normally one section will always contain the
        center point, but this protects against gaps or
        unusually sized sections.
      */

      if (!currentSection) {
        let closestDistance = Infinity;
        let closestSection = 'about';


        for (const id of sectionIds) {
          const section =
            document.getElementById(id);

          if (!section) {
            continue;
          }


          const rect =
            section.getBoundingClientRect();


          const sectionCenter =
            rect.top + rect.height / 2;


          const distance =
            Math.abs(
              sectionCenter - triggerPoint,
            );


          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = id;
          }
        }


        currentSection =
          closestSection;
      }


      setActiveSection(currentSection);

      ticking = false;
    };


    /*
      requestAnimationFrame prevents the scroll handler
      from performing all calculations on every raw
      browser scroll event.
    */

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updatePageState,
        );

        ticking = true;
      }
    };


    const handleResize = () => {
      updatePageState();
    };


    /*
      Calculate correct state immediately on load.

      Important if the page loads at an anchor such as:

      /#program

      or the browser restores a previous scroll position.
    */

    updatePageState();


    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      },
    );


    window.addEventListener(
      'resize',
      handleResize,
    );


    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      );

      window.removeEventListener(
        'resize',
        handleResize,
      );
    };
  }, []);


  return (
    <>
      <a
        href="#about"
        className="skip-link"
      >
        Prejsť na obsah
      </a>


      <SideNav
        visible={navigationVisible}
        activeSection={activeSection}
      />


      <main>
        <Hero />

        <About />

        <Priorities />

        <Program />

        <Contact />
      </main>
    </>
  );
}


export default App;