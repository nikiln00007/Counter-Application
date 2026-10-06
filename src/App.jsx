import Counter from './Counter';
import './App.css';

/**
 * Root App Component
 * Simple structure that renders the main Counter component
 */
function App() {
  return (
    <div className="page-wrapper">
      <Counter />
    </div>
  );
}

export default App;
