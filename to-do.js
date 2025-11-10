let first = document.querySelector('input[type="text"]');
let second = document.querySelector('.addTaskBtn');
let third = document.querySelector('label');
let forth = document.querySelector('.two');
second.addEventListener('click', () => {
    let f1 = document.createElement('div');
    f1.setAttribute('class', 'task');
    forth.prepend(f1);
    if (first.value === '') {
        second.disabled = true;
        f1.remove();
    }
    let f2 = document.createElement('input');
    f2.setAttribute('type', 'checkbox');
    f1.prepend(f2);
    let f3 = document.createElement('label');
    f3.textContent = `${first.value}`;
    f3.classList.add('task', 'label');
    f1.append(f3);
    f3.addEventListener('click', () => {
        f2.checked = true;
    });
    f4 = document.createElement('i');
    f1.append(f4);
    f4.classList.add('fa-solid', 'fa-trash');
    let five = document.querySelector('i');
    five.addEventListener('click', () => {
        f1.remove();
    });
    first.value = '';
});
first.addEventListener('click', () => {
    second.disabled = false;
});

