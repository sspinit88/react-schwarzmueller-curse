const TabButton = (props) => {
  const {
    children
  } = { ...props };

  const onBtnClick = () => {
    console.log('Button clicked');
  }

  return (
    <li>
      <button onClick={onBtnClick}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
