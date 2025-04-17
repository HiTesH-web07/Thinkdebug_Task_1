import React, { useContext, useEffect } from "react";
import Nav from "../Components/Nav";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import Carousel from "../Components/carousel.component";
import { dummydata } from "../srore";
import Categories from "../Categories";
import Cart from "../Components/Cart";
import { dataContext } from "../Context/UserContext";
import { useSelector } from "react-redux";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Home = () => {
  const slides = [
    <img key={1} src={banner1} className="w-full h-full object-cover" alt="Banner 1" />,
    <img key={2} src={banner2} className="w-full h-full object-cover" alt="Banner 2" />,
  ];

  let { cate, setCate, input } = useContext(dataContext);

  function filter(category) {
    if (category === "All Products") {
      setCate(dummydata);
    } else {
      let newList = dummydata.filter((item) => item.category === category);
      setCate(newList);
    }
  }

  useEffect(() => {
    if (input.trim() === "") {
      setCate(dummydata);
    } else {
      const newList = dummydata.filter(item =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setCate(newList);
    }
  }, [input]);

  return (
    <div className="w-full min-h-screen">
          
          <Nav />
   

      {!input ? (
        <>
          <div className="w-full bg-gray-100">
            <div className="w-[95%] m-auto py-10">
              <Carousel autoslide={true}>{slides}</Carousel>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 w-full pt-7">
            {Categories.map((item) => (
              <div
                key={item.id}
                className="w-[160px] h-[210px] bg-white flex flex-col justify-start items-center p-5 gap-3 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-amber-100 cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name)}
              >
                <img src={item.image} className="w-[100px] h-[100px] object-contain" alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </>
      ) : null}

      <div className="flex flex-wrap justify-center gap-5 items-center pt-8 pb-8">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Cart
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              category={item.category}
            />
          ))
        ) : (
          <div className="text-center text-2xl pt-6 text-orange-500 font-semibold">
            No Product Found
          </div>
        )}
      </div>

      <div className="w-full bg-gray-100">
        <div className="w-[95%] m-auto py-10">
          <NewsLetter />
        </div>
      </div>

      <div className="w-full bg-white pt-8">
        <div className="w-[85%] m-auto py-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
