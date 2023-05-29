import { useContext } from "react"
import ReactIconRemoveContext from "./contexts/ReactIconRemoveContext"

export const ReactText = ()  => {


    return (
        <>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React 3
            </a>
        </>
    )
}



export const ChildComponent = () => {
    const [headerRemoval, setHeaderRemoval]  = useContext(ReactIconRemoveContext)

    const handleRemoval = () => {
        setHeaderRemoval(true)
        console.log(headerRemoval + " from Child Component")
        // react ikonunu silme
        // document.querySelector('#root > div > header > img').remove();
    }
    return (
        <>

            <h1 onClick={handleRemoval}>Hellow World</h1>
            
        </>
    )
}

// export default ReactText;