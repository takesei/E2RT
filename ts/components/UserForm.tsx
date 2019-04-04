import React from 'react';
import IUser from '../states/IUser';
import { TextBox } from './TextBox';

// ユーザー名を入力して表示する

class UserForm extends React.Component<IUser, {}> {
  public render() {
    return (
      <div>
        <p>
          <TextBox label="user name" type="text" value={this.props.name}
            onChangeText={this.onChangeText} />
        </p>
        <p> name: {this.props.name} </p>
      </div>
    );
  }

  private onChangeText = (value: string) => {
    // will write after creating action/store
  }
}
