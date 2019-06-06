import {combineReducers, createStore } from 'redux';
import {ITaskList} from './states/ITask';

import { UserReducer } from './reducers/UserReducer';
import IUser from './states/IUser';

/**
 * define store data type (parent state)
 *
 * specify the child_state you controlled as props
 */

export interface IState {
  User: IUser;
  taskList: ITaskList;
  // stateが増えたら足していく
}

// combine several reducers
const combinedReducer = combineReducers<IState>({
  User: UserReducer,
  taskList: ITaskList,
  // reducerが増えたら足していく
});

// create store as global object
export const store = createStore(combinedReducer);

// set as default to be able to access like 'import store from './Store'
export default store;
