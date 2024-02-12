import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
import IsMobileHomePage from "../isMobile/isMobileHomePage";


const Page404 = () => {
    IsMobileHomePage();
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="This page is not found"
                />
                <title>This page is not found</title>
            </Helmet>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center','fontWeight': 'bold', 'fontSize': '24px','marginTop': '30px'}} to="/home">Back to main page</Link>
        </div>
    )
}
export default Page404;