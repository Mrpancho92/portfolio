import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation} from "react-router-dom"
import AppHeader from "../components/appHeader/AppHeader";
import Spinner from '../components/spinner/Spinner';
import { AnimatePresence } from 'framer-motion';

const Page404 = lazy(() => import('../components/pages/404'));   // Динамический импорт должен быть после статических
const HomePage = lazy(() => import('../components/pages/HomePage/HomePage'));
const ProjectPage = lazy(() => import('../components/pages/ProjectsPage/ProjectsPage'));
const AboutPage = lazy(() => import('../components/pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('../components/pages/ContactPage/ContactPage'));

const App = () => {
    const location = useLocation();
    return (
            <div className="app">
                <AppHeader />
                    <main>
                        <Suspense fallback={<Spinner/>}>
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.key}>
                                <Route path={"/"} element={<HomePage />} />
                                <Route path={"/projects"} element={<ProjectPage />} />
                                <Route path={"/about"} element={ <AboutPage />} />
                                <Route path={"/contact"} element={<ContactPage />}/>
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                            </AnimatePresence> 
                        </Suspense> 
                    </main>
            </div>
    )
}
export default App;



