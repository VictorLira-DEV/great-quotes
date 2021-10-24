import classes from './styles/QuoteItem.module.css';

interface IQuoteItem {
  text: string,
  author: string
}

const QuoteItem = (props: any) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className='btn'>
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
