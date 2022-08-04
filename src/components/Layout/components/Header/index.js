import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { useState, useEffect } from 'react';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [search, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                   <img src={images.logo} alt="TikTok"/>
                </div>
                <Tippy 
                    interactive
                    visible={setSearchResult.length > 0}
                        render={attrs => (
                            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
     );
}

export default Header;