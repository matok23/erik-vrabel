import { useEffect, useState } from 'react';

const navigationItems = [
    {
        id: 'about',
        label: 'O mne',
    },
    {
        id: 'priorities',
        label: 'Hodnoty',
    },
    {
        id: 'program',
        label: 'Program',
    },
    {
        id: 'contact',
        label: 'KontaKt',
    },
];

function SideNav({ visible, activeSection }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isOnDarkSection = activeSection === 'contact';

    useEffect(() => {
        if (!visible) {
            setMobileMenuOpen(false);
        }
    }, [visible]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
            return;
        }

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={[
                    'side-nav',
                    visible ? 'side-nav--visible' : '',
                    isOnDarkSection ? 'side-nav--dark' : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
                aria-label="Main navigation"
            >
                <ul className="side-nav__list">
                    {navigationItems.map((item) => {
                        const isActive = activeSection === item.id;

                        return (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className={`side-nav__link ${isActive ? 'side-nav__link--active' : ''
                                        }`}
                                    onClick={() => handleNavigation(item.id)}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <span className="side-nav__label">
                                        {item.label}
                                    </span>

                                    <span
                                        className="side-nav__dot"
                                        aria-hidden="true"
                                    />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div
                className={`mobile-nav ${visible ? 'mobile-nav--visible' : ''
                    }`}
            >
                <div className="mobile-nav__bar">
                    <button
                        type="button"
                        className="mobile-nav__brand"
                        onClick={() => handleNavigation('about')}
                    >
                        Candidate Name
                    </button>

                    <button
                        type="button"
                        className={`mobile-nav__toggle ${mobileMenuOpen
                            ? 'mobile-nav__toggle--open'
                            : ''
                            }`}
                        onClick={() =>
                            setMobileMenuOpen((current) => !current)
                        }
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={
                            mobileMenuOpen
                                ? 'Close navigation'
                                : 'Open navigation'
                        }
                    >
                        <span />
                        <span />
                    </button>
                </div>

                <nav
                    id="mobile-menu"
                    className={`mobile-nav__menu ${mobileMenuOpen
                        ? 'mobile-nav__menu--open'
                        : ''
                        }`}
                    aria-label="Mobile navigation"
                >
                    <ul>
                        {navigationItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        className={
                                            isActive
                                                ? 'mobile-nav__link mobile-nav__link--active'
                                                : 'mobile-nav__link'
                                        }
                                        onClick={() => handleNavigation(item.id)}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default SideNav;