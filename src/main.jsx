import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
/**
 * Entry point of the React application.
 * Renders the root component (`App`) inside the DOM element with the ID `root`.
 * Wraps the application with `BrowserRouter` for routing and `StrictMode` for highlighting potential issues.
 */
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route  path='/*' element={<App/>}/>
            </Routes>
        </StrictMode>
    </BrowserRouter>
)
