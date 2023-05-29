import ReactIconRemoveContext from "./contexts/ReactIconRemoveContext";
import { useContext, useEffect } from "react";


export const ReactHeader = (props) => {
    const [headerRemoval, setHeaderRemoval] = useContext(ReactIconRemoveContext, props);

    console.log(props.image)
    //funtions
    // logs 
    // fetch data sadece bir kere

    return <>

        <img src={props.image} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </>
}