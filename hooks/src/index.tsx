import './index.css'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import {DataContext} from './data/DataContext'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container!)

root.render(<App />)