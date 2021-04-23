import React, { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderImage = (props) => {
    const [value,setValue] = useState(0);
    console.log("El valor de value es " + value)
    const images = [
        "http://placeimg.com/759/500/people/grayscale",
        "http://placeimg.com/759/500/arch/grayscale",
        "http://placeimg.com/759/500/tech/grayscale",
    ]
    const style = {
        backgroundImage: 'url(' + images.[value] + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    return (
        <div>
            <section style={style} className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1>ONG Team - A free template by Bootstrap Temple</h1><a href="/posts" className="hero-link">Ver posts</a>
                        </div>
                    </div>
                </div>
            </section>
            <Slider
                min={0}
                max={2}
                defaultValue={value}
                onChange={setValue}
                handleStyle={{
                    height: 15,
                    width: 15,
                    paddingTop: 10,
                    paddingLeft: 10,
                    marginLeft: -5,
                    marginTop: -5,
                    backgroundColor: "black",
                    border: 0
                }}
                trackStyle={{
                    background: "gray"
                }}
            />
        </div>
    )
}
export default SliderImage;
