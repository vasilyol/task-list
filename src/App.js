import './App.css';
import { TaskList } from './TaskList';

function App() {
    return (
        <div className="app">
            <div className="header">
                <h1>What are your plans for today?</h1>
            </div>
            <TaskList />   
        </div>
    );
}

export default App;
