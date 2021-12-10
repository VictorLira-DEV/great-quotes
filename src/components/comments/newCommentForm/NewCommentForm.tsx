import React, { useRef } from 'react';

import classes from './styles/NewCommentForm.module.css';

const NewCommentForm = (props: any) => {
    const commentTextRef = useRef<any>();

    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // optional: Could validate here

        // send comment to server
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" ref={commentTextRef}></textarea>{' '}
                {/*rows="5"*/}
            </div>
            <div className={classes.actions}>
                <button className="btn">Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
