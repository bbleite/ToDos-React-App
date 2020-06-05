//Not working yet

//Add todo to list
export const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
};

//Mark todo completed
export const completeTodo = function(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
};

//Remove todo from list
export const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
};