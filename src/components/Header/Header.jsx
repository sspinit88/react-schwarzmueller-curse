import reactImg from '../../assets/react-core-concepts.png';
import { reactDescriptions } from '../../constants/react-description.constant';
import { genRandomInt } from '../../helpers/get-random';
import styles from './Header.css';

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header className={styles}>
      <img src={reactImg}
           alt="Stylized atom"/>
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
                      going to build!
      </p>
    </header>
  );
}

export default Header;
