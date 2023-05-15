import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { saveAs } from 'file-saver';
import '../App.css'

export default function Wordfrequency() {
  const [wordFrequencies, setWordFrequencies] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await response.text();
      const words = text.split(/\s+/);
      const frequencies = {};

      for (const word of words) {
        frequencies[word] = (frequencies[word] || 0) + 1;
      }

      setWordFrequencies(frequencies);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  function handleExport() {
    const data = Object.entries(wordFrequencies)


      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([word, frequency]) => ({ word, frequency }));

    const csv = 'Word,Frequency\n' + data.map(row => `${row.word},${row.frequency}`).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'histogram.csv');
  }

  const data = Object.entries(wordFrequencies)
 
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([word, frequency]) => ({ word, frequency }));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className='button' type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      <div style={{ marginTop: '1em' }}>
        <button className='button' onClick={handleExport}>Export</button>
      </div>
      <div style={{ marginTop: '1em' }}>
        <BarChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="word" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="frequency" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}





