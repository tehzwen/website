import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Screens from '../Pages/index.js';

const renderRoutes = (pageRoutes) => {
    return Object.keys(pageRoutes).map((route) => {
        return <Route key={route} path={route} element={pageRoutes[route]} />
    });
}

const RouteManager = () => {
    const pageRoutes = {
        "/home": <Screens.Home />,
        "/projects/": <Screens.Projects />,
        "/opencvrockpaperscissors/": <Screens.RPS />,
        "/about/": <Screens.About />,
        "/appraisalemobileapp/": <Screens.Appraisale />,
        "/cudpprogramming/": <Screens.CUDP />,
        "/discordbot/": <Screens.DiscordBot />,
        "/webglwork/": <Screens.WebGL />
    }

    return (
        <HashRouter basename="/">
            <Routes>
                {renderRoutes(pageRoutes)}
                <Route
                    path="*"
                    element={<Navigate to="/home" />}
                />
            </Routes>
        </HashRouter>
    );
}

export default RouteManager;
