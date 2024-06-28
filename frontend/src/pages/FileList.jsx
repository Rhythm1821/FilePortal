import { useState } from "react";
import api from '../api'
import { Link } from 'react-router-dom'

export default function FileList() {
    const [files, setFiles] = useState([])

    const fetchFiles = async () => {
        try {
            const res = await api.get('files/')
            setFiles(res.data)
            console.log(res.data)
        } catch (error) {
            console.log("Error fetching files:", error);
        }
    }

    fetchFiles()
    const url = `http://127.0.0.1:8000`
    return (
        <div>
            <h1>File List</h1>
            <ul>
                {files.map((file) => (
                    <li key={file.id}>
                        <Link to={`http://127.0.0.1:8000/${file.file}`}>{file.file.split('/')[3]}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}