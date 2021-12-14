import { useEffect } from 'react';
import NoQuotesFound from '../../components/quotes/noQuotesFound/NoQuotesFound';
import QuoteList from '../../components/quotes/quoteList/QuoteList';
import LoadingSpinner from '../../components/UI/loadingSpinner/LoadingSpinner';
import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api';

const AllQuotes = () => {
    const {
        sendRequest,
        status,
        data: loadedQuotes,
        error,
    } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centered focused"> {error} </p>;
    }

    if (
        status === 'completed' &&
        (!loadedQuotes || loadedQuotes.length === 0)
    ) {
        return <NoQuotesFound />;
    }

    return (
        <div>
            <QuoteList quotes={loadedQuotes} />
        </div>
    );
};

export default AllQuotes;
