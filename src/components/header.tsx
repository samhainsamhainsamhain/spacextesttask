import Logo from '../assets/logo.png';

function Header() {
  return (
    <div className="headerContainer">
      <header className="header">
        <div className="logoWrap">
          <div className="logoCornersSide">
            <div className="corner cornerTop cornerLeft"></div>
            <div className="corner cornerBottom cornerLeft"></div>
          </div>
          <img className="logo" src={Logo} alt="SpaceX Logo" />
          <div className="logoCornersSide">
            <div className="corner cornerTop cornerRight"></div>
            <div className="corner cornerBottom cornerRight"></div>
          </div>
        </div>
        <nav className="navbar">
          <ul className="list">
            <li className="listItem">Главная</li>
            <li className="listItem">Технология</li>
            <li className="listItem">График полетов</li>
            <li className="listItem">Гарантии</li>
            <li className="listItem">O компании</li>
            <li className="listItem">Контакты</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
