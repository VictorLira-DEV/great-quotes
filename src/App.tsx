import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/allQuotes/AllQuotes";
import NewQuote from "./pages/newQuote/NewQuote";
import QuoteDetail from "./pages/quoteDetail/QuoteDetail";
import Layoult from "./components/layout/layoult/Layout";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <Layoult>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes" />
                </Route>

                <Route path="/quotes" exact>
                    <AllQuotes />
                </Route>

                <Route path="/quotes/:quoteId">
                    <QuoteDetail />
                </Route>

                <Route path="/new-quote">
                    <NewQuote />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Layoult>
    );
}

export default App;
