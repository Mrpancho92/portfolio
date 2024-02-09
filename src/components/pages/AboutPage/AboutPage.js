import { useState } from "react";
import { Helmet } from "react-helmet";
import '../../../style/style.scss';
import IsMobileHomePage from "../../isMobile/isMobileHomePage";

const AboutPage = () => {
    IsMobileHomePage();
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Pavel Portfolio"
                />
                <title>Pavel Portfolio</title>
            </Helmet>
            <p> about </p>
        </>
    )
}
export default AboutPage;