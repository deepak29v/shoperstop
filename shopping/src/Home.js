import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./images/home.jpg" alt="" />

        <div className="home__row">
          <Product
            id="84338913"
            title="Up to 55% off | Upgrade to Smart TVs"
            price={582}
            image={"./images/television.jpg"}
            rating={5}
            link={"www.youtube.com"}
          />
          <Product
            id="78451254"
            title="Up to 50% off | Refurbished mobile phones"
            price={5800}
            image={"./images/mobile.jpg"}
            rating={5}
          />
          <Product
            id="89562312"
            title="Top trending this summer | Best Selling Refrigerators"
            price={400}
            rating={5}
            image={"./images/fridge.jpg"}
          />
          <Product
            id="45562132"
            title="Capture your Beautiful Memories | Using Best Camera"
            price={56810}
            rating={5}
            image={"./images/camera.jpg"}
          />
        </div>

        <div className="home__row">
          <Product
            id="75355951"
            title="Value Packs under ₹599 | ShoperStop Brands & more"
            price={599}
            rating={5}
            image={"./images/tshirt.jpg"}
          />
          <Product
            id="12435557"
            title="Up to 60% off | Kids ethnic wear from small businesses"
            price={345}
            rating={5}
            image={"./images/kid-clothes.jpg"}
          />
          <Product
            id="96835574"
            title="Explore new collection from local shops near you"
            price={4500}
            rating={5}
            image={"./images/hand-bag.jpg"}
          />
          <Product
            id="36251594"
            title="Upgrade your Fashion | ShoperStop Brands & more"
            price={999}
            rating={5}
            image={"./images/jeans.jpg"}
          />
        </div>

        <div className="home__row">
          <Product
            id="74855922"
            title="Inspired by your shopping trends"
            price={14599}
            rating={5}
            image={"./images/shop.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
