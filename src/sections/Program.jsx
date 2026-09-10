import { useEffect, useRef } from 'react';
import Section from '../components/Section.jsx';

const programItems = [
    {
        number: '1.',
        title: 'Kanalizácia a ČOV',
        text: 'Úspešná realizácia kľúčového projektu kanalizácie s vlastnou čistiarňou odpadových vôd.'
    },
    {
        number: '2.',
        title: 'Bezpečná doprava',
        text: 'Rekonštrukcia cesty a mosta smerom do Budmeríc, budovanie bezpečných chodníkov v obci.'
    },
    {
        number: '3.',
        title: 'Moderná škola',
        text: 'Kompletná výmena elektroinštalácie v budove ZŠ s MŠ pre bezpečnosť našich detí. Vybudovanie telocvične, aby mala škola dôstojné priestory pre rozvoj telesnej kultúry.'
    },
    {
        number: '4.',
        title: 'Zelená energia a kultúra',
        text: 'Energetické zhodnotenie budovy kultúrneho domu a kinosály(výmena rozvodov elektroinštalácie a vykurovania, fotovolika).'
    },
    {
        number: '5.',
        title: 'Občianska vybavenosť',
        text: 'Zabezpečenie stabilnej predajne potravín v obci a vybudovanie nových priestorov pre Obecný úrad. Spracovanie štúdie pre využitie obecného pozemku pri škole(nové priestory MŠ, zariadenie sociálnych služieb, …)'
    },
    {
        number: '6.',
        title: 'Podpora komunít',
        text: 'Vištuk je  lídrom v regióne v počte kultúrnych a spoločenských podujatí. Aj naďalej budem podporovať spoluprácu obce s miestnymi spolkami a občianskymi združeniami.'
    },
    {
        number: '7.',
        title: 'Voľný čas',
        text: 'Rozvoj cyklotrás v spolupráci s BSK a okolitými obcami. Dobudovanie oddychovo relaxačnej zóny pri vyhladkovej veži.'
    },
    {
        number: '8.',
        title: 'Rozvoj cez externé zdroje',
        text: 'Sme obec s obmedzeným rozpočtom. Dokázali sme však, že rozvoj vieme financovať aj získavaním dotácií z grantov a fondov. V tomto trende budem vytrvalo pokračovať.'
    },
];

function Program() {
    const itemRefs = useRef([]);

    useEffect(() => {
        const elements = itemRefs.current.filter(Boolean);

        if (elements.length === 0) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            'program-item--visible',
                        );
                    } else {
                        entry.target.classList.remove(
                            'program-item--visible',
                        );
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: '0px 0px -10% 0px',
            },
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const setItemRef = (element, index) => {
        itemRefs.current[index] = element;
    };

    return (
        <Section
            id="program"
            eyebrow="03 / Program"
            title="Program"
        >
            <div className="program-layout">

                {/* PROGRAM TEXT */}
                <div className="program-list">
                    {programItems.map((item, index) => (
                        <article
                            key={item.number}
                            ref={(element) =>
                                setItemRef(element, index)
                            }
                            className="program-item"
                        >
                            <span className="program-item__number">
                                {item.number}
                            </span>

                            <h3 className="program-item__title">
                                {item.title}
                            </h3>

                            <p className="program-item__text">
                                {item.text}
                            </p>
                        </article>
                    ))}
                </div>


                {/* PROGRAM IMAGES */}
                <div className="program-gallery">

                    <div className="program-image program-image--one">
                        <img
                            src="/kostol.jpg"
                            alt=""
                        />

                        <span
                            className="program-image__accent"
                            aria-hidden="true"
                        />
                    </div>


                    <div className="program-image program-image--two">
                        <img
                            src="/kaplnka.jpg"
                            alt=""
                        />

                        <span
                            className="program-image__accent"
                            aria-hidden="true"
                        />
                    </div>


                    <div className="program-image program-image--three">
                        <img
                            src="/vinohrad.jpeg"
                            alt=""
                        />

                        <span
                            className="program-image__accent"
                            aria-hidden="true"
                        />
                    </div>

                </div>

            </div>
        </Section>
    );
}

export default Program;