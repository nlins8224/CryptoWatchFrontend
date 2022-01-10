import React from 'react';
import '../styles/App.less';
import {WatchlistTableView} from "../components/Watchlist/WatchlistTableView";

const WatchlistPage = () => {
    return (
        <div>
            <p>
                This is the WATCHLIST page
            </p>
            <WatchlistTableView/>
        </div>

    );
}

export default WatchlistPage;