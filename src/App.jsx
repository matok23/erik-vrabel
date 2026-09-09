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
    const hero = document.getElementById('hero');

    if (!hero) {
      return undefined;
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setNavigationVisible(
          entry.intersectionRatio < 0.35,
        );
      },
      {
        threshold: [0, 0.35, 1],
      },
    );

    heroObserver.observe(hero);

    return () => {
      heroObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          );

        if (visibleEntries.length > 0) {
          setActiveSection(
            visibleEntries[0].target.id,
          );
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -45% 0px',
        threshold: [
          0,
          0.1,
          0.25,
          0.5,
          0.75,
          1,
        ],
      },
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <a
        href="#about"
        className="skip-link"
      >
        Skip to content
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