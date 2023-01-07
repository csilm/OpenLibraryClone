import React, { Component } from "react";
import Slider from "react-slick";
import openLibList from './OpenLibList';
import OpenLibBook from './OpenLibBook';

function GetBook(book){
    return(
      <OpenLibBook 
      key = {book.id}
      imageUrl = {book.imgUrl}
      title = {book.title}
      bbody = {book.bookbody}
     />
    );
  }
export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
              {openLibList.map(GetBook)}
           </Slider>
        
        </div>
      );
    }
  }