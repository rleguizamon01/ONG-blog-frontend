import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

const ProtectedAdmin = ({Cmp}) => {
    let history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem('user-info') || !(JSON.parse(localStorage.getItem('user-info')).data.role==="admin") )
        {
            history.push("/");
        }
    }, [])

    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default ProtectedAdmin