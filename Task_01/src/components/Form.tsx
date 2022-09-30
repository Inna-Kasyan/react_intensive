import { Component, FormEvent, FormEventHandler } from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import styles from './Styles.module.css'

interface FormState {
  name: string;
  lastName: string;
  about: string;
  dob: string;
  phone: string;
  website: string;
  techstack: string;
  lastProject: string;


}

const defaultState = {
  name: '',
  lastName: '',
  about: '',
  dob: '',
  phone: '',
  website: '',
  techstack: '',
  lastProject: '',
}

export class Form extends Component<{}, FormState> {
  state = { ...defaultState };

  handleChange = (key: string) => (value: string) => {
    this.setState((prev) => {
      return {
        ...prev,
        [key]: value
      }
    });
  }

  submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  }

  clear = () => {
    this.setState({ ...defaultState });
  }

  render() {
    const { name, lastName, about, dob, phone, website, techstack, lastProject } = this.state;
    return <form onSubmit={this.submit}>
      <h1>Создание анкеты</h1>
      <Input onChange={this.handleChange('name')} value={name} placeholder={'Введите имя'} label={'Имя'} />
      <Input onChange={this.handleChange('lastName')} value={lastName} placeholder={'Введите фамилию'}
        label={'Фамилия'} />
      <Input type={'date'} onChange={this.handleChange('dob')} value={dob} placeholder={'Выберете дату'}
        label={'День рождения'} />
      <Input type={'tel'} onChange={this.handleChange('phone')} value={phone} placeholder={'Введите номер телефона'}
        label={'Номер телефона'} />
      <Input onChange={this.handleChange('website')} value={website} placeholder={'Введите сайт'}
        label={'Сайт'} />
      <TextArea label={'Стек технологий'} onChange={this.handleChange('techstack')} value={techstack} placeholder={'Перечислите технологии'}
        rows={5} />
      <TextArea label={'О себе'} onChange={this.handleChange('about')} value={about} placeholder={'Напишите о себе'}
        rows={7} />
      <TextArea label={'Описание последнего проекта'} onChange={this.handleChange('lastProject')} value={lastProject} placeholder={'Опишите последний проект'}
        rows={10} />
      <div>
        <button className={styles.buttons} type="submit">Сохранить</button>
        <button className={styles.buttons}
          onClick={this.clear} type="button">Очистить</button>
      </div>
    </form>;
  }
}
