import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div>
            <h1 className="title">Home</h1>
            <ul>
                <li>
                    <Link to={"/Memorice"} className="button">Memorice</Link>
                </li>
                <br></br>
                <li>
                    <Link to={"/Tempo"} className="button">Tempo</Link>
                </li>
            </ul>
        </div>
    )
}