import * as React from "react";
import {useEffect, useState} from 'react';

import Menu from './Menu';

export default function Home() {

    const [user, setUser] = useState(null);
    const [loged, setLoged] = useState(false);

    useEffect(() => {
      if (sessionStorage.getItem("user")){
        setUser(sessionStorage.getItem("user"));
        setLoged(true); 
      }
    }, [user, loged]);

return (
    <div>
        <Menu/>
    </div>
);
}
