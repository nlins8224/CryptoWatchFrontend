import React from "react";
import { auth } from '../../firebase/firebase'
import {Navigate} from "react-router-dom";

const RequireAuth = (props: {children: any, redirectTo: string}) => {

    return auth.currentUser? props.children : <Navigate to={props.redirectTo}/>

}

export default RequireAuth