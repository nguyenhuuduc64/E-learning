import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import { publicRoutes } from './routes';
import Header from './components/Layout/DefautLayout/Header';
import Sidebar from './components/Layout/DefautLayout/Sidebar';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </Provider>
    );
}

function AppContent() {
    const location = useLocation();

    return (
        <div className="App">
            <Header />
            <Sidebar />
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Component = route.component;
                    return <Route key={index} path={route.path} element={<Component />} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
