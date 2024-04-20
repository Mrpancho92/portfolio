// import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./HomePage.scss";
import "../../../style/style.scss";
import IconsBar from "../../iconsBar/IconsBar";
import avatar from "../../../resources/avatar.jpg";
import IsMobilePage from "../../isMobile/isMobilePage";
import { defaultSlide } from "../../../FramerMotion/framerMotion.pages.configs";
import { motion } from "framer-motion";

const HomePage = () => {
  const counter = useSelector((state) => state.counters.firstCounter);
  IsMobilePage();
  localStorage.setItem("page", "home");
  return (
    <motion.div
      variants={defaultSlide}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="homePage_bg"
    >
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Pavel Portfolio" />
          <title>Pavel Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <div className="homePage_bg">
        <div className="homePage_container">
          <div className="avatar_box">
            <img className="avatar" src={avatar} alt="avatar" />
          </div>
          <div
            className="homePage_text"
            style={{
              color: counter ? "#ffffff" : "",
            }}
          >
            <h1 className="homePage_primaryHeading">
              <div>Front-end</div>
              <div>Web Developer</div>
            </h1>
            <div className="homePage_purposes">
              <p className="homePage_paragraph">
                Привет, меня зовут Павел.
                <br />
                Как Junior Front-End разработчик, я обладаю навыками в HTML,
                CSS, JavaScript, TypeScript и React. Мой опыт заключается в
                создании динамичных, привлекательных приложений путем написания
                оптимизированного кода с использованием передовых инструментов и
                методов разработки.
              </p>
              {/* <ul className="homePage_featuresList">
                                <li className="homePage_feature">Optimized performance</li>
                                <li className="homePage_feature">Responsive layouts</li>
                                <li className="homePage_feature">Intuitive UX/UI designs</li>
                            </ul> */}
            </div>
            <Link
              className="d-flex mt-2 mb-2 justify-content-center btn btn-primary homePage_projectsBtn"
              to="/projects"
            >
              See my projects
            </Link>
            <IconsBar onChange={counter} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
// }className="homePage_projectsBtn" href="/projects"

// const mapStateToProps = (state) => {
//     return {
//         counter: state
//     }
// }

// export default connect(mapStateToProps)(HomePage);
export default HomePage;
