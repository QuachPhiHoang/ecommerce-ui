import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import images from '~/assets/image';
import { useState } from 'react';
import { PersonOutline, Search, ShoppingCartCheckout } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const navbarItems = [
    { title: 'HOME', path: '/' },
    { title: 'PAGES', path: '/page' },
    { title: 'CATEGORIES', path: '/categories' },
    { title: 'SHOP', path: '/shop' },
    { title: 'CONTACT', path: '/contact' },
];

function Header() {
    const cx = classNames.bind(styles);
    const [active, setActive] = useState(0);
    const handleActive = (index) => {
        setActive(index);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('top-header')}>
                <div className={cx('top-content')}>
                    <span>FREE SHIP & RETURNS ON ALL US ORDER</span>
                </div>
                <div className={cx('menu-top')}>
                    <div className={cx('menu-top__items')}>
                        <span>Support</span>
                    </div>
                    <div className={cx('menu-top__items')}>
                        <span>Blog</span>
                    </div>
                    <div className={cx('menu-top__items')}>
                        <span>Languages</span>
                    </div>
                    <img src={images.arrow} alt="arrow" />
                </div>
            </div>
            <div className={cx('nav-header')}>
                <div className={cx('container')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                    </div>
                    <div className={cx('nav-list')}>
                        {navbarItems.map((item, index) => {
                            return (
                                <div key={index} className={cx('nav-item')}>
                                    <Button
                                        text
                                        href={item.path}
                                        onClick={() => handleActive(index)}
                                        className={cx(`${index === active ? 'active' : ''}`)}
                                    >
                                        {item.title}
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('nav-icon')}>
                    <div className={cx('search')}>
                        <input placeholder="Search product" />
                        <button className={cx('action-btn')}>
                            <Search className={cx('search-icon')} />
                        </button>
                    </div>

                    <button className={cx('action-btn')}>
                        <PersonOutline className={cx('user-icon')} />
                    </button>
                    <button className={cx('action-btn')}>
                        <div className={cx('cart')}>
                            <ShoppingCartCheckout className={cx('cart-icon')} />
                            <span className={cx('info-cart')}>5</span>
                        </div>
                    </button>
                    <button className={cx('action-btn')}>
                        <MenuIcon className={cx('menu-icon')} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
