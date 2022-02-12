import { createRoot } from 'react-dom'
import './App.css'
import App from './App'

const container = document.getElementById('react-root')
const root = createRoot(container)
root.render(<App />)
