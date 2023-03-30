import { refs } from './refs';
import { renderTaskItem } from './renderFunction';
export const STORAGE_KEY = 'tasks';

export function onFormSubmit(e) {
  e.preventDefault();

  const { taskName } = e.target.elements;
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  tasks.push(taskName.value);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

  renderTaskItem(refs.taskList, tasks);
  e.target.reset();
}

export function onDeleteTaskBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const taskToRemove = e.target.previousElementSibling.textContent;
  console.log(taskToRemove);

  const filterTasks = tasks.filter(task => task !== taskToRemove);
  console.log(filterTasks);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filterTasks));
  refs.taskList.innerHTML = '';
  renderTaskItem(refs.taskList, filterTasks);
}
