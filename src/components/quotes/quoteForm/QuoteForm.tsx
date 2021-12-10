import React, { useRef, useState } from 'react';
import Card from '../../UI/card/Card';
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner';
import classes from './styles/QuoteForm.module.css';
import { Prompt } from 'react-router-dom';

interface IQuoteForm {
    isLoading?: boolean;
    onAddQuote: (a: { author: string; text: string }) => void;
}

const QuoteForm = (props: IQuoteForm) => {
    const [isEntering, setIsEntering] = useState(false);
    const authorInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLTextAreaElement>(null);

    function submitFormHandler(event: React.FormEvent) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current!.value;
        const enteredText = textInputRef.current!.value;

        // optional: Could validate here

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusHandler = () => {
        setIsEntering(true);
    };

    return (
        <React.Fragment>
            {/* when the user accidentally leaves the page */}
            <Prompt
                when={isEntering}
                message={location =>
                    'Are you sure you want to leave? All your entered data will be lost!'
                }
            />
            <Card>
                <form
                    onFocus={formFocusHandler}
                    className={classes.form}
                    onSubmit={submitFormHandler}
                >
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}

                    <div className={classes.control}>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="text">Text</label>
                        <textarea
                            id="text"
                            rows={5}
                            ref={textInputRef}
                        ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnteringHandler} className="btn">
                            Add Quote
                        </button>
                    </div>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default QuoteForm;
