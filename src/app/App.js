import { lazy, Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Routes} from "react-router-dom"
import AppHeader from "../components/appHeader/AppHeader";
import Spinner from '../components/spinner/Spinner';
import { AnimatePresence, motion } from 'framer-motion';
import {defaultSlide} from "../FramerMotion/framerMotion.pages.configs";

const Page404 = lazy(() => import('../components/pages/404'));   // Динамический импорт должен быть после статических
const HomePage = lazy(() => import('../components/pages/HomePage/HomePage'));
const ProjectPage = lazy(() => import('../components/pages/ProjectsPage/ProjectsPage'));
const AboutPage = lazy(() => import('../components/pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('../components/pages/ContactPage/ContactPage'));

const App = () => {
    return (
        <HashRouter>
            <div className="app">
                <AppHeader />
                <AnimatePresence mode="wait">
                <motion.div
                       
                        variants={defaultSlide}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                >
                            <main>
                                <Suspense fallback={<Spinner/>}>
                                    <Routes>
                                        <Route path={"/"} element={<HomePage />} />
                                        <Route path={"/projects"} element={<ProjectPage />} />
                                        <Route path={"/about"} element={ <AboutPage />} />
                                        <Route path={"/contact"} element={<ContactPage />}/>
                                        <Route path="*" element={<Page404 />} />
                                    </Routes>
                                </Suspense> 
                            </main>
                </motion.div>
            </AnimatePresence>
            </div>
        </HashRouter>
    )
}
export default App;



