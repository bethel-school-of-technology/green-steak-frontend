import React, { Component } from 'react';

class Rating extends Component {
    render() {

        return (
            <div className="Star__Rating">
                Rate Steakhouse Price 1-5 Stars:
        <br />
                {/* Star Rating is from https://codepen.io/tammykimkim/pen/yegZRw  
    which was modified from https://github.com/mukulkant/Star-rating-using-pure-css */}
                <div className="rate">
                    <input type="radio" id="star5" name="rateprice" defaultValue={5} />
                    <label htmlFor="star5" title="5 star">5 stars</label>

                    <input type="radio" id="star4" name="rateprice" defaultValue={4} />
                    <label htmlFor="star4" title="4 star">4 stars</label>

                    <input type="radio" id="star3" name="rateprice" defaultValue={3} />
                    <label htmlFor="star3" title="3 star">3 stars</label>

                    <input type="radio" id="star2" name="rateprice" defaultValue={2} />
                    <label htmlFor="star2" title="2 star">2 stars</label>

                    <input type="radio" id="star1" name="rateprice" defaultValue={1} />
                    <label htmlFor="star1" title="1 star">1 star</label>
                </div>
                <br />
                <br />
                <br />
            
                Rate Steakhouse Quality 1-5 Stars:
                <br />
            
                {/* Star Rating is from https://codepen.io/tammykimkim/pen/yegZRw  
    which was modified from https://github.com/mukulkant/Star-rating-using-pure-css */}
                <div className="rate">
                    <input type="radio" id="star10" name="rateQuality" defaultValue={5} />
                    <label htmlFor="star10" title="5 star">5 stars</label>

                    <input type="radio" id="star9" name="rateQuality" defaultValue={4} />
                    <label htmlFor="star9" title="4 star">4 stars</label>

                    <input type="radio" id="star8" name="rateQuality" defaultValue={3} />
                    <label htmlFor="star8" title="3 star">3 stars</label>

                    <input type="radio" id="star7" name="rateQuality" defaultValue={2} />
                    <label htmlFor="star7" title="2 star">2 stars</label>

                    <input type="radio" id="star6" name="rateQuality" defaultValue={1} />
                    <label htmlFor="star6" title="1 star">1 star</label>
                </div>
                <br />
            </div>
        );
    }
};
export default Rating;