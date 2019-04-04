import Redux from 'redux';
import {v4 as UUID} from 'uuid';

// action type for change user name
export const CHANGE_USER_NAME = UUID();

// action for change user name
export interface IChangeUserNameAction extends Redux.Action {
  // name string that you'll change
  name: string;
}

/*
 * action creator for change user name
 * @param name name string tht you'll change
 * @returns action for change user name
 */

export const createChangeUserNameAction: Redux.ActionCreator<IChangeUserNameAction> = (name: string) => {
  return {
    name, // name: name
    type: CHANGE_USER_NAME,
  };
};
