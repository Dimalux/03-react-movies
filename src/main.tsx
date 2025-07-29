// import { createRoot } from "react-dom/client";
// import App from "./components/App/App";
// import "./index.css";

// createRoot(document.getElementById("root") as HTMLDivElement).render(<App />);







import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './components/App/App';
import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <Toaster position="top-right" /> {/* Компонент для сповіщень */}
    </React.StrictMode>
);