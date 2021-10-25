import QuoteForm from '../../components/quotes/quoteForm/QuoteForm';
import { useHistory } from 'react-router-dom'
import React from 'react'

const NewQuote = () => {
    const history = useHistory()

    const addQuoteHandler = (quoteData: any) => {
        history.push('/quotes');
    }   


    return(
        <React.Fragment>
            <QuoteForm onAddQuote={addQuoteHandler} /> 
        </React.Fragment>
    )
}

export default NewQuote