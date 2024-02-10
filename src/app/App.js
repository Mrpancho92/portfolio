import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import AppHeader from "../components/appHeader/AppHeader";
// import { MainPage, ComicsPage, SingleComicPage } from "../pages";
import Spinner from '../components/spinner/Spinner';

const Page404 = lazy(() => import('../components/pages/404'));   // Динамический импорт должен быть после статических
const HomePage = lazy(() => import('../components/pages/HomePage/HomePage'));
const ProjectPage = lazy(() => import('../components/pages/ProjectsPage/ProjectsPage'));
const AboutPage = lazy(() => import('../components/pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('../components/pages/ContactPage/ContactPage'));
// // const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
// const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/singleComicLayout'));
// const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/singleCharacterLayout.js'));
// const SinglePage = lazy(() => import('../pages/SinglePage'));
// const App = () => {  
//     return (
//         <div className="app">
//             <AppHeader /> 
//             </div>
//     )
// }

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route index element={<Navigate to="/portfolio" replace />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/projects" element={<ProjectPage />} />
                            <Route path="/about" element={ <AboutPage />} />
                            <Route path="/contact" element={<ContactPage />}/>
                            <Route path="/portfolio" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

// const App = () => {
//     return (
//         <Router>
//             <div className="app">
//                 <AppHeader />
//                 <main>
//                     <Suspense fallback={<Spinner/>}>
//                         <Routes>
//                             <Route path="/marvel" element={<MainPage />} />
//                             <Route path="/comics" element={<ComicsPage />} />
//                             <Route path="/comics/:id" element={ <SinglePage Component={SingleComicLayout} dataType='comic'/>} />
//                             <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
//                             <Route path="*" element={<Page404/>} />
//                         </Routes>
//                     </Suspense>
//                 </main>
//             </div>
//         </Router>
//     )
// }

export default App;



