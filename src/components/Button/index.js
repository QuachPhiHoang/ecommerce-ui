import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

function Button({ to, href, disable, primary, text, children, outline, className, onClick, ...passProps }) {
    const cx = classNames.bind(styles);
    let Components = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Components = Link;
    } else if (href) {
        props.href = href;
        Components = 'a';
    }

    const classes = cx('wrapper', { primary, [className]: className, outline, disable, text });

    return (
        <Components className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Components>
    );
}

export default Button;
