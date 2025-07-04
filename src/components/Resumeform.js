import React from 'react';
import {userState} from 'react';

// const Resumeform = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Resumeform


export default function ResumeForm() {
  const [resume, setResume] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:8000/resume-ai.php', {
      method: 'POST',
      body: new URLSearchParams({ resume }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    const data = await res.json();
    setResult(data.improved);
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <textarea
        placeholder="Paste your resume here..."
        className="w-full h-40 border p-2 rounded"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
      >
        {loading ? 'Improving...' : 'Improve Resume'}
      </button>

      {result && (
        <div className="mt-4 bg-gray-100 p-3 rounded whitespace-pre-wrap">
          <strong>Improved Resume:</strong>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}