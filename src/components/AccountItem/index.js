import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ce2c33502bf2050893d828707b776e79~c5_100x100.jpeg?x-expires=1659780000&x-signature=9NHiJc4PPxrMb2JUkxYBZoymq5A%3D" alt="Nghia" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen trong Nghia</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>trongnghia256</span>
            </div>
        </div>
     );
}

export default AccountItem;