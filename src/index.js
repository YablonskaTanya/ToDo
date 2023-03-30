import { onDeleteTaskBtnClick, onFormSubmit, STORAGE_KEY } from './js/handlers';
import { refs } from './js/refs';
import { renderTaskItem } from './js/renderFunction';

refs.form.addEventListener('submit', onFormSubmit);
refs.taskList.addEventListener('click', onDeleteTaskBtnClick);

renderTaskItem(
  refs.taskList,
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
);
