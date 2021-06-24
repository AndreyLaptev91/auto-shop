import React from "react";

function Header() {
  return (
    <header className="text-white bg-dark py-3">
      <div className="container d-flex justify-content-between">
        <a href="#" className="logo">
          Logo
        </a>
        <nav>
          <a href="#" className="mr-4">
            Главная
          </a>
          <a href="#" className="mr-4">
            Корзина
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
