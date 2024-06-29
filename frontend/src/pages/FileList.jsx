import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../api';

export default function FileList() {
    const [files, setFiles] = useState([]);

    const fetchFiles = async () => {
        try {
            const res = await api.get('files/');
            setFiles(res.data);
        } catch (error) {
            console.log("Error fetching files:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await api.delete(`files/${id}/`);
            setFiles(files.filter(file => file.id !== id));
            console.log("File deleted successfully:", res.data);
        } catch (error) {
            console.log("Error deleting file:", error);
        }
    };

    const handleCopyLink = (fileUrl) => {
        navigator.clipboard.writeText(fileUrl)
            .then(() => {
                console.log("Link copied to clipboard");
            })
            .catch(err => {
                console.error("Could not copy text: ", err);
            });
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <Container
            maxWidth="sm"
            style={{
                marginTop: '2rem',
                textAlign: 'center',
                backgroundColor: '#121212',
                padding: '2rem',
                borderRadius: '8px',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom style={{ color: '#ffffff' }}>
                File List
            </Typography>
            <List>
                {files.map((file) => (
                    <ListItem key={file.id} style={{ backgroundColor: '#1c1c1c', margin: '0.5rem 0', borderRadius: '4px' }}>
                        <ListItemText>
                            <Link to={`http://127.0.0.1:8000${file.file}`} style={{ color: '#64b5f6' }}>
                                {file.file.split('/')[3]}
                            </Link>
                        </ListItemText>
                        <Box>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleCopyLink(`http://127.0.0.1:8000${file.file}`)}
                                sx={{ mr: 1 }}
                            >
                                Copy
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => handleDelete(file.id)}
                                sx={{ 
                                    backgroundColor: 'red', 
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'darkred'
                                    }
                                }} // Red button with white text
                            >
                                Delete
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
