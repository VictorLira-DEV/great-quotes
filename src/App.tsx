import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layoult from './components/layout/layoult/Layout';
import LoadingSpinner from './components/UI/loadingSpinner/LoadingSpinner';

//Production process
// lazy loading with  react router
//lazy loading split out code loading process into chuncks
//this initial bundle will be smaller
//irá criar um novo pedaço, que só será baixado quando o usuário visitar
const NewQuote = React.lazy(() => import('./pages/newQuote/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/quoteDetail/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/notFound/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/allQuotes/AllQuotes'));

function App() {
    return (
        <Layoult>
            {/* <Switch>  v6*/}
            <Suspense
                fallback={
                    <div className="centered">
                        <LoadingSpinner />
                    </div>
                }
            >
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quotes" />
                    </Route>

                    <Route path="/quotes" exact>
                        <AllQuotes />
                    </Route>
                    {/* this ":quoteId" is the key to access with useParams() */}
                    <Route path="/quotes/:quoteId">
                        <QuoteDetail />
                    </Route>
                    <Route path="/new-quote">
                        <NewQuote />
                    </Route>
                    {/* unknown route */}
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                {/* </Switch> */}
            </Suspense>
        </Layoult>
    );
}

export default App;
