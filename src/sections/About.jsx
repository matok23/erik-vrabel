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
                        /*
                          Block entered the visible area.
                        */
                        entry.target.classList.add(
                            'about-block--visible',
                        );
                    } else {
                        /*
                          Block left the visible area.
            
                          Remove the class so it can animate
                          again the next time it enters.
                        */
                        entry.target.classList.remove(
                            'about-block--visible',
                        );
                    }
                });
            },
            {
                /*
                  About 15% of the block needs to be visible
                  before it activates.
                */
                threshold: 0.15,

                /*
                  Moves the activation zone slightly inward
                  from the bottom of the screen.
                */
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
                            Vo Vištuku som sa narodil a prežil som tu väčšinu svojho života.
                            Mám 51 rokov, som 24 rokov ženatý a s manželkou Zuzanou vychovávame dve dcéry, Alexandru (23) a Sofiu (14).
                        </p>
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
                            Vyštudoval som Fakultu elektrotechniky a informatiky na STU v Bratislave a získal titul Ing.
                            Celú svoju kariéru pôsobím v oblasti IT (Eurotel, Orange Slovensko).
                        </p>

                        <p>
                            Momentálne pracujem ako projektový manažér v medzinárodnej spoločnosti Orange Business.
                            Riadenie komplexných projektov je mojou každodennou prácou.
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
                            Vištuk je môj domov. Našiel som tu priateľov, založil rodinu a prežil tie najkrajšie chvíle.
                            Dostal som sa do životného obdobia, kedy chcem svoje sily, energiu a manažérske skúsenosti naplno odovzdať našej obci.
                        </p>

                        <p>
                            Posledné 4 roky pôsobím ako poslanec obecného zastupiteľstva a zástupca pani starostky. Viem, čo vedenie obce obnáša.
                            Za toto obdobie sme odviedli kus poctivej práce a rozbehli mnohé dôležité projekty. Chcem ich úspešne dokončiť a posunúť Vištuk vpred.
                        </p>

                        <p>
                            Spoluprácou so súčasnou pani starostkou zabezpečím kontinuitu riadenia obce bez zbytočných prieťahov.
                            Som presvedčený, že Vištuk má vďaka svojej histórii a polohe veľký potenciál byť moderným a bezpečným miestom pre spokojný život jeho obyvateľov.
                        </p>
                    </div>
                </article>

            </div>
        </Section>
    );
}

export default About;