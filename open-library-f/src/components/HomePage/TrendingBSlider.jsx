import React, { Component } from "react";
import Slider from "react-slick";
import TrendingBList from "./TrendingBooksList";
import TrendingBook from "./TrendingBook";

function GetBook(book){
    return(
      <TrendingBook 
        key = {book.id}
        imageUrl = {book.imgUrl}
        status = {book.status}
        btnStyle = {book.btnStyle}
     />
    );
  }
export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div >
            <Slider {...settings}>
              {TrendingBList.map(GetBook)}
           </Slider>
        
        </div>
      );
    }
  }