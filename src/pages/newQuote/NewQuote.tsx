import React, {useEffect} from 'react';
import QuoteForm from '../../components/quotes/quoteForm/QuoteForm';
import { useHistory, useRouteMatch } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { addComment, addQuote } from '../../lib/api';

const NewQuote = () => {
    const  {sendRequest, status} =  useHttp(addQuote)
    const history = useHistory();

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes')
        }

    }, [status, history])

    const addQuoteHandler = (quoteData: any) => {
        // with push we can go back
        //with replace we cannot go back
        // history.replace('/quotes');
        console.log(quoteData)
        sendRequest(quoteData)
    };

    return (
        <React.Fragment>
            <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
        </React.Fragment>
    );
};

export default NewQuote;
