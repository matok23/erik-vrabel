function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');

        if (!aboutSection) {
            return;
        }

        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section
            id="hero"
            className="hero"
            aria-labelledby="hero-title"
        >
            <div
                className="hero__photo"
                aria-hidden="true"
            />

            <div
                className="hero__overlay"
                aria-hidden="true"
            />

            <div className="hero__content">
                <div className="hero__text">
                    <p className="hero__eyebrow">
                        Nezávislý kandidát na starostu
                    </p>

                    <h1
                        id="hero-title"
                        className="hero__title"
                    >
                        Ing. Erik
                        <span>Vrábel</span>
                    </h1>

                    <p className="hero__description">
                        "Zodpovednosť, skúsenosti a kontinuita - istota pre budúcnosť Vištuka"
                    </p>
                </div>
            </div>

            <button
                type="button"
                className="hero__scroll"
                onClick={scrollToAbout}
                aria-label="Continue to About section"
            >
                <span>Pokračovať</span>

                <span
                    className="hero__scroll-line"
                    aria-hidden="true"
                />
            </button>
        </section>
    );
}

export default Hero;