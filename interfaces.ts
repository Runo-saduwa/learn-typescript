// function showTodo(todo: {title: string, text: string}) {
//     console.log(todo.title + ' ' + todo.text);
// }

// let mytodo = {
//     title: 'read',
//     text: 'read my books'
// }

// showTodo(mytodo)

interface Todo {
    title: string,
    text: string
}

function showTodo(todo: Todo) {
    console.log(todo.title + ' ' + todo.text);
}

let mytodo = {
    title: 'hey',
    text: 'read my books'
}

showTodo(mytodo)