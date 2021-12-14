import React, { useRef, useEffect } from 'react';
import useHttp from '../../../hooks/use-http';
import { addComment } from '../../../lib/api';
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner';
import classes from './styles/NewCommentForm.module.css';

interface INewComment {
    onAddedComment: () => void;
    quoteId: string;
}

const NewCommentForm = (props: INewComment) => {
    const commentTextRef = useRef<any>();

    const { sendRequest, status, error } = useHttp(addComment);
    const { onAddedComment } = props;

    useEffect(() => {
        if (status === 'completed' && !error) {
            onAddedComment();
        }
    }, [status, error, onAddedComment]);

    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = commentTextRef.current.value;
        // optional: Could validate here

        // send comment to server
        sendRequest({
            commentData: { text: enteredText },
            quoteId: props.quoteId
        });
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === 'pending' && (
                <div className="centered">
                    <LoadingSpinner />
                </div>
            )}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" ref={commentTextRef}></textarea>
                {/*rows="5"*/}
            </div>
            <div className={classes.actions}>
                <button className="btn">Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
