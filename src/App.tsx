import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    setMessage(`Count increased to ${count + 1}`);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
    setMessage(`Count decreased to ${count - 1}`);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('Count reset to 0');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            React + TypeScript + Tailwind
          </h1>
          <p className="text-lg text-gray-600">
            Built with Webpack and modern tooling
          </p>
        </header>

        <main className="space-y-6">
          <Card>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Counter Example
            </h2>

            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-blue-600 mb-4">
                {count}
              </div>

              <div className="flex justify-center gap-4 mb-6">
                <Button onClick={handleDecrement} variant="secondary">
                  Decrement
                </Button>
                <Button onClick={handleReset} variant="secondary">
                  Reset
                </Button>
                <Button onClick={handleIncrement} variant="primary">
                  Increment
                </Button>
              </div>

              {message && (
                <div className="p-3 bg-green-100 border border-green-200 rounded-lg">
                  <p className="text-green-700">{message}</p>
                </div>
              )}
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">React 18</h3>
                <p className="text-sm text-gray-600">Latest React with hooks</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-2">
                  TypeScript
                </h3>
                <p className="text-sm text-gray-600">Full type safety</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Tailwind</h3>
                <p className="text-sm text-gray-600">Utility-first CSS</p>
              </div>
            </div>
          </Card>
        </main>

        <footer className="text-center py-8 text-gray-500">
          <p>Built with modern web technologies</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
