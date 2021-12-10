import { Fragment } from "react";
import QuoteItem from "../quoteItem/QuoteItem";
import classes from "./styles/QuoteList.module.css";
import { useHistory, useLocation } from "react-router-dom";

interface IQuoteList {
	quotes: {
		id: string;
		author: string;
		text: string;
	}[];
}

interface IquoteObject {
	id: string;
	author: string;
	text: string;
}

const sortQuotes = (quotes: IquoteObject[], ascending: boolean) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = (props: IQuoteList) => {
	const history = useHistory();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const isSortingAscending = queryParams.get("sort") === "asc";
	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

	const changeSortingHandler = () => {
		history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
	};

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button className="" onClick={changeSortingHandler}>
					Sort {isSortingAscending ? "Descending" : "Ascending"}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
