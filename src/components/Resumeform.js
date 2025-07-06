'use client'

import React, { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function ResumeForm() {
  const [resume, setResume] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const res = await fetch('http://localhost:8000/resume-ai.php', {
      method: 'POST',
      body: new URLSearchParams({ resume }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    const data = await res.json()
    setResult(data.improved)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-pink-100 to-yellow-100 px-4 sm:px-6 relative overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-200 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" style={{ transform: 'translate(-50%, -50%)' }} />

      {/* Main Box */}
      <div className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl p-8 space-y-7 border border-pink-100 backdrop-blur-md animate-fade-in">
        <div className="flex flex-col items-center gap-2">
          <img src="https://img.icons8.com/color/96/000000/resume.png" alt="Resume Icon" className="w-16 h-16" />
          <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 drop-shadow-lg">
            Resume Improver
          </h1>
          <p className="text-center text-gray-600 font-medium">
            Paste your resume and let AI enhance it instantly ✨
          </p>
        </div>

        <div>
          <Label htmlFor="resume" className="text-blue-700 font-semibold">
            Paste Your Resume
          </Label>
          <Textarea
            id="resume"
            placeholder="Paste your resume here..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="mt-2 w-full min-h-[140px] rounded-xl border-2 border-blue-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition shadow-inner bg-gradient-to-br from-white via-blue-50 to-pink-50"
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={loading || !resume.trim()}
          className="w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-400 text-white font-bold py-3 rounded-xl shadow-lg hover:from-pink-600 hover:to-blue-500 transition text-lg tracking-wide disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Improving...
            </span>
          ) : 'Improve Resume'}
        </Button>

        {result && (
          <div className="mt-4 bg-gradient-to-br from-yellow-100 via-blue-50 to-pink-100 p-6 rounded-2xl border border-blue-200 shadow-inner">
            <strong className="block text-pink-700 mb-3 text-lg">Improved Resume:</strong>
            <pre className="whitespace-pre-wrap text-gray-800 font-mono text-sm">{result}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
