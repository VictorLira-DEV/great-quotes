import { Fragment } from 'react';
import QuoteItem from '../quoteItem/QuoteItem';
import classes from './styles/QuoteList.module.css';

interface IQuoteList {
  quotes: {
    id: string,
    author: string,
    text: string
  }[]
}

const QuoteList = (props: IQuoteList) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
