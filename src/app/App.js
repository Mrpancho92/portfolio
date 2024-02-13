import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
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
// window.addEventListener('unload', function() {
//     let currentURL = window.location.href;
//     let index = currentURL.indexOf("/home");
//     console.log(currentURL);
    
//     if(index > -1) {
//         // window.location.replace("http://localhost:3000/project") ; 
//         window.location.href = 'http://localhost:3000';
//         console.log('dgdfghgddsfggdhf');
//     }
//     });

const App = () => {
    // console.log(window.location.href);
    // window.location.href = 'http://localhost:3000';
    // var _hash = window.location.pathname;
    // // console.log(_hash);
    // console.log(_hash);
    // useEffect(() => {
    //     window.onbeforeunload = () => {
    //         window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.href))
    //     }
    // },[])
  

    // window.addEventListener('unload', function() {
    //     const localSave = () => {
    //         localStorage.setItem('url', window.location.href);  
    //     }
    //     localSave();
            // let currentURL = window.location.href;
            // let index = currentURL.indexOf("/home");
            // console.log(currentURL);
            // if(index > -1) {
                 
            // }
            // });
// if( _hash ){
// let x = window.location.hash.replace("#", "/home");

// window.location.hash= x;
// console.log(typeof x);
// }
// console.log(window.location.pathname);
// useEffect(() => {
//     window.location.replace("http://localhost:3000");  
// },[])
// window.location.replace("http://localhost:3000/home");
 
   
//    window.history.replaceState(null, "New Page Title", "/")
//    document.location.replace("/project",);

    // window.location.search = 'http://localhost:3000';
    return (
       
        <HashRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner/>}>
                    
                        <Routes>
                            {/* <Route index element={<Navigate to="/portfolio" replace />} /> */}
                            {/* <Route path="/home" element={<HomePage />} />
                            <Route path="/projects" element={<ProjectPage />} />
                            <Route path="/about" element={ <AboutPage />} />
                            <Route path="/contact" element={<ContactPage />}/>
                            <Route path="/portfolio" element={<Page404 />} /> */}
                            <Route path={"/"} element={<HomePage />} />
                            <Route path={"/projects"} element={<ProjectPage />} />
                            <Route path={"/about"} element={ <AboutPage />} />
                            <Route path={"/contact"} element={<ContactPage />}/>
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                      
                    </Suspense>
                </main>
            </div>
        </HashRouter>
       
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



