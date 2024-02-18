import { useState } from "react";
import { Helmet } from "react-helmet";
import '../../../style/style.scss';
import IsMobileHomePage from "../../isMobile/isMobileHomePage";

const ContactPage = () => {
    IsMobileHomePage();
    console.log('render-CONTACTME');
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Pavel Portfolio"
                />
                <title>Pavel Portfolio</title>
            </Helmet>
            <p> 80909099000990 </p>
        </>
    )
}
export default ContactPage;