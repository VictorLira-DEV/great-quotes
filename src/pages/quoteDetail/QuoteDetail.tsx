import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import Comments from '../../components/comments/comments/Comments';
import HighLightedQuote from '../../components/quotes/hightlightedQuote/HighlightedQuote';
import useHttp from '../../hooks/use-http';
import { getSingleQuote } from '../../lib/api';
import LoadingSpinner from '../../components/UI/loadingSpinner/LoadingSpinner';

interface IParams {
    quoteId: string;
}

const QuoteDetail = () => {
    // useRouteMatch() return object of that page we are currently on
    // it knows the parent path when we are nested
    const match = useRouteMatch();
    /*we got access to the id we defined on "/quotes/:quoteId with useParams()"*/
    const params: IParams = useParams();
    const { quoteId } = params;
    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if(status === 'pending'){
        return(
            <div className="centered">
                <LoadingSpinner/>
            </div>
        )
    }

    if(error){
        return <p className='centered'>
            {error}
        </p>
    }

    if (!loadedQuote) {
        return <p>No quote found</p>;
    }

    return (
        <Fragment>
            <h1>Quote detail page</h1>
            <HighLightedQuote text={loadedQuote?.text} author={loadedQuote?.author} />
            {/* put exact in the end so we can match the full path and not just the begining */}
            <Route path={match.path} exact>
                <div className="centered">
                    <Link to={`${match.url}/comments`} className="btn--flat">
                        Load Comments
                    </Link>
                </div>
            </Route>

            {/* nested route */}
            <Route path={`${match.path}/comments`} exact>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;
