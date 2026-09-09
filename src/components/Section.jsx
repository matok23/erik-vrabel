function Section({
    id,
    eyebrow,
    title,
    children,
    className = '',
}) {
    return (
        <section
            id={id}
            className={`page-section ${className}`}
            data-section={id}
        >
            <div className="section-container">
                <div className="section-heading">
                    {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

                    {title && <h2 className="section-title">{title}</h2>}
                </div>

                <div className="section-body">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Section;