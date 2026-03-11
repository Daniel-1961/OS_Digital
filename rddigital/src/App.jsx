import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebAndAppDevelopment from './pages/WebAndAppDevelopment';
import AzureHosting from './pages/AzureHosting';
import CypressTesting from './pages/CypressTesting';
import UmbracoDevelopment from './pages/UmbracoDevelopment';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/web-app-development" element={<WebAndAppDevelopment />} />
          <Route path="services/azure" element={<AzureHosting />} />
          <Route path="services/automated-testing-with-cypress" element={<CypressTesting />} />
          <Route path="services/Umbraco-Website-Development" element={<UmbracoDevelopment />} />
          <Route path="services/:slug" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
