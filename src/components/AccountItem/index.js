import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://yt3.ggpht.com/gNvHxsiAJ4s8wcqasXz9qBQiglLauYy2TPHvLPcONclCQCegID5AEYCkOop94r2VqXtdj-fGuQ=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="Nghia"
            />
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
