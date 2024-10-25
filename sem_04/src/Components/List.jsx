function List({ listItems, renderItem }) {
  return (
    <ul>
      {listItems.map((item, i) => (
        <li key={i}>{renderItem(item, i)}</li>
      ))}
    </ul>
  );
}

export default List;
