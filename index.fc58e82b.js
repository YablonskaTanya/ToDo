!function(){var t={form:document.querySelector("form"),taskList:document.querySelector(".task-list")};function e(t,e){t.insertAdjacentHTML("beforeend",function(t){return t.map((function(t){return'<li class="tast-list__item">\n  <p class="task-list__text">'.concat(t,'</p>\n  <button class="task-list__delite-btn" type="button">Remove</button>\n</li>\n')})).join("")}(e))}var n="tasks";t.form.addEventListener("submit",(function(a){a.preventDefault();var s=a.target.elements.taskName,r=JSON.parse(localStorage.getItem(n))||[];r.push(s.value),localStorage.setItem(n,JSON.stringify(r)),e(t.taskList,r),a.target.reset()})),t.taskList.addEventListener("click",(function(a){if("BUTTON"===a.target.nodeName){var s=JSON.parse(localStorage.getItem(n))||[],r=a.target.previousElementSibling.textContent;console.log(r);var o=s.filter((function(t){return t!==r}));console.log(o),localStorage.setItem(n,JSON.stringify(o)),t.taskList.innerHTML="",e(t.taskList,o)}})),e(t.taskList,JSON.parse(localStorage.getItem(n))||[])}();
//# sourceMappingURL=index.fc58e82b.js.map