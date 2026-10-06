import { useState } from 'react';

/**
 * Counter Component
 * Demonstrates basic React concepts:
 * 1. useState hook for state management
 * 2. Event handling (onClick)
 * 3. Conditional rendering
 * 4. Dynamic UI updates
 */
function Counter() {
  // Step 1: Declare state variable 'count' initialized to 0
  // 'count' holds the current value, 'setCount' is the function to update it
  const [count, setCount] = useState(0);

  // Step 2: Event Handler - Increment count by 1 using functional update
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Step 3: Event Handler - Decrement count by 1 (prevent going below 0)
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // Step 4: Event Handler - Reset count back to 0
  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <h1 className="app-title">Counter App</h1>
        <p className="app-subtitle">A simple React useState project</p>
      </header>

      {/* Main Counter Card */}
      <section className="counter-card" aria-label="Counter Interface">
        <h2 className="card-heading">Counter</h2>

        {/* Prominent Counter Value Display */}
        <div className="count-display-wrapper">
          <span className="count-value" key={count}>
            {count}
          </span>
        </div>

        {/* Conditional Rendering Requirement: Display message based on count */}
        <div className="conditional-message-box">
          {count === 0 ? (
            <p className="status-msg min-limit-msg">
              <span className="msg-icon">⚠️</span> Minimum limit reached
            </p>
          ) : (
            <p className="status-msg active-msg">
              <span className="msg-icon">✓</span> You can decrease the count
            </p>
          )}
        </div>

        {/* Control Buttons */}
        <div className="button-group">
          <button
            id="decrement-btn"
            className="btn btn-decrement"
            onClick={handleDecrement}
            disabled={count === 0}
            aria-label="Decrement counter"
          >
            <span className="btn-symbol">−</span> Decrement
          </button>

          <button
            id="reset-btn"
            className="btn btn-reset"
            onClick={handleReset}
            aria-label="Reset counter"
          >
            Reset
          </button>

          <button
            id="increment-btn"
            className="btn btn-increment"
            onClick={handleIncrement}
            aria-label="Increment counter"
          >
            <span className="btn-symbol">+</span> Increment
          </button>
        </div>

        {/* Additional Counter Status Section */}
        <footer className="counter-footer">
          <div className="status-row">
            <span className="status-label">Current Count:</span>
            <span className="status-value">{count}</span>
          </div>

          <div className="status-indicator">
            <span className="indicator-label">Status:</span>
            <span className={`badge ${count === 0 ? 'badge-inactive' : 'badge-active'}`}>
              <span className="badge-dot"></span>
              {count === 0 ? 'Minimum limit reached' : 'Counter is active'}
            </span>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default Counter;
