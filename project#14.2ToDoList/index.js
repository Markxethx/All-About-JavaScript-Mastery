window.addEventListener('load', ()=> {
    const form = document.querySelector('#new-task-form');
    const newTaskInput = document.querySelector('#new-task-input');
    const listEl = document.querySelector('#tasks')

    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        task = newTaskInput.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = "Delete";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);
        listEl.appendChild(task_el);

        newTaskInput.value = " ";

        task_edit_el.addEventListener('click', ()=> {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute('readonly');
                task_edit_el.focus();
            }
            else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute('readonly', 'readonly');
            }
        })

        task_delete_el.addEventListener('click', ()=> {
            listEl.removeChild(task_el);
        });
    });
});