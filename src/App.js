import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
// import dummy from "../../db/mockAttraction.json";
import dummy from "../src/db/mockAttraction.json";
import { useState } from "react";
import { Detail } from "./components/detail/Detail";
import { Like } from "./components/like/Like";

function App() {

  const [data, setData] = useState(dummy);
  const [dataForSearching, setDataForSearching] = useState(dummy)
  const [like, setLike] = useState([]);
  const [selectPage, setSelectPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  return (
    <BrowserRouter>
      <TopNavigationBar
          data={data}
          setData={setData}
          like={like}
          setSelectPage={setSelectPage}
          dataForSearching={dataForSearching}/>
      <Routes>
        <Route path="/" element={<Home
          items={data}
          setData={setData}
          selectPage={selectPage}
          postsPerPage={postsPerPage}
          setSelectPage={setSelectPage}
          dataForSearching={dataForSearching}
        />} />
        <Route path="/detail/:id" element={<Detail items={data} like={like} setLike={setLike} />} />
        <Route path="/Like" element={<Like like={like} setLike={setLike} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
