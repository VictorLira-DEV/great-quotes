import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './styles/Comments.module.css';
import NewCommentForm from '../newCommentForm/NewCommentForm';
import useHttp from '../../../hooks/use-http';
import { getAllComments } from '../../../lib/api';
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner';
import CommentsList from '../commentsList/CommentsList';
import { useCallback } from 'react';
const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const params = useParams();
    const { quoteId }: any = params;
    const {
        sendRequest,
        status,
        data: loadedComments,
    } = useHttp(getAllComments);

    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId, sendRequest]);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const addedCommentHandler = useCallback(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    let comments;
    if (status === 'pending') {
        comments = (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (status === 'completed' && loadedComments && loadedComments.length > 0) {
        comments = <CommentsList comments={loadedComments} />;
    }

    if (
        status === 'completed' &&
        (!loadedComments || loadedComments.length === 0)
    ) {
        comments = <p className="centered"> No comments were added </p>;
    }

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && (
                <NewCommentForm
                    quoteId={quoteId}
                    onAddedComment={addedCommentHandler}
                />
            )}
            {comments}
        </section>
    );
};

export default Comments;
