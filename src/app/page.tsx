

"use client";

import React, { useEffect, useState } from "react";

// Single-file Next.js "Coming Soon" page (TSX) using Tailwind CSS.
// Paste this as `app/page.tsx` or a route component in the app directory.

export default function ComingSoonPage(){
  

  
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">(
    "idle"
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900 text-white p-6">
      <div className="relative w-full max-w-4xl rounded-2xl bg-gradient-to-b from-white/5 to-white/3 border border-white/10 backdrop-blur-md p-8 shadow-2xl overflow-hidden">
        {/* decorative floating shapes */}
        <div className="pointer-events-none absolute -left-24 -top-24 opacity-30 animate-rotate-slow">
          <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <circle cx="210" cy="210" r="160" fill="url(#g1)" />
          </svg>
        </div>

        
          <section className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">We&rsquo;re launching soon</h1>
            <p className="mt-4 text-lg text-slate-300"> Contact Us : info@jupitericemaster.com, MOBILE NO: 7015196529</p>
          
            {/* <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-3xl font-semibold">{pad(timeLeft.days)}</div>
                  <div className="text-xs text-slate-300">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold">{pad(timeLeft.hours)}</div>
                  <div className="text-xs text-slate-300">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold">{pad(timeLeft.minutes)}</div>
                  <div className="text-xs text-slate-300">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold">{pad(timeLeft.seconds)}</div>
                  <div className="text-xs text-slate-300">Seconds</div>
                </div>
              </div>
            </div> */}

            {/* <form  className="mt-4 w-full sm:w-[420px]">
              <div className="flex rounded-lg overflow-hidden border border-white/10 bg-white/5">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-transparent placeholder:text-slate-300 outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-sky-500 hover:brightness-105 transition disabled:opacity-50"
                  disabled={status === "saving"}
                >
                  {status === "saving" ? "Saving..." : "Notify me"}
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                {status === "done" && <span className="text-green-300">Thanks — you&rsquo;ll hear from us soon!</span>}
                {status === "error" && <span className="text-rose-300">Enter a valid email address.</span>}
              </p>
            </form> */}

            
          </section>

         
       

        {/* subtle bottom stripe */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 h-1 rounded-full bg-white/5 blur-[1px]" />
      </div>

      <style jsx>{`
        /* slow rotation for decorative SVG */
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate-slow { animation: rotateSlow 30s linear infinite; }
      `}</style>
    </main>
  );
}






