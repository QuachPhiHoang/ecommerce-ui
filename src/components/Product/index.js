import images from '~/assets/image';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('product-info')}>
                    <h1 className={cx('product-info__title')}>Discover NEW Arrivals</h1>
                    <h3 className={cx('product-info__description')}>Recently added shirts!</h3>
                </div>
                <div className={cx('product-list')}>
                    <div className={cx('product-item')}>
                        <div className={cx('product-item__img')}>
                            <img srcset={`${images.product} 2x`} alt="" />
                        </div>
                        <div className={cx('product-item__title')}>Plain White Shirt</div>
                        <div className={cx('product-item__price')}>$29.00</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-item__img')}>
                            <img srcset={`${images.product} 2x`} alt="" />
                        </div>
                        <div className={cx('product-item__title')}>Plain White Shirt</div>
                        <div className={cx('product-item__price')}>$29.00</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-item__img')}>
                            <img srcset={`${images.product} 2x`} alt="" />
                        </div>
                        <div className={cx('product-item__title')}>Plain White Shirt</div>
                        <div className={cx('product-item__price')}>$29.00</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-item__img')}>
                            <img srcset={`${images.product} 2x`} alt="" />
                        </div>
                        <div className={cx('product-item__title')}>Plain White Shirt</div>
                        <div className={cx('product-item__price')}>$29.00</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-item__img')}>
                            <img srcset={`${images.product} 2x`} alt="" />
                        </div>
                        <div className={cx('product-item__title')}>Plain White Shirt</div>
                        <div className={cx('product-item__price')}>$29.00</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-item__img')}>
                            <img srcset={`${images.product} 2x`} alt="" />
                        </div>
                        <div className={cx('product-item__title')}>Plain White Shirt</div>
                        <div className={cx('product-item__price')}>$29.00</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-item__img')}>
                            <img srcset={`${images.product} 2x`} alt="" />
                        </div>
                        <div className={cx('product-item__title')}>Plain White Shirt</div>
                        <div className={cx('product-item__price')}>$29.00</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-item__img')}>
                            <img srcset={`${images.product} 2x`} alt="" />
                        </div>
                        <div className={cx('product-item__title')}>Plain White Shirt</div>
                        <div className={cx('product-item__price')}>$29.00</div>
                    </div>
                </div>
                <div className={cx('product-benefit')}>
                    <div className={cx('product-benefit__list')}>
                        <div className={cx('benefit-info')}>
                            <div className={cx('ship-icon')}>
                                <img src={images.ship} alt="" />
                            </div>
                            <div className={cx('benefit-intro')}>
                                <h2 className={cx('benefit-title')}>Free Shipping</h2>
                                <h3 className={cx('benefit-description')}>
                                    Enjoy free shipping on all orders above $100
                                </h3>
                            </div>
                        </div>
                        <div className={cx('benefit-info')}>
                            <div className={cx('ship-icon')}>
                                <img src={images.support} alt="" />
                            </div>
                            <div className={cx('benefit-intro')}>
                                <h2 className={cx('benefit-title')}>Support 24/7</h2>
                                <h3 className={cx('benefit-description')}>
                                    Our support team is there to help you for queries
                                </h3>
                            </div>
                        </div>
                        <div className={cx('benefit-info')}>
                            <div className={cx('ship-icon')}>
                                <img src={images.return} alt="" />
                            </div>
                            <div className={cx('benefit-intro')}>
                                <h2 className={cx('benefit-title')}>30 days return</h2>
                                <h3 className={cx('benefit-description')}>
                                    Simply return it within 30 days for an exchange.
                                </h3>
                            </div>
                        </div>
                        <div className={cx('benefit-info')}>
                            <div className={cx('ship-icon')}>
                                <img src={images.pay} alt="" />
                            </div>
                            <div className={cx('benefit-intro')}>
                                <h2 className={cx('benefit-title')}>100% PAYMENT SECURE</h2>
                                <h3 className={cx('benefit-description')}>
                                    Our payments are secured with 256 bit encryption
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
