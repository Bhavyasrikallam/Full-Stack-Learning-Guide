import { useState } from "react";

const days = [
  {
    day: 1,
    week: 1,
    title: "JS Refresher",
    focus: "Variables, functions, arrow syntax, array methods, destructuring, template literals",
    refs: [
      { label: "MDN: JS Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
      { label: "javascript.info: Basics", url: "https://javascript.info/first-steps" },
      { label: "javascript.info: Array Methods", url: "https://javascript.info/array-methods" },
    ],
    youtube: [
      { label: "JavaScript Crash Course – Traversy Media", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c" },
      { label: "JS Array Methods in 8 Min – Web Dev Simplified", url: "https://www.youtube.com/watch?v=R8rmfD9Y5-c" },
      { label: "Destructuring in JS – Fireship", url: "https://www.youtube.com/watch?v=UgEaJBz3bjY" },
    ],
    practice: [
      { label: "freeCodeCamp: JS Algorithms", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
      { label: "javascript.info Exercises (inline)", url: "https://javascript.info/" },
    ],
    tip: "Focus on map/filter/reduce — they appear everywhere in React.",
  },
  {
    day: 2,
    week: 1,
    title: "Async JS + Node Intro",
    focus: "async/await, Promises, fetch API, install Node, npm basics, modules",
    refs: [
      { label: "MDN: async/await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises" },
      { label: "nodejs.org: Getting Started", url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" },
      { label: "MDN: Modules", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" },
    ],
    youtube: [
      { label: "Async JS / Promises – Web Dev Simplified", url: "https://www.youtube.com/watch?v=DHvZLI7Db8E" },
      { label: "Node.js Crash Course 2024 – Traversy Media", url: "https://www.youtube.com/watch?v=32M1al-Y6Ag" },
      { label: "npm Crash Course – Traversy Media", url: "https://www.youtube.com/watch?v=jHDhaSSKmB0" },
    ],
    practice: [
      { label: "Node.js interactive playground – Scrimba", url: "https://scrimba.com/learn/nodejs" },
      { label: "freeCodeCamp: Back End APIs", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
    ],
    tip: "Run small .js files with `node filename.js` to test async patterns before moving to Express.",
  },
  {
    day: 3,
    week: 1,
    title: "Node + Express",
    focus: "Express setup, routes, middleware, REST endpoints, test with Postman",
    refs: [
      { label: "Express.js Official Docs", url: "https://expressjs.com/en/guide/routing.html" },
      { label: "Express: Writing Middleware", url: "https://expressjs.com/en/guide/writing-middleware.html" },
      { label: "REST API Design Guide – restfulapi.net", url: "https://restfulapi.net/" },
    ],
    youtube: [
      { label: "Express Crash Course 2024 – Traversy Media", url: "https://www.youtube.com/watch?v=CnH3kAXSrmU" },
      { label: "REST API with Node & Express – Net Ninja", url: "https://www.youtube.com/watch?v=BRdcRFvuqsE" },
      { label: "Postman Beginner Tutorial", url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4" },
    ],
    practice: [
      { label: "Thunder Client (VS Code extension)", url: "https://www.thunderclient.com/" },
      { label: "Scrimba: Learn Express.js", url: "https://scrimba.com/learn/expressjs" },
    ],
    tip: "Build GET, POST, PUT, DELETE for one resource (e.g. /tasks). Test every route in Postman before adding the next.",
  },
  {
    day: 4,
    week: 1,
    title: "Databases",
    focus: "MongoDB + Mongoose (or PostgreSQL), schemas, models, CRUD from API",
    refs: [
      { label: "MongoDB Atlas (free tier)", url: "https://www.mongodb.com/cloud/atlas" },
      { label: "Mongoose Official Docs", url: "https://mongoosejs.com/docs/guide.html" },
      { label: "MongoDB University (free)", url: "https://learn.mongodb.com/" },
    ],
    youtube: [
      { label: "MongoDB Crash Course – Traversy Media", url: "https://www.youtube.com/watch?v=-56x56UppqQ" },
      { label: "Mongoose Tutorial – Net Ninja", url: "https://www.youtube.com/watch?v=ExcRbA7fy_A" },
      { label: "MongoDB in 100 Seconds – Fireship", url: "https://www.youtube.com/watch?v=-bt_y4Loofg" },
    ],
    practice: [
      { label: "MongoDB University: M001 Basics", url: "https://learn.mongodb.com/learning-paths/introduction-to-mongodb" },
      { label: "freeCodeCamp: MongoDB + Mongoose", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/#mongodb-and-mongoose" },
    ],
    tip: "Use MongoDB Atlas free tier — no local install needed. Connect with a .env file, never hardcode your connection string.",
  },
  {
    day: 5,
    week: 1,
    title: "API Project Day",
    focus: "Plan and build a full CRUD API (notes/tasks) with DB and basic validation",
    refs: [
      { label: "express-validator docs", url: "https://express-validator.github.io/docs/" },
      { label: "HTTP Status Codes reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
      { label: "REST API Best Practices", url: "https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/" },
    ],
    youtube: [
      { label: "Build REST API with Node, Express, MongoDB – Traversy", url: "https://www.youtube.com/watch?v=vjf774RKrLc" },
      { label: "MERN Stack Crash Course – Traversy Media", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
    ],
    practice: [
      { label: "Test your API with Postman collections", url: "https://www.postman.com/collection/" },
      { label: "GitHub – push your code today", url: "https://github.com/" },
    ],
    tip: "Commit to GitHub with a clear README describing what the API does and how to run it locally.",
  },
  {
    day: 6,
    week: 1,
    title: "React Basics",
    focus: "Create app with Vite, JSX, components, props, useState, events, conditional rendering",
    refs: [
      { label: "React Official Docs (react.dev)", url: "https://react.dev/learn" },
      { label: "Vite Getting Started", url: "https://vitejs.dev/guide/" },
      { label: "react.dev: Thinking in React", url: "https://react.dev/learn/thinking-in-react" },
    ],
    youtube: [
      { label: "React Crash Course 2024 – Traversy Media", url: "https://www.youtube.com/watch?v=LDB4uaJ87e0" },
      { label: "React in 100 Seconds – Fireship", url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM" },
      { label: "useState Tutorial – Web Dev Simplified", url: "https://www.youtube.com/watch?v=O6P86uwfdR0" },
    ],
    practice: [
      { label: "react.dev interactive tutorials", url: "https://react.dev/learn/tutorial-tic-tac-toe" },
      { label: "Scrimba: Learn React", url: "https://scrimba.com/learn/learnreact" },
    ],
    tip: "Build a static UI of your Day 5 API's frontend (no data yet). Focus on breaking it into components.",
  },
  {
    day: 7,
    week: 1,
    title: "Rest + Review",
    focus: "Review Days 1–6, re-read your Day 5 API code, note confusions",
    refs: [
      { label: "javascript.info (re-read shaky chapters)", url: "https://javascript.info/" },
      { label: "MDN JS Reference", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" },
    ],
    youtube: [
      { label: "JS Concepts You Must Know – Fireship (10 min)", url: "https://www.youtube.com/watch?v=lkIFF4maKMU" },
    ],
    practice: [
      { label: "Exercism: JavaScript track", url: "https://exercism.org/tracks/javascript" },
    ],
    tip: "Write down 3 things that still feel unclear. Target those specifically in Week 2.",
  },
  {
    day: 8,
    week: 2,
    title: "React Deeper",
    focus: "useEffect, fetching data from API, lists & keys, forms, controlled inputs",
    refs: [
      { label: "react.dev: useEffect", url: "https://react.dev/reference/react/useEffect" },
      { label: "react.dev: Forms", url: "https://react.dev/learn/reacting-to-input-with-state" },
      { label: "react.dev: Lists & Keys", url: "https://react.dev/learn/rendering-lists" },
    ],
    youtube: [
      { label: "useEffect Explained – Web Dev Simplified", url: "https://www.youtube.com/watch?v=0ZJgIjIuY7U" },
      { label: "React Forms & Controlled Inputs – Traversy", url: "https://www.youtube.com/watch?v=IkMND33x0qQ" },
      { label: "Fetching Data in React – Jack Herrington", url: "https://www.youtube.com/watch?v=00lxm_doFYw" },
    ],
    practice: [
      { label: "Build a public API fetcher (Open Library, NASA, etc.)", url: "https://api.nasa.gov/" },
      { label: "CodeSandbox – quick React experiments", url: "https://codesandbox.io/" },
    ],
    tip: "Practice the pattern: fetch in useEffect → set state → render list. This repeats in every React app.",
  },
  {
    day: 9,
    week: 2,
    title: "Connect Frontend + Backend",
    focus: "Call your Day 5 API from React, loading/error states, CORS setup",
    refs: [
      { label: "Axios docs", url: "https://axios-http.com/docs/intro" },
      { label: "Express CORS middleware", url: "https://expressjs.com/en/resources/middleware/cors.html" },
      { label: "MDN: Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
    ],
    youtube: [
      { label: "Connect React to Node/Express – Net Ninja", url: "https://www.youtube.com/watch?v=w3vs4a03y3I" },
      { label: "CORS Explained – Web Dev Simplified", url: "https://www.youtube.com/watch?v=PNtFSVU-YTI" },
      { label: "Axios vs Fetch – Traversy", url: "https://www.youtube.com/watch?v=qM4iefTopt0" },
    ],
    practice: [
      { label: "Wire up your own Day 5 API to your Day 6 UI", url: "https://github.com/" },
    ],
    tip: "Run your backend on port 5000, React on port 5173. Add `cors()` middleware in Express and proxy in Vite if needed.",
  },
  {
    day: 10,
    week: 2,
    title: "Routing + State",
    focus: "React Router v6, multiple pages/views, lift state up, Context API intro",
    refs: [
      { label: "React Router v6 Docs", url: "https://reactrouter.com/en/main/start/tutorial" },
      { label: "react.dev: Sharing State", url: "https://react.dev/learn/sharing-state-between-components" },
      { label: "react.dev: Context", url: "https://react.dev/learn/passing-data-deeply-with-context" },
    ],
    youtube: [
      { label: "React Router v6 – Net Ninja", url: "https://www.youtube.com/watch?v=aZGzwEjZrXc" },
      { label: "Context API Tutorial – Web Dev Simplified", url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc" },
      { label: "Lifting State Up – Traversy", url: "https://www.youtube.com/watch?v=3JT4fZ87uBg" },
    ],
    practice: [
      { label: "Add /home, /create, /detail routes to your app", url: "https://reactrouter.com/" },
      { label: "Scrimba: React Router exercises", url: "https://scrimba.com/learn/learnreact" },
    ],
    tip: "Wrap your App in a context provider for the data that multiple pages need (e.g. user, tasks).",
  },
  {
    day: 11,
    week: 2,
    title: "Auth Basics",
    focus: "Signup/login backend (bcrypt + JWT), login form in React, protected routes",
    refs: [
      { label: "bcrypt npm", url: "https://www.npmjs.com/package/bcrypt" },
      { label: "jsonwebtoken npm", url: "https://www.npmjs.com/package/jsonwebtoken" },
      { label: "JWT.io (token decoder/explainer)", url: "https://jwt.io/" },
    ],
    youtube: [
      { label: "JWT Auth in Node.js – Web Dev Simplified", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" },
      { label: "React Protected Routes – Web Dev Simplified", url: "https://www.youtube.com/watch?v=2k8NleFjG7I" },
      { label: "Full Auth Tutorial (MERN) – Dave Gray", url: "https://www.youtube.com/watch?v=f2EqECiTBL8" },
    ],
    practice: [
      { label: "Add /register and /login endpoints to your API", url: "https://expressjs.com/" },
      { label: "Store JWT in memory or httpOnly cookie (not localStorage)", url: "https://jwt.io/" },
    ],
    tip: "Never store passwords in plain text. Always hash with bcrypt before saving to the DB.",
  },
  {
    day: 12,
    week: 2,
    title: "Capstone Build I",
    focus: "Plan capstone, build backend: routes, DB models, auth wired in",
    refs: [
      { label: "Pick a capstone idea from your plan", url: "#" },
      { label: "REST API Design Cheatsheet", url: "https://restfulapi.net/resource-naming/" },
      { label: "Mongoose Schema Design Patterns", url: "https://mongoosejs.com/docs/guide.html" },
    ],
    youtube: [
      { label: "MERN Stack Project – Task Manager (freeCodeCamp)", url: "https://www.youtube.com/watch?v=xyDkyFjzFVc" },
      { label: "Plan your backend API like a pro – Fireship", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM" },
    ],
    practice: [
      { label: "GitHub – create your capstone repo today", url: "https://github.com/" },
      { label: "Postman – test every backend route before building frontend", url: "https://www.postman.com/" },
    ],
    tip: "Backend first. Don't start the React UI until all API routes return correct responses in Postman.",
  },
  {
    day: 13,
    week: 2,
    title: "Capstone Build II",
    focus: "React frontend: pages, forms, list/detail views, connect to backend, style",
    refs: [
      { label: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs/installation" },
      { label: "react.dev: Describing the UI", url: "https://react.dev/learn/describing-the-ui" },
      { label: "CSS Tricks: Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    ],
    youtube: [
      { label: "Tailwind CSS Crash Course – Traversy", url: "https://www.youtube.com/watch?v=dFgzHOX84xQ" },
      { label: "Build Full Stack MERN App – Traversy", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
    ],
    practice: [
      { label: "Style with Tailwind or plain CSS — just make it usable", url: "https://tailwindcss.com/" },
    ],
    tip: "Don't spend more than 20% of the day on styling. Working > pretty.",
  },
  {
    day: 14,
    week: 2,
    title: "Polish + Deploy",
    focus: "Fix bugs, write README, deploy frontend (Vercel/Netlify) and backend (Render/Railway)",
    refs: [
      { label: "Vercel Docs", url: "https://vercel.com/docs" },
      { label: "Render Docs (free Node hosting)", url: "https://render.com/docs/deploy-node-express-app" },
      { label: "How to Write a Good README – freeCodeCamp", url: "https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/" },
    ],
    youtube: [
      { label: "Deploy React App to Vercel – Traversy", url: "https://www.youtube.com/watch?v=sauV-3_Nn60" },
      { label: "Deploy Node/Express to Render – Traversy", url: "https://www.youtube.com/watch?v=bnCOyGaSe84" },
      { label: "Git & GitHub Crash Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
    ],
    practice: [
      { label: "Netlify (alternative frontend host)", url: "https://www.netlify.com/" },
      { label: "Railway (alternative backend host)", url: "https://railway.app/" },
    ],
    tip: "A live URL + clean README is your portfolio entry. Polish that before anything else.",
  },
];

const platforms = [
  { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", desc: "100% free. Best for JS, APIs, and back-end certifications. Use the Back End Development track.", badge: "Free" },
  { name: "The Odin Project", url: "https://www.theodinproject.com/", desc: "Free project-based curriculum. Covers Node.js, Express, and full-stack JS. Mirrors real dev work.", badge: "Free" },
  { name: "Scrimba", url: "https://scrimba.com/", desc: "Interactive video editor — pause and code inside the lesson. Free Node.js & Express tracks.", badge: "Free tier" },
  { name: "Codecademy", url: "https://www.codecademy.com/", desc: "Structured beginner-friendly paths. Free tier for basics; Pro needed for full tracks.", badge: "Freemium" },
  { name: "Exercism", url: "https://exercism.org/tracks/javascript", desc: "Free JS practice challenges with mentor feedback. Great for Day 7 review.", badge: "Free" },
  { name: "LeetCode", url: "https://leetcode.com/", desc: "Not needed Week 1–2, but bookmark it for later interview prep.", badge: "Freemium" },
  { name: "CodeSandbox", url: "https://codesandbox.io/", desc: "Browser-based React sandbox. Great for quick experiments without setup.", badge: "Free tier" },
  { name: "MongoDB University", url: "https://learn.mongodb.com/", desc: "Free official MongoDB courses. The M001 basics course aligns with Day 4.", badge: "Free" },
];

const channels = [
  { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "Best all-around for this stack. Has updated 2024 crash courses for JS, Node, Express, React." },
  { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified", desc: "Deep dives on single concepts: useState, useEffect, JWT, CORS. Perfect for filling gaps." },
  { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "Full playlist-style courses on Node, Express, React Router, MongoDB." },
  { name: "Fireship", url: "https://www.youtube.com/@Fireship", desc: "100-second concept explainers. Use for quick mental models before going deep." },
  { name: "freeCodeCamp.org", url: "https://www.youtube.com/@freecodecamp", desc: "Long-form full courses (4–12 hours). Great for Days 5 and 12 project build-alongs." },
  { name: "Dave Gray", url: "https://www.youtube.com/@DaveGrayTeachesCode", desc: "Excellent full auth tutorials (JWT, React protected routes). Essential for Day 11." },
];

export default function App() {
  const [activeDay, setActiveDay] = useState(null);
  const [activeTab, setActiveTab] = useState("days");

  const week1 = days.filter((d) => d.week === 1);
  const week2 = days.filter((d) => d.week === 2);
  const selectedDay = days.find((d) => d.day === activeDay);

  const weekColors = {
    1: { bg: "#1a1f2e", accent: "#6366f1", light: "#818cf8", tag: "#312e81" },
    2: { bg: "#1a1f2e", accent: "#10b981", light: "#34d399", tag: "#064e3b" },
  };
  const c = selectedDay ? weekColors[selectedDay.week] : null;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0f1117", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 60%)", borderBottom: "1px solid #2d3748", padding: "28px 24px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 22 }}>⚡</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", color: "#818cf8", textTransform: "uppercase" }}>2-Week Full Stack Plan</span>
          </div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.5px" }}>
            Node.js + React — Daily Resources
          </h1>
          <p style={{ margin: "8px 0 0", color: "#94a3b8", fontSize: 14 }}>Click any day for YouTube links, reference docs, and practice platforms.</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid #1e293b", background: "#0f1117", padding: "0 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0 }}>
          {[["days", "📅 Day-by-Day"], ["channels", "📺 YouTube Channels"], ["platforms", "🖥 Practice Platforms"]].map(([key, label]) => (
            <button key={key} onClick={() => setActiveTab(key)}
              style={{ padding: "14px 18px", background: "none", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                color: activeTab === key ? "#818cf8" : "#64748b",
                borderBottom: activeTab === key ? "2px solid #818cf8" : "2px solid transparent", transition: "all 0.15s" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px" }}>

        {/* DAYS TAB */}
        {activeTab === "days" && (
          <>
            {[{ label: "Week 1 — JavaScript & Backend", days: week1, w: 1 }, { label: "Week 2 — React & Full-Stack Integration", days: week2, w: 2 }].map(({ label, days: wdays, w }) => (
              <div key={w} style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 3, height: 20, background: w === 1 ? "#6366f1" : "#10b981", borderRadius: 2 }} />
                  <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#cbd5e1", letterSpacing: "0.01em" }}>{label}</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 10 }}>
                  {wdays.map((d) => (
                    <button key={d.day} onClick={() => setActiveDay(activeDay === d.day ? null : d.day)}
                      style={{ textAlign: "left", padding: "14px 16px", background: activeDay === d.day ? (w === 1 ? "#1e1b4b" : "#022c22") : "#161b27",
                        border: `1px solid ${activeDay === d.day ? (w === 1 ? "#6366f1" : "#10b981") : "#1e293b"}`,
                        borderRadius: 10, cursor: "pointer", transition: "all 0.15s" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: w === 1 ? "#6366f1" : "#10b981", letterSpacing: "0.1em" }}>DAY {d.day}</span>
                        <span style={{ fontSize: 11, color: "#475569" }}>{w === 1 ? "Wk 1" : "Wk 2"}</span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#f1f5f9", marginBottom: 4 }}>{d.title}</div>
                      <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.4 }}>{d.focus.slice(0, 60)}…</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Day Detail Panel */}
            {selectedDay && (
              <div style={{ background: "#161b27", border: `1px solid ${c.accent}33`, borderLeft: `3px solid ${c.accent}`, borderRadius: 12, padding: "22px 24px", marginTop: 4 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: c.accent, letterSpacing: "0.12em" }}>DAY {selectedDay.day}</span>
                    <h3 style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 800, color: "#f1f5f9" }}>{selectedDay.title}</h3>
                    <p style={{ margin: "4px 0 0", fontSize: 13, color: "#94a3b8" }}>{selectedDay.focus}</p>
                  </div>
                  <button onClick={() => setActiveDay(null)} style={{ background: "#1e293b", border: "none", borderRadius: 6, padding: "6px 10px", color: "#94a3b8", cursor: "pointer", fontSize: 12 }}>✕ Close</button>
                </div>

                {/* Tip */}
                <div style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}30`, borderRadius: 8, padding: "10px 14px", marginBottom: 20, display: "flex", gap: 8 }}>
                  <span>💡</span>
                  <span style={{ fontSize: 13, color: c.light }}>{selectedDay.tip}</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                  {/* Refs */}
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" }}>📚 Reference Docs</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {selectedDay.refs.map((r, i) => (
                        <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                          style={{ padding: "8px 11px", background: "#0f1117", border: "1px solid #1e293b", borderRadius: 7, fontSize: 12, color: "#93c5fd", textDecoration: "none", display: "block", lineHeight: 1.4 }}>
                          {r.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* YouTube */}
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" }}>▶ YouTube Videos</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {selectedDay.youtube.map((y, i) => (
                        <a key={i} href={y.url} target="_blank" rel="noopener noreferrer"
                          style={{ padding: "8px 11px", background: "#1a0f0f", border: "1px solid #7f1d1d44", borderRadius: 7, fontSize: 12, color: "#fca5a5", textDecoration: "none", display: "block", lineHeight: 1.4 }}>
                          🎬 {y.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Practice */}
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" }}>🛠 Practice</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {selectedDay.practice.map((p, i) => (
                        <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                          style={{ padding: "8px 11px", background: "#0a1a0f", border: `1px solid ${c.accent}33`, borderRadius: 7, fontSize: 12, color: c.light, textDecoration: "none", display: "block", lineHeight: 1.4 }}>
                          {p.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* CHANNELS TAB */}
        {activeTab === "channels" && (
          <div>
            <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>These are the core channels used throughout the 14 days. Stick to 2–3 rather than jumping between all of them.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {channels.map((ch, i) => (
                <a key={i} href={ch.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div style={{ background: "#161b27", border: "1px solid #1e293b", borderRadius: 10, padding: "16px 18px", transition: "border-color 0.15s", cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 28, height: 28, background: "#7f1d1d", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>▶</div>
                      <span style={{ fontWeight: 700, fontSize: 14, color: "#f1f5f9" }}>{ch.name}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{ch.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* PLATFORMS TAB */}
        {activeTab === "platforms" && (
          <div>
            <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>Use these alongside the daily YouTube videos for hands-on practice. <strong style={{ color: "#94a3b8" }}>freeCodeCamp + The Odin Project</strong> is the best free combo for this stack.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {platforms.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div style={{ background: "#161b27", border: "1px solid #1e293b", borderRadius: 10, padding: "16px 18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: "#f1f5f9" }}>{p.name}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 7px", borderRadius: 20, background: p.badge === "Free" ? "#022c22" : "#1e1b4b", color: p.badge === "Free" ? "#10b981" : "#818cf8" }}>{p.badge}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
