import React from 'react';

// Define props delivered by parent component
interface IProps {
  label: string; // label string
  type: 'text' | `password`; // type of text box
  value: string; // displayed value
  // provide callback func to get parent prop when decide the value
  onChangeText: (value: string) => void;
}

// Text box w/label
export class TextBox extends React.Component<IProps, {}> {
  public render() {
    const label = (!!this.props.label) ?
      <label>{this.props.label}</label> :
      null;
    return (
      <span>
        {/* {} enable us to write down js code */}
        {label}
      <input name="username" type={this.props.type} value={this.props.value}
        onChange={this.onChangeText} />
      </span>
    );
  }
  // changing value, state.dispatch deliver action to reducer, and update store
  // state changed, prop in component will updte, re-render, change value of txtbox
  private onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChangeText(e.target.value);
  }
}
