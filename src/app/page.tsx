

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

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <section className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">We&rsquo;re launching soon</h1>
            <p className="text-slate-200 max-w-prose">We are building something awesome. Sign up to get notified when we go live — sneak peeks and early access included.</p>

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

            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="hover:underline text-slate-200 text-sm">Twitter</a>
              <a href="#" aria-label="LinkedIn" className="hover:underline text-slate-200 text-sm">LinkedIn</a>
              <a href="#" aria-label="Dribbble" className="hover:underline text-slate-200 text-sm">Dribbble</a>
            </div>
          </section>

          <aside className="order-first md:order-last flex items-center justify-center">
            <div className="w-full max-w-sm rounded-xl p-6 bg-gradient-to-b from-white/3 to-white/6 border border-white/6">
              <h3 className="text-lg font-semibold mb-3">What to expect</h3>
              <ul className="text-sm text-slate-200 space-y-2 list-inside list-disc">
                <li>Early access for subscribers</li>
                <li>Product updates & behind-the-scenes</li>
                <li>Exclusive launch discounts</li>
              </ul>
              {/* <div className="mt-4 text-xs text-slate-300">Estimated launch date:</div>
              <div className="font-medium mt-1">{launchDate.toDateString()}</div> */}
            </div>
          </aside>
        </div>

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






