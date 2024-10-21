function Content({ theme }) {
  return (
    <div className="content">
      <h3>Содержимое</h3>
      <p>Это компонент Content, который отображается по умолчанию.</p>
      <style jsx>
        {`
          .content {
            background-color: ${theme === "light" ? "white" : "black"};
            color: ${theme === "light" ? "black" : "white"};
          }
        `}
      </style>
    </div>
  );
}

export default Content;