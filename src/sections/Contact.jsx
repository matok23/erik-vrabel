import Section from '../components/Section.jsx';

function Contact() {
    return (
        <Section
            id="contact"
            eyebrow="04"
            title="Kontakt"
            className="page-section--dark"
        >
            <div className="contact-layout">
                <div className="contact-info">
                    <p className="lead">
                        Neváhajte a kontaktujte ma. Na Vaše otázky rád odpoviem.
                    </p>

                    <div className="contact-list">

                        <div className="contact-item">
                            <span className="contact-item__label">
                                Email
                            </span>

                            <a
                                href="mailto:silnyvistuk@erikvrabel.sk"
                                className="contact-item__value"
                            >
                                silnyvistuk@erikvrabel.sk
                            </a>
                        </div>


                        <div className="contact-item">
                            <span className="contact-item__label">
                                Tel
                            </span>

                            <a
                                href="tel:+421905012149"
                                className="contact-item__value"
                            >
                                +421 905 012 149
                            </a>
                        </div>


                        <div className="contact-item">
                            <span className="contact-item__label">
                                Web
                            </span>

                            <a
                                href="https://erikvrabel.sk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item__value"
                            >
                                www.erikvrabel.sk
                            </a>
                        </div>

                    </div>
                </div>


                <div className="flyer-preview">
                    <div className="flyer-preview__header">
                        <span>Volebný leták</span>

                        <a
                            href="/letak.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flyer-preview__open"
                        >
                            Prezerať leták ↗
                        </a>
                    </div>

                    <div className="flyer-preview__document">

                        <iframe
                            src="/letak.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            title="Campaign flyer preview"
                            className="flyer-preview__iframe"
                        />

                        <a
                            href="/letak.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flyer-preview__link"
                            aria-label="Open campaign flyer PDF in a new tab"
                        />

                    </div>
                </div>

            </div>

            <footer className="site-footer">
                <p>
                    Ing. Erik Vrábel, Vištuk č. 505, 900 85 Vištuk
                </p>

                <button
                    type="button"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                >
                    Návrat na vrchol ↑
                </button>
            </footer>
        </Section>
    );
}

export default Contact;