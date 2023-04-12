import React from 'react'
import { Button, Box } from '@mui/material';

export default function Navigation() {
    const pages = ['About', 'Contact', 'Portfolio', 'Resume'];
    return (
        <Box sx={{display: "flex"}}>
            {pages.map((page) => (
                <Button
                key={page}
                href={'#' + page.toLowerCase()}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                {page}
                </Button>
            ))}
        </Box>
    )
}
