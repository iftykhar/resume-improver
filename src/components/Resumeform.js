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
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils' // Assuming you have this utility

export default function ResumeForm() {
  const [resume, setResume] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState<string | null>(null) // Explicitly type error state
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async () => {
    // Basic client-side validation
    if (!resume.trim() || resume.length < 200) {
      setError('Please enter at least 200 characters for meaningful suggestions.')
      return
    }

    setLoading(true)
    setError(null)
    setResult('')
    setCopied(false); 
    setTimeout(() => {
      
      const enhancedContent = `✨🚀 <b>AI Enhanced Resume:</b><br>${resume.split('\n').map(line => `⭐ ${line.trim()}`).join('<br>')}`;
      setResult(enhancedContent);
      setLoading(false);
    }, 1800);
  }

  const handleCopy = () => {
    // Remove HTML tags before copying
    navigator.clipboard.writeText(result.replace(/<[^>]+>/g, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div >
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 overflow-hidden relative">
        {/* Background Animated Blobs - Retained from your original code */}
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-pink-400/30 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-yellow-300/20 rounded-full blur-2xl animate-bounce -translate-x-1/2 -translate-y-1/2 -z-10" />

        <Card className="w-full max-w-full sm:max-w-lg md:max-w-2xl rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 bg-white/90 border border-indigo-100 backdrop-blur-md animate-fade-in transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(236,72,153,0.15)]">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-3">
              {/* Resume Icon - inspired by the quote icon, using an SVG for simplicity */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text text-indigo-600 mr-3 animate-spin-slow-fast" // Custom animation
                style={{ filter: 'drop-shadow(0 0 8px #a78bfa)' }} // Subtle glow
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-600 to-yellow-500 animate-gradient-x">
                AI Resume Enhancer
              </CardTitle>
            </div>
            <CardDescription className="text-gray-600 max-w-xs sm:max-w-md mx-auto text-base sm:text-lg">
              Paste your resume and get <span className="font-semibold text-indigo-600">mind-blowing</span> AI-powered suggestions!
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="resume" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                <span>Your Resume Content</span>
                <span className="text-xs text-red-500">*</span>
              </Label>
              <Textarea
                id="resume"
                placeholder="Paste your resume here (minimum 200 characters)..."
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                className={cn(
                  "min-h-[140px] sm:min-h-[180px] text-base border-2 border-indigo-100 focus-visible:ring-2 focus-visible:ring-pink-300 shadow-sm bg-white/80 transition-all duration-200",
                  error && resume.length < 200 ? 'border-red-400' : '' // Highlight border on error if char count is low
                )}
                disabled={loading}
              />
              {resume.length > 0 && resume.length < 200 && (
                <p className="text-xs text-red-500 mt-1 animate-pulse">
                  Please enter at least 200 characters for meaningful suggestions
                </p>
              )}
              {error && !loading && ( // Show general error if present and not loading
                <div className="bg-red-50 text-red-700 p-3 rounded-lg border border-red-200 mt-2 text-sm animate-shake">
                  <strong>Error:</strong> {error}
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 pt-0 items-center"> {/* Added items-center here */}
            <Button
              onClick={handleSubmit}
              disabled={loading || resume.trim().length < 200}
              className="w-full bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 hover:from-indigo-700 hover:via-pink-700 hover:to-yellow-600 text-white font-bold py-3 sm:py-4 rounded-lg shadow-lg shadow-pink-200/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Enhancing...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 19V6M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Enhance My Resume
                </span>
              )}
            </Button>

            {result && (
              <div className="mt-4 bg-gradient-to-br from-indigo-50 to-white p-4 rounded-xl border border-indigo-200 shadow-inner animate-fade-in-delayed w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
                  <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 flex items-center gap-2">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13 16h-1v-4h-1m4 0h-1V7h-1m-4 0h-1v4h-1m4 0h-1v4h-1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Enhanced Resume
                  </h2>
                  <Button
                    onClick={handleCopy}
                    className="text-xs sm:text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-2 sm:px-3 py-1 rounded-lg transition-colors flex items-center gap-1"
                    variant="ghost" // Use ghost variant for a subtle button
                  >
                    {copied ? (
                      <>
                        <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-indigo max-w-none bg-white p-3 sm:p-4 rounded-lg border shadow-md transition-all duration-300">
                  <pre
                    className="whitespace-pre-wrap text-gray-800 font-sans text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: result }}
                  />
                </div>
              </div>
            )}
          </CardFooter>
        </Card>
        {/* Global CSS for custom animations */}
        <style jsx global>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
          @keyframes spin-slow-fast { /* Modified spin for resume icon */
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow-fast {
            animation: spin-slow-fast 6s linear infinite; /* Slightly faster than original */
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fade-in-delayed { /* Added for result section */
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-delayed {
            animation: fade-in-delayed 0.8s cubic-bezier(.4,0,.2,1) both 0.2s; /* Starts slightly later */
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-8px); }
            40%, 80% { transform: translateX(8px); }
          }
          .animate-shake {
            animation: shake 0.4s;
          }
          /* Prose styling for the output */
          .prose :where(b) { font-weight: 700; }
          .prose :where(p) { margin-top: 0; margin-bottom: 0.5em; }
          .prose :where(ul) { margin-top: 0; margin-bottom: 0.5em; padding-left: 1.5em; }
          .prose :where(li) { margin-top: 0; margin-bottom: 0; }
        `}</style>
      </div>
    </div>
  )
}