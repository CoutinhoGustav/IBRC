import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Programacoes from './pages/Programacoes';
import QuemSomos from './pages/QuemSomos';
import Contato from './pages/Contato';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programacoes" element={<Programacoes />} />
                    <Route path="/quem-somos" element={<QuemSomos />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
