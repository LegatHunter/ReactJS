// Создайте маленькое приложение со страницей списка (ListPage) и страницей деталей (DetailPage).
// На ListPage отобразите список элементов (например, статей или продуктов), где каждый элемент является ссылкой на DetailPage, содержащую детальную информацию об элементе. Используйте react-router-dom для настройки маршрутизации.
// На DetailPage используйте useParams для извлечения параметра из URL (например, ID элемента) и отобразите детальную информацию об элементе.

import { Link } from "react-router-dom";



function ListPage({ articles }) {
  return (
    <div>
      <h1>ListPage</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/detail/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
