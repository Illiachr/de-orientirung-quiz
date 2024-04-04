import Container from '../Container/Container.jsx';
import cls from './Header.module.css';

export default function Header({title, subtitle}) {
  return (
    <div className={cls.header}>
      <Container>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </Container>
    </div>
  );
}
