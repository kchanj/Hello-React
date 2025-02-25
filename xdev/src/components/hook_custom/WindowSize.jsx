import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'
import useWindowSize from './useWindowSize';

const WindowSize = () => {

    const windowSize = useWindowSize();

    return (
        <div className={styles.card}>
            <p>Window Size</p>
            <p>({windowSize.width}, {windowSize.height})</p>
        </div>
    )
}

export default WindowSize;