function createTaskItems(tasks) {
  return tasks
    .map(
      task => `<li class="tast-list__item">
  <p class="task-list__text">${task}</p>
  <button class="task-list__delite-btn" type="button">Remove</button>
</li>
`
    )
    .join('');
}

export function renderTaskItem(selector, tasks) {
  selector.insertAdjacentHTML('beforeend', createTaskItems(tasks));
}
