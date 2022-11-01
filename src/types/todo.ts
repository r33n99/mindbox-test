export interface ITodo {
    id: number;
    description: string;
    status: boolean;
}
export type TodoContextType = {
    todos: ITodo[];
    filteredTodos: ITodo[] | undefined;
    clearCompletedTodos: () => void;
    filterTodos: (type: string) => void;
    saveTodo: (description: string) => void;
    updateTodo: (id: number, status: boolean) => void;
};
