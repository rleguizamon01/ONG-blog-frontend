import React, {useState} from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const SliderImage = () => {
    const images = [
        { url: "http://placeimg.com/759/500/people/grayscale" },
        { url:  "http://placeimg.com/759/500/arch/grayscale" },
        { url: "http://placeimg.com/759/500/tech/grayscale" },
    ];

  return (
          <section className={'hero'}>
          <SimpleImageSlider
              style={{ margin: '0 auto', marginTop: '15px', marginBottom: '15px', flex: 1 }}
              width={1200}
              height={600}
              images={images}
              showNavs={true}
              showBullets={true}
          >
          </SimpleImageSlider>
          </section>
  )
}
export default SliderImage;
