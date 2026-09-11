import { useEffect, useRef } from 'react';
import Section from '../components/Section.jsx';

function About() {
    const blocksRef = useRef([]);

    useEffect(() => {
        const blocks = blocksRef.current.filter(Boolean);

        if (blocks.length === 0) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            'about-block--visible',
                        );
                    } else {
                        entry.target.classList.remove(
                            'about-block--visible',
                        );
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -8% 0px',
            },
        );

        blocks.forEach((block) => {
            observer.observe(block);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const setBlockRef = (element, index) => {
        blocksRef.current[index] = element;
    };

    return (
        <Section
            id="about"
            eyebrow="01"
            title="O mne"
        >
            <div className="about-sections">

                <article
                    ref={(element) => setBlockRef(element, 0)}
                    className="about-block"
                >
                    <div className="about-block__heading">
                        <span className="about-block__number">
                            1.
                        </span>

                        <h3>
                            Kto som
                        </h3>
                    </div>

                    <div className="about-block__content">
                        <p>
                            Vo Vištuku som sa narodil a prežil som tu väčšinu
                            svojho života. Mám 51 rokov, už 24 rokov som ženatý
                            a spolu s manželkou Zuzanou vychovávame dve dcéry,
                            Alexandru (23) a Sofiu (14).
                        </p>

                        <p>
                            Voľný čas rád trávim so svojou rodinou a priateľmi.
                            Blízka mi je príroda - či už pri bicyklovaní, peších
                            výletoch alebo pri cestovaní, počas ktorého rád
                            spoznávam nové miesta a načerpávam inšpiráciu.
                        </p>

                        <p>
                            Najväčším relaxom je pre mňa hra na akustickú gitaru.
                            Je to chvíľa, keď môžem spomaliť, vypnúť od
                            každodenných povinností a načerpať novú energiu.
                        </p>

                        <div className="about-photo">
                            <img
                                src="/gitara.jpeg"
                                alt="Hra na akustickú gitaru"
                            />

                            <span
                                className="about-photo__accent"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </article>


                <article
                    ref={(element) => setBlockRef(element, 1)}
                    className="about-block"
                >
                    <div className="about-block__heading">
                        <span className="about-block__number">
                            2.
                        </span>

                        <h3>
                            Moje vzdelanie a profesionálne skúsenosti
                        </h3>
                    </div>

                    <div className="about-block__content">
                        <p>
                            Študoval som na Fakulte elektrotechniky a informatiky STU v Bratislave,
                            kde som získal titul Ing. Celú svoju kariéru pôsobím v oblasti IT (Eurotel, Orange Slovensko).
                        </p>

                        <p>
                            Momentálne pracujem ako projektový manažér v
                            medzinárodnej spoločnosti Orange Business. Riadenie
                            komplexných projektov je mojou každodennou prácou.
                        </p>
                    </div>
                </article>


                <article
                    ref={(element) => setBlockRef(element, 2)}
                    className="about-block"
                >
                    <div className="about-block__heading">
                        <span className="about-block__number">
                            3.
                        </span>

                        <h3>
                            Prečo kandidujem
                        </h3>
                    </div>

                    <div className="about-block__content">
                        <p>
                            Vištuk je môj domov. Našiel som tu priateľov, založil
                            si rodinu a prežil tie najkrajšie chvíle. Dostal som
                            sa do životného obdobia, kedy chcem svoje sily,
                            energiu a manažérske skúsenosti naplno odovzdať
                            našej obci.
                        </p>

                        <p>
                            Posledné 4 roky pôsobím ako poslanec obecného
                            zastupiteľstva a zástupca pani starostky. Viem, čo
                            vedenie obce obnáša. Za toto obdobie sme odviedli kus
                            poctivej práce a rozbehli mnohé dôležité projekty.
                            Chcem ich úspešne dokončiť a posunúť Vištuk vpred.
                        </p>

                        <p>
                            Spoluprácou so súčasnou pani starostkou zabezpečím
                            kontinuitu riadenia obce bez zbytočných prieťahov.
                            Som presvedčený, že vďaka svojej histórii a polohe
                            má Vištuk veľký potenciál stať sa moderným, bezpečným
                            a príjemným miestom pre život jeho obyvateľov.
                        </p>
                    </div>
                </article>

            </div>
        </Section>
    );
}

export default About;