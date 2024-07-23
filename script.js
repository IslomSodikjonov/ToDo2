// import { arr } from "./db.js"

let form = document.forms[0]

let table = document.getElementById('data_table')
let modal = document.querySelector('.modal')
let modalClose = document.querySelector('[data-close]')
let addBtn = document.querySelector('.head_btn')
let savedBtn = document.querySelector('#saved_btn')


function convertDateFormat(isoDate) {
    let date = new Date(isoDate)
    let day = date.getDate().toString().padStart(2, '0')
    let month = (date.getMonth() + 1).toString().padStart(2, '0') 
    let year = date.getFullYear().toString().substr(-2)
  
    return `${day}.${month}.${year}`
}

// form.onsubmit = (e) => {
//     e.preventDefault()

//     let name = document.getElementById('name_task').value
//     let decrp = document.getElementById('decrp_task').value
//     let day = document.getElementById('day').value
//     let time = document.getElementById('time').value
//     let status = document.getElementById('status_of_task').value

//     day = convertDateFormat(day)    

//     arr.push({ name, decrp, day, time, status })
//     form.reset()

//     reload(arr)

// }


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => reload(data))
    .catch(error => console.log(error))


function reload(arr) {
    
    for (let item of arr) {
        let newRow = table.insertRow()
        
        newRow.insertCell(0).innerText = 'Переписать проект на Vue 3'
        newRow.insertCell(1).innerText = item.title
        newRow.insertCell(2).innerText = '23.07.24'
        newRow.insertCell(3).innerText = '00:00'
        let statusCell = newRow.insertCell(4)
        statusCell.innerText = item.completed
        if (item.completed === false) {
            statusCell.innerText = 'Не выполнено'
            statusCell.style.color = '#FF3F3F'
        } else  {
            statusCell.innerText = 'Выполнено'
            statusCell.style.color = 'green'
        }

        // newRow.insertCell(4).innerText = item.completed

        // newRow.insertCell(0).innerText = item.name
        // newRow.insertCell(1).innerText = item.decrp
        // newRow.insertCell(2).innerText = item.day
        // newRow.insertCell(3).innerText = item.time
        // let statusCell = newRow.insertCell(4)
        // statusCell.innerText = item.status
        // if (item.status === 'Не выполнено') {
        //     statusCell.style.color = '#FF3F3F'
        // } else if (item.status === 'Готово') {
        //     statusCell.style.color = 'black'
        // } else if (item.status === 'В прогрессе') {
        //     statusCell.style.color = '#007FFF'
        // }
    }
}   

// reload(arr)

addBtn.onclick = () => {
    modal.style.display = 'block'
}

modalClose.onclick = () => {
    modal.style.display = 'none'
}

savedBtn.onclick = () => {
    modal.style.display = 'none'
    reload(arr)
}

let showGrid = document.getElementById('show_grid')

showGrid.onclick = () => {
    window.location.href = "/plitka.html"
}