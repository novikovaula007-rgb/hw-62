import {StrictMode} from 'react'
import './index.css'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
