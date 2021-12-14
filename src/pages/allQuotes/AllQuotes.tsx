import QuoteList from '../../components/quotes/quoteList/QuoteList';
import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great' },
];

const AllQuotes = () => {
    const {
        sendRequest,
        status,
        data: loadedQuotes,
        error,
    } = useHttp(getAllQuotes, true);

    return (
        <div>
            <QuoteList quotes={DUMMY_QUOTES} />
        </div>
    );
};

export default AllQuotes;
