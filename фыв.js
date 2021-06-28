<Container className="py-5">
        <Row>
          <Col xs={3}>
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
                Корзина
              </a>
            </ul>
          </Col>
          <Col xs={9}></Col>
        </Row>
      </Container>
   






    <DropdownButton id="dropdown-basic-button" title="      МЕНЮ    ">
  <Dropdown.Item href="/Main" class="list-group-item">    ГЛАВНАЯ    </Dropdown.Item>
  <Dropdown.Item href="/Catalog" class="list-group-item">    АВТОМОБИЛИ    </Dropdown.Item>
  <Dropdown.Item href="/Contacts" class="list-group-item">    КОНТАКТЫ    </Dropdown.Item>
  <Dropdown.Item href="/Basket" class="list-group-item">    Корзина    </Dropdown.Item>
</DropdownButton>