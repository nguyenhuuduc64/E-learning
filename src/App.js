import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes'; // Đảm bảo publicRoutes đã được import đúng
import Header from './components/Layout/DefautLayout/Header';
import Sidebar from './components/Layout/DefautLayout/Sidebar';

function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
