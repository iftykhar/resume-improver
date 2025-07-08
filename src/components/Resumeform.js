// 'use client'

// import React, { useState } from 'react'
// import { Textarea } from '@/components/ui/textarea'
// import { Button } from '@/components/ui/button'
// import { Label } from '@/components/ui/label'
// import Image from 'public/next.svg'

// export default function ResumeForm() {
//   const [resume, setResume] = useState('')
//   const [result, setResult] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const handleSubmit = async () => {
//     if (!resume.trim()) return
    
//     try {
//       setLoading(true)
//       setError(null)
      
//       const response = await fetch('/api/resume-ai', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ resume })
//       })

//       if (!response.ok) {
//         throw new Error(`Request failed with status ${response.status}`)
//       }

//       const data = await response.json()
//       setResult(data.improved || 'No suggestions available')
//     } catch (err) {
//       console.error('Submission error:', err)
//       setError('Failed to improve resume. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 px-4 sm:px-6 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -z-10" />

//       <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-xl p-6 sm:p-8 space-y-6 border border-indigo-100 backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
//         <header className="flex flex-col items-center gap-3 text-center">
//           <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-3 rounded-2xl shadow-lg">
//             <Image
//               src="https://img.icons8.com/color/96/000000/resume.png"
//               alt="Resume Icon"
//               width={56}
//               height={56}
//               className="w-14 h-14"
//               priority
//             />
//           </div>
//           <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600">
//             AI Resume Enhancer
//           </h1>
//           <p className="text-gray-600 max-w-md">
//             Paste your resume and get AI-powered suggestions for improvement
//           </p>
//         </header>

//         <div className="space-y-4">
//           <div>
//             <Label htmlFor="resume" className="text-gray-700 font-medium flex items-center gap-2">
//               <span>Your Resume Content</span>
//               <span className="text-xs text-red-500">*</span>
//             </Label>
//             <Textarea
//               id="resume"
//               placeholder="Paste your resume here (minimum 200 characters)..."
//               value={resume}
//               onChange={(e) => setResume(e.target.value)}
//               className="mt-2 min-h-[180px] text-base border-2 border-indigo-100 focus:border-indigo-300 shadow-sm"
//               disabled={loading}
//             />
//             {resume.length > 0 && resume.length < 200 && (
//               <p className="text-xs text-red-500 mt-1">
//                 Please enter at least 200 characters for meaningful suggestions
//               </p>
//             )}
//           </div>

//           <Button
//             onClick={handleSubmit}
//             disabled={loading || resume.trim().length < 200}
//             className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-medium py-5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none"
//           >
//             {/* {loading ? (
//               <span className="flex items-center justify-center gap-2">
//                 <Spinner />
//                 Processing...
//               </span>
//             ) : (
//               <span className="flex items-center justify-center gap-2">
//                 <MagicWandIcon />
//                 Enhance My Resume
//               </span>
//             )} */}
//           </Button>

//           {error && (
//             <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200">
//               <strong>Error:</strong> {error}
//             </div>
//           )}
//         </div>

//         {result && (
//           <section className="mt-6 bg-gradient-to-br from-indigo-50 to-white p-5 sm:p-6 rounded-2xl border border-indigo-200 shadow-inner">
//             <div className="flex items-center justify-between mb-3">
//               <h2 className="text-xl font-semibold text-indigo-800">Enhanced Resume</h2>
//               <CopyButton content={result} />
//             </div>
//             <div className="prose prose-indigo max-w-none bg-white p-4 rounded-xl border">
//               <pre className="whitespace-pre-wrap text-gray-800 font-sans">
//                 {result}
//               </pre>
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   )

//   // Copy button component
//   function CopyButton({ content }) {
//     const [copied, setCopied] = useState(false)
    
//     const handleCopy = () => {
//       navigator.clipboard.writeText(content)
//       setCopied(true)
//       setTimeout(() => setCopied(false), 2000)
//     }

//     return (
//       <button
//         onClick={handleCopy}
//         className="text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-lg transition-colors flex items-center gap-1"
//       >
//       {copied ? (
//         <>
//           <CheckIcon /> Copied!
//         </>
//       ) : (
//         <>
//           <CopyIcon /> Copy
//         </>
//       )}
//     </button>
//   )
// }

// // Copy icon component
// function CopyIcon() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//       <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
//       <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
//     </svg>
//   )
// }

// // Check icon component
// function CheckIcon() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//     </svg>
//   )
// }
// }
'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function Resumeform() {
  const [resume, setResume] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = () => {
    setResult(`Improved: ${resume}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 px-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md space-y-5">
        <div>
          <Label htmlFor="resume">Paste Your Resume</Label>
          <Textarea
            id="resume"
            placeholder="Paste your resume here..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="mt-2"
          />
        </div>

        <Button onClick={handleSubmit}>Improve Resume</Button>

        {result && (
          <div className="mt-4 p-4 border rounded bg-gray-50">
            <strong>Improved Resume:</strong>
            <p className="whitespace-pre-wrap">{result}</p>
          </div>
        )}
      </div>
    </div>
  )
}

