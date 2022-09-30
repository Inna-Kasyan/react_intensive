import { Component, ReactNode } from 'react';
import styles from './Styles.module.css';

export interface BaseProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export class Base extends Component<BaseProps> {
  render() {
    const { label, children, className = '' } = this.props;
    return (
      <div className={[styles.test,  className].join(" ")}>
        <div className={styles.labels}>{label}</div>
        <div >{children}</div>
      </div>
    );
  }
}
