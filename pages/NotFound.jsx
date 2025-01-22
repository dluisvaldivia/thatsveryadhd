// filepath: /workspaces/site/pages/NotFound.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const path = window.location.pathname;
        const redirectTo = '/SarahKB'; // Adjust the base path if necessary
        navigate(redirectTo, { replace: true });
    }, [navigate]);

    return null;
}