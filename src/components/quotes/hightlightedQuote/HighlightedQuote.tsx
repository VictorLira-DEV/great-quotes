import classes from './styles/HighlightedQuote.module.css';

const HighlightedQuote = (props: any) => {
    return (
        <figure className={classes.quote}>
            <p>{props.text}</p>
            <figcaption>{props.author}</figcaption>
        </figure>
    );
};

export default HighlightedQuote;
