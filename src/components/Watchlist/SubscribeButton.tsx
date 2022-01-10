import {Button} from "antd";
import React from "react";
import {useLocation} from "react-router-dom";
import {getDatabase, ref, update} from "@firebase/database";
import {auth} from '../../firebase/firebase'

const SubscribeButton: React.FunctionComponent = () => {
    const location = useLocation()
    const symbol = location.pathname.split('/').pop()

    if (!auth || !auth.currentUser) {
        return <p>Please log in.</p>
    }

    const db = getDatabase();
    const path = `/users/${auth.currentUser.uid}/${symbol}`
    const userRef = ref(db, path)

    const subscribe = (symbol: string | undefined) => {
        if (symbol != null) {
            update(userRef, {
                symbol
            }).then(e => console.log(e))
        }

    }

    return <Button type="primary" onClick={() => subscribe(symbol)}>Add to Watchlist</Button>
}

export default SubscribeButton