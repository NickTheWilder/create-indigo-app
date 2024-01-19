import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./home";

const App: React.FC = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

const rootElement = document.getElementById("root") as HTMLElement | null;

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
