import classes from './styles/QuoteItem.module.css';
import { Link } from 'react-router-dom'

const QuoteItem = (props: any) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      {/* <a href="#" className='btn'>
        View Fullscreen
      </a> */}
      <Link to={`/quotes/${props.id}`} className="btn"> 
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
