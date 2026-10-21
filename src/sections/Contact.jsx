import Section from '../components/Section.jsx';

const DOCUMENTS = [
    {
        title: 'Volebný leták',
        linkLabel: 'Prezerať leták',
        file: '/letak.pdf',
        ariaLabel: 'Open campaign flyer PDF in a new tab',
    },
    {
        title: 'Predvolebný list',
        linkLabel: 'Prezerať list',
        file: '/predvolebny-list.pdf',
        ariaLabel: 'Open pre-election letter PDF in a new tab',
    },
];

function PdfPreview({ title, linkLabel, file, ariaLabel }) {
    return (
        <div className="flyer-preview">
            <div className="flyer-preview__header">
                <span>{title}</span>

                <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flyer-preview__open"
                >
                    {linkLabel} ↗
                </a>
            </div>

            <div className="flyer-preview__document">
                <iframe
                    src={`${file}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={`${title} – náhľad`}
                    className="flyer-preview__iframe"
                    tabIndex={-1}
                />

                <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flyer-preview__link"
                    aria-label={ariaLabel}
                />
            </div>
        </div>
    );
}

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
                            <span className="contact-item__label">Email</span>
                            <a
                                href="mailto:silnyvistuk@erikvrabel.sk"
                                className="contact-item__value"
                            >
                                silnyvistuk@erikvrabel.sk
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="contact-item__label">Tel</span>
                            <a
                                href="tel:+421905012149"
                                className="contact-item__value"
                            >
                                +421 905 012 149
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="contact-item__label">Web</span>
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

                <div className="flyer-previews">
                    {DOCUMENTS.map((doc) => (
                        <PdfPreview key={doc.file} {...doc} />
                    ))}
                </div>
            </div>

            <footer className="site-footer">
                <p>Ing. Erik Vrábel, Vištuk č. 505, 900 85 Vištuk</p>

                <button
                    type="button"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                >
                    Návrat na začiatok ↑
                </button>
            </footer>
        </Section>
    );
}

export default Contact;
