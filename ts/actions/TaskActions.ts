import { Action } from 'redux';
import { v4 as UUID } from 'uuid';
import { ITask } from '../states/ITask';

/**
 * action t& action_type that shows whole task list
 */
export const SHOW_TASKS = UUID();

export interface IShowTaskAction extends Action {
  tasks: ITask[];
}

/**
 * action & action_type that add task
 */
export const ADD_TASK = UUID();

export interface IAddTaskAction extends Action {
  deadline: Date;
  taskName: string;
}

/**
 * action & action_type that complete task
 */
export const TOGGLE_COMPLETE_TASK = UUID();

export interface IToggleCompleteAction extends Action {
  taskId: string;
}

/**
 * action & action_type that delete task
 */
export const DELETE_TASK = UUID();

export interface IDeleteAction extends Action {
  taskId: string;
}
