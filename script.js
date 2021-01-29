
const createItem = (todo, id) => {
    let item = `
    <li
        key="${id}"
        class=${todo.checked ? 'taskItem-done' : 'taskItem'}>
         ${todo.title} ${todo.date ? todo.date  : ' '}
         <img class="btn" src="./check_icon.png" onclick="completeTodo(event)"/>
         <img class="btn" src="./delete_black.png" onclick="deleteTodo(event)"/>

    </li>
    `

    return item

}
const renderTodoItems = () => {
    list.innerHTML = ''
    let items=[]

    todosArray.length

    ? todosArray.map((todo, id) => {
        // list.prepend(createItem(todo, id))
        items.unshift(createItem(todo,id))
        list.innerHTML = items.join('')
    })
    : list.prepend(' Учурда тапшырма жок')
}
renderTodoItems()