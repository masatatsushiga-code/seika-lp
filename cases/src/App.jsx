import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CaseCard from './components/CaseCard'
import CaseDetail from './components/CaseDetail'
import cases from './data/cases.json'
import './App.css'

function CaseList() {
  return (
    <div className="app">
      <header className="app-header">
        <a href="https://masatatsushiga-code.github.io/seika-lp/" className="logo">
          青歌<span className="logo-sub">SEIKA</span>
        </a>
        <div className="header-right">
          <span className="header-label">調査事例</span>
          <a href="https://masatatsushiga-code.github.io/seika-lp/#contact" className="nav-cta">無料相談</a>
        </div>
      </header>

      <main className="case-list-main">
        <div className="section-eyebrow">Cases</div>
        <h1 className="section-title">調査事例</h1>
        <p className="section-sub">
          実際に行った調査の一部をご紹介します。「書類上は問題なさそう」な物件でも、現地・役所調査で重大なリスクが発覚するケースは少なくありません。
        </p>
        <div className="cases-grid">
          {cases.map(c => <CaseCard key={c.id} c={c} />)}
        </div>
      </main>

      <footer className="app-footer">
        <span>© 2026 青歌 All rights reserved.</span>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CaseList />} />
        <Route path="/case/:id" element={<CaseDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
