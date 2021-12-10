import classes from './Layout.module.css';
import MainNavigation from '../mainNavigation/MainNavigation';
import { Fragment, ReactNode } from 'react';

interface ILayoult {
    children: ReactNode;
}

const Layoult = (props: ILayoult) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
};

export default Layoult;
