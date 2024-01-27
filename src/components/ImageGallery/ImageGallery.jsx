import React from "react";
import wine from '../../utils/img/wine.jpg';
import spoons from '../../utils/img/spoons.jpg';
import cook from '../../utils/img/cook.jpg';
import home2 from '../../utils/img/home2.jpg';
import salmon from '../../utils/img/salmon.jpg';
import food from '../../utils/img/food.jpg';
import gourmet from '../../utils/img/gourmet.jpg';
import shrimp from '../../utils/img/shrimp.jpg';
import meat_balls from '../../utils/img/meat_balls.jpg'; 
import hawaian from '../../utils/img/hawaian.jpg';

export const ImageGallery = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">
                Image Gallery
            </h2>
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={wine} alt="wine" className="img-fluid"/>
                    </div>
                    <div className="my-3">
                        <img src={spoons} alt="spoons" className="img-fluid" />
                    </div>
                    <div className="my-3">
                        <img src={cook} alt="cook" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={home2} alt="food" className="img-fluid" />
                    </div>
                    <div className="my-3">
                        <img src={salmon} alt="salmon" className="img-fluid" />
                    </div>
                    <div className="my-3">
                        <img src={shrimp} alt="shrimp" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={food} alt="food" className="img-fluid" />
                    </div>
                    <div className="my-3">
                        <img src={gourmet} alt="gourmet" className="img-fluid" />
                    </div>
                    <div className="my-3">
                        <img src={meat_balls} alt="meat balls" className="img-fluid" />
                    </div>
                    <div className="my-3">
                        <img src={hawaian} alt="hawaian" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}