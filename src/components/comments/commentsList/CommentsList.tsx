import CommentItem from '../commentItem/CommentItem';
import classes from './styles/CommentsList.module.css';

const CommentsList = (props: any) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment: any) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
