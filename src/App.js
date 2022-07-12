import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publishRoutes.map((route, index) => {
                        const Components = route.components;
                        return <Route key={index} path={route.path} element={<Components />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
