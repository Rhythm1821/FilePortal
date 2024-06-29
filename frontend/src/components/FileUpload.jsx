import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Box } from '@mui/material';
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
        <Container
            maxWidth="sm"
            style={{ 
                marginTop: '2rem', 
                textAlign: 'center', 
                backgroundColor: '#121212', // Dark background color
                padding: '2rem',
                borderRadius: '8px',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom style={{ color: '#ffffff' }}>
                Upload a File
            </Typography>
            <Box
                component="form"
                onSubmit={handleFileUpload}
                noValidate
                sx={{ mt: 1 }}
            >
                <input
                    accept="*"
                    style={{ display: 'none' }}
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        component="span" 
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        Choose File
                    </Button>
                </label>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="secondary" 
                    fullWidth
                >
                    Upload
                </Button>
            </Box>
        </Container>
    );
};

export default FileUpload;
