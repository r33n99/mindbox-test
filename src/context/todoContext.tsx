import * as React from 'react';
import { TodoContextType, ITodo } from '../types/todo';
interface childrenType {
    children: React.ReactNode;
}
export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<childrenType> = ({ children }) => {
    const [todos, setTodos] = React.useState<ITodo[]>([
        {
            id: 1,
            description: 'Тестовое задание',
            status: false,
        },
        {
            id: 2,
            description: 'Прекрасный код',
            status: true,
        },
        {
            id: 3,
            description: 'покрытие тестами',
            status: false,
        },
    ]);
    const [filteredTodos, setFilteredTodos] = React.useState<ITodo[] | undefined>([]);

    const filterTodos = React.useCallback(
        (type: string) => {
            if (type === 'all') {
                setFilteredTodos(todos);
            } else if (type === 'active') {
                setFilteredTodos(todos.filter((el) => !el.status));
            } else if (type === 'completed') {
                setFilteredTodos(todos.filter((el) => el.status));
            } else {
                return todos;
            }
        },
        [todos],
    );

    const clearCompletedTodos = () => {
        setTodos(todos?.filter((el) => !el.status));
    };

    const saveTodo = (description: string) => {
        const newTodo: ITodo = {
            id: Math.random(),
            description: description,
            status: false,
        };
        setTodos([...todos, newTodo]);
    };
    const updateTodo = (id: number, status: boolean) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                todo.status = status;
                setTodos([...todos]);
            }
        });
    };
    return (
        <TodoContext.Provider value={{ todos, saveTodo, updateTodo, filterTodos, filteredTodos, clearCompletedTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
