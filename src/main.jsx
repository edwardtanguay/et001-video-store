import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppProvider>
);
