import React from "react";
import './style.css'
import Menu from "../menu";
const Home=()=>{
return(
    <>
    <div className="home">
        <div>
    <h1>All fast food are <br/>
        avaibale at Foodle</h1>

<div>
    
    <h2> We Are Just A Click Away When You Crave For Delicious Food</h2>
</div>
<div className="home-buttons">
<button>Buy Now</button>
    <button>How To Order</button>
</div>
    </div>

    <div>
        <img src="burger.png" alt="burger"/>
    </div>
    </div>
    {/* SERVICES */}

<div className="services">
    <div className="service-content">
        <div>
            <img src="box.jpeg" alt="burger"/>
        </div>
        <div>
            <h1>Fast Delivery</h1>
            <p>The food will be delivered to you within 1-2 hours of your ordering</p>
        </div>
    </div>


    <div className="service-content">
        <div>
            <img src="logo2.jpg" alt="burger"/>
        </div>
        <div>
            <h1>Fresh Food</h1>
            <p>The food will be delivered to you within 1-2 hours of your ordering</p>
        </div>
    </div>


    <div className="service-content">
        <div>
            <img src="rotating.png" alt="burger"/>
        </div>
        <div>
            <h1>Free Delivery</h1>
            <p>The food will be delivered to you within 1-2 hours of your ordering</p>
        </div>
    </div>
    </div>


    {/* DELIVERIES */}
    <div className="deliver">
        <div>
            <h1>Best <span>Deliveries</span></h1>
            <h1>Categories</h1>
        </div>
        <div>
            <h3>Here Are Some Of Our Best Distributed <br/>Categories. If You Want You Can Order <br/>From Here.</h3>
        </div>
    </div>




    {/* catego */}


   <div className="catego">
    <div className="category-content">
        <div>
            <img src="chicken_burger.png" alt="burger"/>
        </div>
        <div>
            <h1>Chicken Burger</h1>
            <p>Order Now  </p>
        </div>
    </div>


    <div className="category-content">
        <div>
            <img src="chicken_pizza.jpg" alt="burger"/>
        </div>
        <div>
            <h1>Chicken Pizza</h1>
            <p>Order Now  </p>
        </div>
    </div>


    <div className="category-content">
        <div>
            <img src="chips.png" alt="burger"/>
        </div>
        <div>
            <h1>French Fries</h1>
            <p>Order Now  </p>
        </div>
    </div>
    </div>
    {/* MENUUUUUS */}
<div className="our_menu">
    <div>
        <h1>Our <span>Regular</span> Menu</h1>
        <p>These Are Our Regular Menus. You Can <br/>Anything You Like</p>
    </div>
    <div>
        <button>
            See All

        </button>
    </div>
</div>
   
    <div className="div1">
      {Menu.map((menu, index) => (
        <div key={index} className="div2">
          <div>
            <img src={menu.image} alt={menu.title} className="img-menu" />
          </div>
          <div>
            <h1>{menu.title}</h1>
           <p>{menu.ratings}</p>
            <h3>{menu.price}<span><button>Buy Now</button></span></h3>
          </div>
        </div>
      ))}
    </div>
 
    {/* Discount */}
    <div className="discount">
        <div className="pizza">
            <img src="pizza.jpeg" alt="pizza"/>
            </div>

            <div className="promotion">
            <img src="crepe.jpeg" alt="crepe"/>
            <img src="tacos.jpeg" alt="tacos"/>  
            </div>
        
    </div>
    </>
)



}
export default Home