import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../../components/comments/comments/Comments";

interface IParams {
    quoteId: string;
}

const QuoteDetail = () => {
    const params: IParams = useParams();

    return (
        <Fragment>
            <h1>Quote detail</h1>
            <p> {params.quoteId} </p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;
