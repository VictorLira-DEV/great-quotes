import QuoteForm from '../../components/quotes/quoteForm/QuoteForm';
import { useHistory } from 'react-router-dom';
import React from 'react';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData: any) => {
        // with push we can go back
        history.push('/quotes');
        //with replace we cannot go back
        // history.replace('/quotes');
    };

    return (
        <React.Fragment>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </React.Fragment>
    );
};

export default NewQuote;
