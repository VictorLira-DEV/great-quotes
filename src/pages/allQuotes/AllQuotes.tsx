import QuoteList from '../../components/quotes/quoteList/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great' },
];

const AllQuotes = () => {
    return (
        <div>
            <QuoteList quotes={DUMMY_QUOTES} />
        </div>
    );
};

export default AllQuotes;
