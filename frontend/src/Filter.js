import React, { Component } from "react";
import PropTypes from "prop-types";

export class Filter extends Component {
  render() {
    return (
      <div>
        <div className="row ">{this.props.count}</div>
        <div className="row ">
          <label>
            Сортировать
            <select
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleChangeSort}
            >
              <option value="">Без сортировки</option>
              <option value="lowest">По возрастанию</option>
              <option value="highest">По убыванию</option>
            </select>
          </label>
        </div>
        <div className="row">
          <label>
            Фильтр Техники
            <select
              className="form-control"
              value={this.props.type}
              onChange={this.props.handleChangeType}
            >
              <option value="">Вся техника</option>
              <option value="Moto">Мотоциклы</option>
              <option value="Futo">Автомобили</option>
              <option value="boats">Катера</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  handleChangeSort: PropTypes.func.isRequired,
  handleChangeType: PropTypes.func.isRequired,
};

export default Filter;
