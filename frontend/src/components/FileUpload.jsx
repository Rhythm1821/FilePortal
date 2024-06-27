import React, { useState } from 'react';
import api from '../api';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            console.log("Uploading file...");
            const response = await api.post('files/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log("File uploaded successfully");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleFileUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default FileUpload;
