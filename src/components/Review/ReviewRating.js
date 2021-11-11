import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './ReviewRating.css';

const ReviewRating = () => {
    const { register, handleSubmit, reset} = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Review added successfully');
                reset();
            });
        // console.log(data);
    };

    return (
        <div>
            <section className="" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Give your Review</p>

                            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("name")} />
                                <input placeholder="Image Link" defaultValue="" {...register("img")} />
                                <input placeholder="Rating (0-5)" defaultValue="" {...register("star")} />
                                <input placeholder="Description" defaultValue="" {...register("description")} />

                                <input type="submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            {/* <form >
                <h3>Give your review</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: '100%', height: "150px"}}></textarea>
                        </div>
                    </div>
                </div>
            </form> */}
        </div>
    );
};

export default ReviewRating;