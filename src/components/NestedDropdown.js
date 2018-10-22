import React, {Component} from 'react';
import DropdownMenu, { NestedDropdownMenu } from 'react-dd-menu';



export default class NestedDropdown extends Component {

  state = { isMenuOpen: false };

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close = () => {
    this.setState({ isMenuOpen: false });
  };

  click = () => {
    console.log('You clicked an item');
  };

  render() {
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: <button type="button" onClick={this.toggle}>Click me!</button>,
      align: 'right',
    };

    const nestedProps = {
      toggle: <a href="woopee.com">Hover me for Nested Menu!</a>,
      animate: true,
    };

    return (
      <DropdownMenu {...menuOptions}>
        <li><a href="facebook.com">Example 1</a></li>
        <li><button type="button" onClick={this.click}>Example 2</button></li>
        <li role="separator" className="separator" />
        <NestedDropdownMenu {...nestedProps}>
          <li><a href="google.com">I am in a Nested Menu!</a></li>
        </NestedDropdownMenu>
      </DropdownMenu>
    );
  }

}