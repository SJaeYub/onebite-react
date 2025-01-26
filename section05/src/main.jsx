import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> //개발모드에서 잠재적인 오류 코드가 존재하는지 알려주는 코드
    <App />
  // </StrictMode>,
)
