import { useParams, Link } from 'react-router-dom'
import cases from '../data/cases.json'

export default function CaseDetail() {
  const { id } = useParams()
  const c = cases.find(x => x.id === id)

  if (!c) return (
    <div className="not-found">
      <p>案件が見つかりません。</p>
      <Link to="/">← 一覧に戻る</Link>
    </div>
  )

  return (
    <div className="detail-page">
      <nav className="detail-nav">
        <Link to="/" className="back-link">← 事例一覧に戻る</Link>
        <a href="https://masatatsushiga-code.github.io/seika-lp/#contact" className="nav-cta">無料相談する</a>
      </nav>

      <header className="detail-header">
        <div className="detail-eyebrow">
          <span className="case-area">{c.area}</span>
          <span className="case-type">{c.type}</span>
        </div>
        <span className={`case-risk ${c.riskLevel}`}>⚠ {c.risk}</span>
      </header>

      <section className="detail-section">
        <h2 className="detail-section-title">調査で判明した事項</h2>
        <ul className="findings-list">
          {c.findings.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <h2 className="detail-section-title">調査結果</h2>
        <div className="result-box">
          <p>{c.result}</p>
          <p className="source-label">調査先：{c.source}</p>
        </div>
      </section>

      <div className="detail-cta">
        <p>この物件と似たリスクが気になりますか？</p>
        <a href="https://masatatsushiga-code.github.io/seika-lp/#contact" className="btn-primary">無料で相談する</a>
      </div>
    </div>
  )
}
