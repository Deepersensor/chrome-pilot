'use client';

import { SetStateAction, useState } from 'react';
import SurrealButton from '@/components/Button';
import OutputCard from '@/components/Card';


export default function Home() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCode(event.target.value);
  };

  const handleRunCode = async () => {
    // Send code to backend for execution
    // Update output with the result
    try {
      const response = await fetch('/api/runCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      setOutput('Error running code.');
    }
  };

  const handleGetSuggestions = async () => {
    // Send code to backend for suggestions
    // Update output with suggestions
    try {
      const response = await fetch('/api/getSuggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setOutput(data.suggestions);
    } catch (error) {
      setOutput('Error getting suggestions.');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-purple-300 to-blue-300 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-purple-800">Chrome Copilot</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <textarea
          className="w-full h-96 border border-gray-300 p-2 bg-white rounded-lg shadow-md"
          value={code}
          onChange={handleCodeChange}
          placeholder="Enter your code here"
        />
          
        <OutputCard output={output} /> 
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        <SurrealButton onClick={handleRunCode} text="Run Code" />
        <SurrealButton onClick={handleGetSuggestions} text="Get Suggestions" />
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(to right, #e0eafc, #cfdef3); 
        }
      `}</style>
      
    </div>
  );
}
