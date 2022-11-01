import { Box, Checkbox } from '@mui/material';
import React from 'react';
import { TodoContext } from '../context/todoContext';
import { ITodo, TodoContextType } from '../types/todo';

export const TodoItem: React.FC<ITodo> = ({ id, description, status }) => {
    const { updateTodo } = React.useContext(TodoContext) as TodoContextType;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateTodo(id, event.target.checked);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={status} onChange={handleChange} color="success" />
            <Box className={status ? 'completed' : ''} component="p">
                {description}
            </Box>
        </Box>
    );
};
