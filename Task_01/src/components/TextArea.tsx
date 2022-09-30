import { ChangeEvent, PureComponent } from 'react';
import { Base } from './Base';
import styles from './Styles.module.css'

interface TextAreaProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  rows: number;
}

export class TextArea extends PureComponent<TextAreaProps> {
  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const { value, placeholder, label, rows } = this.props;
    return (
      <Base label={label}>
        <textarea className={styles.inputs} value={value} rows={rows} placeholder={placeholder} onChange={this.handleChange}/>
      </Base>
    );
  }
}
