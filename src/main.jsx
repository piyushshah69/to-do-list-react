import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { Bounce, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <>
        <ToastContainer 
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            draggable
            theme="light"
            transition={Bounce}
        />
        <App />
    </>
)
