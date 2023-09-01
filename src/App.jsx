// App.jsx

// 🔽 追加（App.jsx 内で使用するためにコンポーネントを呼び出す）
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { Helthcheck } from "./pages/helthcheck";
import { Registration } from "./pages/registration";

const App = () => {
  return (
    <BrowserRouter>
      <h1>キャリアNavi</h1>
      {/* 🔽 追加 */}
      <ul>
        <li>
          <Link to="/helthcheck">キャリアの命名診断</Link>
        </li>
        <li>
          <Link to="/registration">無料会員登録</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/helthcheck" element={<Helthcheck />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;