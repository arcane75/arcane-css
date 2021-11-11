import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './CaroselReviews.css';
import Rating from 'react-rating';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Card, CardMedia } from '@mui/material'
import reviewImg from '../../images/review.jpg';

const CaroselReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    return (
        // <div className="container">
        //     <div className="my-5 review-text">
        //         <h2>Clients With
        //             Reason To Smile <i className="far fa-smile smile"></i></h2>
        //     </div>
        //     <Slider {...settings}>
        //         {
        //             reviews.map((review) =>
        //                 <div className='review-container p-2'>
        //                     <div className='single-review'>
        //                         <img className="img-fluid mx-auto" src={review.img} alt=" " />
        //                         <h3>{review.name}</h3>
        //                         <Rating
        //                             initialRating={review.star}
        //                             emptySymbol="far fa-star icon-color"
        //                             fullSymbol="fas fa-star icon-color"
        //                             readonly></Rating>
        //                         <br />
        //                         <p>{review.description}</p>
        //                     </div>

        //                 </div>

        //             )
        //         }

        //     </Slider>
        // </div>

        <Carousel>
            {
                reviews.map((review) =>
                    <div className='container'>
                        <div className="my-5 review-text">
                            <h2>Clients With
                                Reason To Smile <i className="far fa-smile smile"></i></h2>
                        </div>

                        <div className='review-container row p-2'>
                            <div className='single-review col-md-6 col-sm-12' >
                                {/* <img className="img-fluid mx-auto" src={review.img} alt=" " /> */}
                                <CardMedia
                                    component="img"
                                    style={{ width: 'auto', height: 'auto', margin: 'auto' }}
                                    image={review.img}
                                    alt="green iguana"
                                />
                                <h3>{review.name}</h3>
                                <Rating
                                    initialRating={review.star}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color text-warning"
                                    readonly>
                                </Rating>

                                <p>{review.description}</p>
                            </div>
                            <div className='col-md-6 col-sm-12 review-img'>
                            <img className='img-fluid' src={reviewImg} alt="" />
                            </div>
                        </div>
                    </div>
                )
            }
        </Carousel>
    );

};

export default CaroselReview;
