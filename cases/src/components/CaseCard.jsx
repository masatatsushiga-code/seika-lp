import { Link } from 'react-router-dom'

export default function CaseCard({ c }) {
  return (
    <Link to={`/case/${c.id}`} className="case-card">
      <span className="case-area">{c.area}</span>
      <p className="case-type">{c.type}</p>
      <span className={`case-risk ${c.riskLevel}`}>⚠ {c.risk}</span>
      <ul className="case-findings">
        {c.findings.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <div className="case-divider" />
      <div className="case-result">
        <strong>調査結果</strong>
        {c.result}
      </div>
      <p className="case-source">調査先：{c.source}</p>
      <span className="case-link-label">詳細を見る →</span>
    </Link>
  )
}
