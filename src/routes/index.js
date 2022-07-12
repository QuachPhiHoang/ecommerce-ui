import Home from '~/pages/Home';
import About from '~/pages/About';
import Contact from '~/pages/Contact';

const publishRoutes = [
    { path: '/', components: Home },
    { path: '/about', components: About },
    { path: '/contact', components: Contact },
];
const privateRoutes = [];

export { publishRoutes, privateRoutes };
