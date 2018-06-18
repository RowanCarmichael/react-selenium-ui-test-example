import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';
import styles from './LoadingBar.css';

const LoadingBar = ({ label, ...props }) => (
  <div className={styles.loadingContainer} {...props}>
    <ProgressBar className={styles.loadingBar} mode="indeterminate" />
    <span className={styles.loadingText}>{label}</span>
  </div>
);

LoadingBar.propTypes = {
  label: PropTypes.string.isRequired,
};

LoadingBar.defaultProps = {
  label: 'Loading...',
};

export default LoadingBar;
