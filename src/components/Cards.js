
function Cards(props) {
    return (
        <article className="testimonial-card">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default Cards;