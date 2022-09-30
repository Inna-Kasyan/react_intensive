import { ChangeEvent, PureComponent } from 'react';
import { Base } from './Base';
import styles from './Styles.module.css'

interface InputProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  type?: 'text' | 'date' | 'tel';
  className?: string;

}

export class Input extends PureComponent<InputProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const { value, placeholder, label, type = 'text', className } = this.props;
    return (
      <Base label={label} className={className}>
        <input className={styles.inputs} type={type} value={value} placeholder={placeholder} onChange={this.handleChange}/>
      </Base>
    );
  }
}
