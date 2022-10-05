import React, {useContext} from "react";
import './landingPagestyle.css';
import {Link} from 'react-router-dom';
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import AuthContext from '../context/AuthContext';

export default function LandingPage(){

  const { loggedIn } = useContext(AuthContext);

  const redirectPage = ()=>{
    if(loggedIn === null){
      window.location = '/login'
    }else if(loggedIn.role === 'owner'){
      window.location = '/homeowner'
    }else {
      window.location = '/homeclient'
    }

  }

    return (
        <>
    <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing Page</title>
  </head>
  <body>
    <main>
      <Header/>
      <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
        <div class="showcase-area">
          <div class="container">
            <div class="left">
              <div class="big-title">
                <h1>Welcome To Future Mart!</h1>
                {
                loggedIn === null && (<>
                 <h1>Start Exploring Now.</h1>
                </>)
              }
                {
                loggedIn !== null && loggedIn.role === 'buyer' && (<>
                <h1>Start Shopping Now.</h1>
                </>)
              }
              {
                loggedIn !== null && loggedIn.role === 'owner' && (<>
                <h1>Start Selling Now.</h1>
                </>)
              }
              </div>
              <p class="text">
              Ideal for supermarkets and shopping malls. Customers can interact virtually and physically with the product. 
              The product is used for negotiation on certain occasions with the aid of ontology. 
              </p>
              <p class="text">
              The goal is to make business more efficient by using ontology-based negotiation through a salesman-bot. 
              Salesman-bot makes service more reliable and easier for people using supermarkets, shopping malls, and eCommerce.  
              </p>
              <div class="cta">

               <Link><li href="#" onClick={redirectPage} class="btn2">Get started</li></Link>

              </div>
            </div>

            <div class="right">
              <img src="https://i.postimg.cc/4yYBmhFD/0c428e8239727076ce2e1716b1ee529eff79ad34466fea57e80c3ebc4336a019821c607b17d5ada3-car-202x158.gif" />
            </div>
              <row></row>
          </div>
        </div>
    </main>
    <Footer/>
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="./app.js"></script>
  </body>
  </>
    )
}