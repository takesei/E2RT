import { v4 as UUID } from 'uuid';

/**
 * task interface
 */

export interface ITask {
  // complete flag
  complete: boolean;
  // deadline
  deadline: Date;
  // IDentifire
  id: string;
  // name
  taskName: string;
}

/**
 * list of Task
 */

export interface ITaskList {
  /** list of task */
  tasks: ITask[];
}

/**
 * init value of tasklist
 */
export const initTaskList: ITaskList = {
  tasks: [],
};

export const createTask = (taskName: string, deadline: Date): ITask => {
  return {
    complete: false,
    deadline,
    id: UUID(),
    taskName,
  };
};
