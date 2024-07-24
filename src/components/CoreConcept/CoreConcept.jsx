import styles from './CoreConcept.css';

const CoreConcept = (props) => {
  const { title, description, imgSrc } = { ...props };

  return (
    <li className="{styles}">
      <img src={imgSrc}
           alt="{title}"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
