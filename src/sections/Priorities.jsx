import { useEffect, useRef } from 'react';
import Section from '../components/Section.jsx';

const values = [
    {
        number: '1.',
        title: 'Zodpovednosť',
        text: 'Nesľubujem to, čo nedokážem splniť.',
    },
    {
        number: '2.',
        title: 'Čestnosť a priame jednanie',
        text: 'Vždy konám férovo a narovinu.',
    },
    {
        number: '3.',
        title: 'Trpezlivosť',
        text: 'Viem si udržať odstup vo vypätých situáciach a reagujem pokojne.',
    },
    {
        number: '4.',
        title: 'Vytrvalosť',
        text: 'Robím maximum preto, aby som rozpracované projekty úspešne dokončil.',
    },
    {
        number: '5.',
        title: 'Nekonfliktnosť',
        text: 'Komunkácia s cieľom nájsť spoločné hodnoty je kľúč k úspechu. Vištuk bude napredovať, ak budeme jednotní.'
    },
    {
        number: '6.',
        title: 'Transparentnosť',
        text: 'Otvorená komunikácia, aby mali občania prehľad o všetkom, čo sa v obci deje.'
    },
];

function Priorities() {
    const valueRefs = useRef([]);

    useEffect(() => {
        const elements = valueRefs.current.filter(Boolean);

        if (elements.length === 0) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            'value-row--visible',
                        );
                    } else {
                        entry.target.classList.remove(
                            'value-row--visible',
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

    const setValueRef = (element, index) => {
        valueRefs.current[index] = element;
    };

    return (
        <Section
            id="priorities"
            eyebrow="02"
            title="Moje zásady a priority"
            className="page-section--alternate"
        >
            <div className="values-list">

                {values.map((value, index) => (
                    <article
                        key={value.title}
                        ref={(element) =>
                            setValueRef(element, index)
                        }
                        className="value-row"
                    >
                        <div className="value-row__heading">

                            <span className="value-row__number">
                                {value.number}
                            </span>

                            <h3 className="value-row__title">
                                {value.title}
                            </h3>

                        </div>

                        <p className="value-row__text">
                            {value.text}
                        </p>
                    </article>
                ))}

            </div>
        </Section>
    );
}

export default Priorities;