import Section from '../components/Section.jsx';

function Program() {
    return (
        <Section
            id="program"
            eyebrow="03 / Program"
            title="Program"
        >
            <div className="intro-copy">
                <p className="lead">
                    The program section will provide more detailed
                    information while keeping the page visually simple.
                </p>

                <p>
                    We can later decide whether this becomes an accordion,
                    grouped topics, a timeline, or a structured set of
                    subsections.
                </p>
            </div>

            <div className="program-placeholder">
                <div className="program-placeholder__line" />
                <div className="program-placeholder__line" />
                <div className="program-placeholder__line" />
                <div className="program-placeholder__line program-placeholder__line--short" />
            </div>
        </Section>
    );
}

export default Program;