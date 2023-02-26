import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='auth' element={<Authentication />} />
            </Route>
        </Routes>
    );
};

export default App;
