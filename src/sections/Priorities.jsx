import Section from '../components/Section.jsx';

function Priorities() {
    return (
        <Section
            id="priorities"
            eyebrow="02"
            title="Moje hodnoty"
            className="page-section--alternate"
        >
            <div className="intro-copy">
                <p className="lead">
                    This area will present the main topics and priorities in
                    a clear, easy-to-scan format.
                </p>

                <p>
                    We'll design the individual priority items after the
                    overall visual structure of the site is established.
                </p>
            </div>

            <div className="placeholder-grid">
                <article className="placeholder-item">
                    <span className="placeholder-item__number">
                        01
                    </span>

                    <h3>Priority</h3>

                    <p>
                        Short factual description will go here.
                    </p>
                </article>

                <article className="placeholder-item">
                    <span className="placeholder-item__number">
                        02
                    </span>

                    <h3>Priority</h3>

                    <p>
                        Short factual description will go here.
                    </p>
                </article>

                <article className="placeholder-item">
                    <span className="placeholder-item__number">
                        03
                    </span>

                    <h3>Priority</h3>

                    <p>
                        Short factual description will go here.
                    </p>
                </article>
            </div>
        </Section>
    );
}

export default Priorities;