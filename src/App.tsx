import { Box, Container } from '@mui/material';
import { Card } from './components/Card';
import TodoProvider from './context/todoContext';

function App() {
    return (
        <TodoProvider>
            <Container>
                <Box className="wrapper">
                    <Box component="h1" sx={{ fontSize: '50px', fontStyle: 'italic' }}>
                        todos
                    </Box>
                </Box>
                <Card />
            </Container>
        </TodoProvider>
    );
}

export default App;
