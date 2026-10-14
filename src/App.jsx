import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [selectedBatchId, setSelectedBatchId] = useState('btech-5-cse');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header
        selectedBatchId={selectedBatchId}
        setSelectedBatchId={setSelectedBatchId}
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <p>Dashboard coming soon...</p>
        </div>
      </main>
    </div>
  );
}

export default App;
