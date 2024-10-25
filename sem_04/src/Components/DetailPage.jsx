// Создайте маленькое приложение со страницей списка (ListPage) и страницей деталей (DetailPage).
// На ListPage отобразите список элементов (например, статей или продуктов), где каждый элемент является ссылкой на DetailPage, содержащую детальную информацию об элементе. Используйте react-router-dom для настройки маршрутизации.
// На DetailPage используйте useParams для извлечения параметра из URL (например, ID элемента) и отобразите детальную информацию об элементе.
import { useParams } from "react-router-dom";

function DetailPage({ articles }) {
  const { id } = useParams();
  const article = articles.find((article) => article.id === Number(id));
  if (!article) {
    return <h1>Article not found</h1>;
  }
  return (
    <>
      <h1>DetailPage</h1>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </>
  );
}

export default DetailPage;
