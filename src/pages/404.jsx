import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const Styled404 = styled.div`

    background-color: #12002b;
    flex: 1;

    & .container404 {
        box-sizing: border-box;
        background-color: white;
        width: 90%;
        
        margin: 0 auto;
        margin-top: 3rem;
        padding: 2rem;
        font-size: 20px;

        @media (min-width: 720px) {
        max-width: 60%;
        font-size: 40px;

        }
    }


`

export default function Page404() {
    

    return <>
    
    <Header></Header>

    <Styled404>
        <section className="container404">
            <h2>404<br></br>Page not found</h2>
            <Link to={"/"}>Back to homepage</Link>


        </section>
    </Styled404>

    <Footer></Footer>
    
    </>
}