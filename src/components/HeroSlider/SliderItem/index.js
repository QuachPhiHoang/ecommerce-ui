import styles from '../HeroSlider.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SliderItem({ data, active }) {
    return (
        <div className={cx(`slider__item${active ? 'active' : ''}`)}>
            <div className={cx('slider-title')}>{data.title}</div>
            <Button outline className={cx('slider-btn')}>
                <span>Shop Now</span>
            </Button>
            <div className={cx('slider__item-img')}>
                <img className={cx('slider-img')} src={data.image} alt="Slider" />
            </div>
        </div>
    );
}

export default SliderItem;
