import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameContextProvider from './GameContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GameContextProvider>
            <App />
        </GameContextProvider>
    </StrictMode>,
)
