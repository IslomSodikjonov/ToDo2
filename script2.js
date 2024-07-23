fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => reload2(data))
    .catch(error => console.log(error))

let main = document.querySelector('main')

function reload2(arr) {
    
    for (let item of arr) {
        let todoBox = document.createElement('div')
        todoBox.classList = 'todo_box'

        let taskName = document.createElement('h3')
        taskName.classList = 'task_title'
        taskName.textContent = 'Переписать проект на Vue 3'

        let taskDescr = document.createElement('p')
        taskDescr.classList = 'task_description'
        taskDescr.textContent = item.title

        let bottomBox = document.createElement('div')
        bottomBox.classList = 'box_bottom'

        let date = document.createElement('p')
        date.classList = 'day'
        date.textContent = "23.07.24"

        let time = document.createElement('p')
        time.classList = 'time'
        time.textContent = "00:00"

        let status = document.createElement('p')
        status.textContent = item.completed
        if (item.completed === false) {
            status.innerText = 'Не выполнено'
            status.style.color = '#FF3F3F'
        } else  {
            status.innerText = 'Выполнено'
            status.style.color = 'green'
        }

        main.append(todoBox)
        todoBox.append(taskName, taskDescr, bottomBox, status)
        bottomBox.append(date, time)

    }
}

let show_row = document.getElementById('show_table')

show_row.onclick = () => {
    window.location.href = "/index.html"
}