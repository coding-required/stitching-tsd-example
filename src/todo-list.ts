import {Todo} from "./components/todo";

export class TodoList {
    private todos: Todo[];

    constructor() {
        this.todos = [];
    }

    add(todo: Todo) {
        this.todos.push(todo);
    }
}