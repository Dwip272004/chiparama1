import React, { useState } from 'react';

export default function CandidatePage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Simple mock submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes('@')) {
      setError("Please enter a valid email address.");
      return;
    }

    // Mock API call simulation
    console.log(`Submitting email for notification: ${email}`);
    
    // Simulate success
    setTimeout(() => {
        setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-gray-950 py-16 px-4 font-sans">
      <div className="max-w-xl w-full text-center p-8 md:p-12 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700">
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 tracking-tighter mb-4">
          Coming Soon
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          The Candidate Hub is under construction.
        </h2>
        
        <p className="text-gray-400 text-lg mb-10">
          We're building a dedicated portal to connect top engineering talent with leading semiconductor roles. Enter your email below to be the first to know when we launch!
        </p>

        {isSubmitted ? (
          <div className="bg-green-700/20 text-green-300 p-4 rounded-xl border border-green-600">
            <p className="font-semibold">Thank you! We'll notify you when the Candidate Hub goes live.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(null); }}
              className="flex-grow p-4 rounded-xl border-2 border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200"
              required
            />
            <button
              type="submit"
              className="px-6 py-4 font-bold rounded-xl text-lg text-gray-900 bg-cyan-400 hover:bg-cyan-300 transition-colors duration-300 shadow-lg shadow-cyan-500/30 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        )}
        
        {error && (
            <p className="text-red-400 mt-4 text-sm">{error}</p>
        )}

        <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-500">
                In the meantime, you can still view <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">THE WEBSITE</a>.
            </p>
        </div>
      </div>
    </div>
  );
}
