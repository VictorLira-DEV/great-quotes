import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../../components/comments/comments/Comments';
import HighLightedQuote from '../../components/quotes/hightlightedQuote/HighlightedQuote';

interface IParams {
    quoteId: string;
}

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great' },
];

const QuoteDetail = () => {
    /*we got access to the id we defined on "/quotes/:quoteId with useParams()"*/
    const params: IParams = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found</p>;
    }

    return (
        <Fragment>
            <h1>Quote detail page</h1>
            <HighLightedQuote text={quote?.text} author={quote?.author} />
            {/* nested route */}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;
