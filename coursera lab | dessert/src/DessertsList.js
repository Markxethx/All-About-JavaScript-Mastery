function DessertsList(props) {
  // Implement the component here.
  const info = props.data
  info.filter((dessert) => {
    return dessert.calories < 500;
  })
  .sort((x, y) => {
    return x.calories - y.calories;
  })
  .map((dessert) => {
    return (
      <li>{dessert.name} - {dessert.calories}</li>
    )
  });

  return (
    <ul>{info}</ul>
  )
}

export default DessertsList;

