import styles from './HeroSlider.module.scss';
import classNames from 'classnames/bind';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import sliderItem from '~/fake-data';
import SliderItem from '../HeroSlider/SliderItem';

// import Slider from './Slider/Slider';
import { useState } from 'react';

const cx = classNames.bind(styles);

const data = sliderItem;

function HeroSlider() {
    // const [slideIndex, setSlideIndex] = useState(0);
    const [activeSlider, setActiveSlider] = useState(0);

    const handleNext = () => {
        const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1;
        setActiveSlider(index);
    };

    const handlePreview = () => {
        const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1;
        setActiveSlider(index);
        console.log(index);
    };

    return (
        <div className={cx('wrapper')}>
            <ChevronLeft className={cx('left-icon')} onClick={handlePreview} />
            <div className={cx('slider')}>
                {data.map((item, index) => (
                    <SliderItem key={index} data={item} active={index === activeSlider} />
                ))}
            </div>
            <ChevronRight className={cx('right-icon')} onClick={handleNext} />
        </div>
    );
}

export default HeroSlider;
