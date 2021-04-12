import React from 'react';
import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <Spinner
            className={styles.spinner}
            type="Oval"
            color="#3f51b5"
            height={50}
            width={50}
        />
    );
};

export default Loader;