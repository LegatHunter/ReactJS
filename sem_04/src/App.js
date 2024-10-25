import "./App.css";
import Box from "./Components/Box";
import List from "./Components/List";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import ListPage from "./Components/ListPage";

function App() {
  const liEl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const articles = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Description 4",
    },
    {
      id: 5,
      title: "Title 5",
      description: "Description 5",
    },
  ];
  const renderItem = (item, i) => {
    const style = { color: i % 2 === 0 ? "red" : "green" };
    return <div style={style}>{item}</div>;
  };
  return (
    <div className="App">
      <Router>
        <Box> {<p>asd</p>} </Box>
        <List listItems={liEl} renderItem={renderItem} />
        <h1>Просмотр списка</h1>
        <Routes>
          <Route path="/detail/:id" element={<DetailPage articles={articles} />} />
          <Route path='*' element={<ListPage  articles={articles}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
