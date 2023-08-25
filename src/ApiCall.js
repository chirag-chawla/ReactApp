// src/ApiCall.js
import React, { useState, useEffect } from 'react';

function ApiCall() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const username = 'chirag';
        const password = 'chirag';
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

        const response = await fetch('http://localhost:8081/api/posts/all', { headers });
        const data = await response.json();
        setResponse(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      <pre>{response}</pre>
    </div>
  );
}

export default ApiCall;
