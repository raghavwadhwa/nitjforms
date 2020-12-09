import React, { Component } from "react";
import PropTypes from "prop-types";

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
    userInput1: "",
  };

  onChange = (e) => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;
    console.log(userInput);
    var lastChar = userInput[userInput.length - 1];

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(lastChar.toLowerCase()) > -1
    );
    if (lastChar === "#") {
      this.setState({
        showOptions: true,
        activeOption: 0,
        filteredOptions,
        userInput1: e.currentTarget.value,
      });
    } else {
      this.setState({
        activeOption: 0,
        filteredOptions,
        userInput: e.currentTarget.value,
      });
    }
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: this.state.userInput1 + e.currentTarget.innerText,
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = "option-active";
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            // onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
