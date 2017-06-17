import React, { Component } from 'react';
import classnames from 'classnames';
import { capitalize } from 'lodash';
import './menu.css';

const MenuItem = ({selected, children, clickHandler}) => (
  <div className="menu-item" onClick={clickHandler}>
    <h4>{children}</h4>
    <div className={classnames('selected', {
      show: selected
    })} />
  </div>
)

const categories = [
  'search',
  'featured',
  'sports',
  'news',
  'music',
  'entertainment',
  'lifestyle',
  'more'
]

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'featured'
    }
  }

  handleSelect(selected) {
    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;
    return (
      <div id="menu">
        {categories.map((id) => (
          <MenuItem key={id} selected={id === selected}
            clickHandler={() => this.handleSelect(id)}>
            {capitalize(id)}
          </MenuItem>
        ))}
      </div>
    )
  }
}

export default Menu;
