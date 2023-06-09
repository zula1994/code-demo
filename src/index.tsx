import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import 'tailwindcss/tailwind.css'
import Router from './routers';
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<BrowserRouter>
  <Router></Router>
</BrowserRouter>)
