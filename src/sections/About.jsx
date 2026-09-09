import Section from '../components/Section.jsx';

function About() {
    return (
        <Section
            id="about"
            eyebrow="01 / About"
            title="About the candidate"
        >
            <div className="intro-copy">
                <p className="lead">
                    This section will introduce the candidate and provide
                    concise biographical and professional information.
                </p>

                <p>
                    The final content can include background, connection to
                    the municipality, professional experience, community
                    involvement, and other relevant factual information.
                </p>
            </div>

            <div className="section-placeholder">
                <span>About section</span>
            </div>
        </Section>
    );
}

export default About;