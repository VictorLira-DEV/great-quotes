import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
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
    // useRouteMatch() return object of that page we are currently on
    // it knows the parent path when we are nested
    const match = useRouteMatch();
    console.log(match);
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
            {/* put exact in the end so we can match the full path and not just the begining */}
            <Route path={match.path} exact>
                <div className="centered">
                    <Link to={`${match.url}/comments`} className="btn--flat">
                        Load Comments
                    </Link>
                </div>
            </Route>

            {/* nested route */}
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;
