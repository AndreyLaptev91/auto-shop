import React from "react";

function Navbar(props) {
  const { countCartItems } = props;
  return (
    <ul class="list-group list-group-flush">
      <a href="/Main" class="list-group-item">
        Главная
      </a>
      <a href="/Catalog" class="list-group-item">
        Автомобили
      </a>
      <a href="/Contacts" class="list-group-item">
        Контакты
      </a>
      <a href="/Basket" class="list-group-item">
        Корзина {""}
        {countCartItems ? (
          <button className="badge">{countCartItems}</button>
        ) : (
          ""
        )}
        ;
      </a>
    </ul>
  );
}

export default Navbar;
