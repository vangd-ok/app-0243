import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const Profile = () => {
  return <h3>Страница с профилем</h3>;
};
const Friends = () => {
  return <h3>Страница друзей</h3>;
};

function App() {
  return (
    <div className="container-fluid pl-5 pr-5 mt-5">
    <div className="row">
      <div className="col-sm-4">
        <div className="nav flex-column nav-pills">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
          <NavLink to="profile" className="nav-link">
            Профиль
          </NavLink>
          <NavLink to="friends" className="nav-link">
            Друзья
          </NavLink>
          <NavLink to="shop" className="nav-link">
            Магазин
          </NavLink>
          <NavLink to="settings" className="nav-link">
            Настройки
          </NavLink>
        </div>
      </div>
      <div className="col-sm-8">
        <Routes>
          <Route path="/" element={<h2>Главная страница, выберите из меню слева</h2>}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/friends" element={<Friends />}/>
        </Routes>
      </div>
    </div>
  </div>
  )
}

export default App
