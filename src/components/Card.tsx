import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType } from '../types/todo';
import { TodoItem } from './TodoItem';

export const Card: React.FC = () => {
    const { saveTodo, filteredTodos, filterTodos, clearCompletedTodos } = React.useContext(
        TodoContext,
    ) as TodoContextType;
    const [todoTitle, setTodoTitle] = React.useState('');
    const [typeFilter, setTypeFilter] = React.useState('all');
    const handleChangeTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoTitle(event.target.value);
    };

    const addTodo = (event: any) => {
        if (event.key === 'Enter' && todoTitle) {
            saveTodo(todoTitle);
            setTodoTitle('');
        }
    };

    React.useEffect(() => {
        filterTodos(typeFilter);
    }, [typeFilter, filterTodos]);

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                width={500}
                sx={{
                    position: 'relative',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    maxHeight: '100%',
                    minHeight: '500px',
                }}
            >
                <TextField
                    data-testid="input"
                    value={todoTitle}
                    onKeyPress={addTodo}
                    onChange={handleChangeTodoTitle}
                    sx={{ width: '100%' }}
                    label="Создать новую задачу"
                    type="text"
                />
                <Box sx={{ marginBottom: '30px' }}>
                    {filteredTodos?.length ? (
                        filteredTodos?.map((el) => <TodoItem key={el.id} {...el} />)
                    ) : (
                        <Box
                            sx={{
                                textAlign: 'center',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '25px',
                            }}
                            component="p"
                        >
                            Задачи отсутсвуют
                        </Box>
                    )}
                </Box>
                <Box className="btn-group" sx={{ position: 'absolute', left: '0', bottom: '0' }}>
                    <Button onClick={() => setTypeFilter('all')}>Все</Button>
                    <Button onClick={() => setTypeFilter('active')}>Активные</Button>
                    <Button onClick={() => setTypeFilter('completed')}>Выполненные</Button>
                    <Button onClick={clearCompletedTodos}>Очистить выполненные</Button>
                </Box>
            </Box>
        </Container>
    );
};
