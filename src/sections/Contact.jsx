import Section from '../components/Section.jsx';

function Contact() {
    return (
        <Section
            id="contact"
            eyebrow="04 / Contact"
            title="Contact"
            className="page-section--dark"
        >
            <div className="contact-layout">
                <div className="intro-copy">
                    <p className="lead">
                        Contact information and official campaign channels
                        will appear here.
                    </p>

                    <p>
                        We can later add email, social links, campaign office
                        information, required legal disclosures, and other
                        relevant details.
                    </p>
                </div>

                <div className="contact-placeholder">
                    <span>Contact information</span>
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
                    Back to top ↑
                </button>
            </footer>
        </Section>
    );
}

export default Contact;