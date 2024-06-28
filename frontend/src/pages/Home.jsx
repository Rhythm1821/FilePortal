import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
                <ul>
                    <li>
                        <Link to="/upload">Upload File</Link>
                    </li>
                    <li>
                        <Link to="/files">View Files</Link>
                    </li>
                </ul>
        </div>
    )
}   