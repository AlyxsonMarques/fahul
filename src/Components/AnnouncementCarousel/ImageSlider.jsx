/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ImageSliderStyle from './ImageSlider.module.css';
import { useRef, useState, useEffect } from 'react';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    let timerRef = useRef(null);
    if(timerRef.current) {
        clearTimeout(timerRef.current)
    }
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            handleRightArrowClick();
        }, 3000)
    })

    function handleLeftArrowClick() {
        let newSlideIndex = 0;
        if(currentIndex - 1 < 0) newSlideIndex = slides.length - 1;
        else {
            newSlideIndex = currentIndex - 1;
        }
        slides[currentIndex].isActive = false;
        slides[newSlideIndex].isActive = true;
        setCurrentIndex(newSlideIndex);
    }

    function handleRightArrowClick() {
        let newSlideIndex = 0;
        if(currentIndex + 1 > slides.length - 1) newSlideIndex = 0;
        else {
            newSlideIndex = currentIndex + 1;
        }
        slides[currentIndex].isActive = false;
        slides[newSlideIndex].isActive = true;
        setCurrentIndex(newSlideIndex);
    }

    return (
        <div className={ImageSliderStyle.imageSlider}>
            <div className={ImageSliderStyle.leftArrow} onClick={handleLeftArrowClick}>&lt;</div>
            <div className={ImageSliderStyle.rightArrow} onClick={handleRightArrowClick}>&gt;</div>

            <div className={ImageSliderStyle.image} style={{backgroundImage: `url(${
                slides[currentIndex].src
            })`}}></div>

            <div className={ImageSliderStyle.bullets}>
                {slides.map((slide, slideIndex) => (
                    <div className={[ImageSliderStyle.bullet, slide.isActive ? ImageSliderStyle.isActive : ''].join(' ')}
                    key={slideIndex}
                    onClick={() => {
                        setCurrentIndex(slideIndex);
                        slides[currentIndex].isActive = false;
                        slides[slideIndex].isActive = true;
                    }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
