'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const tallyUrl = 'https://tally.so/r/Xx8rde'
const xUrl = 'https://x.com/uniflowlabs'

const problems = [
  {
    number: '01',
    title: 'Allocations drift from reality',
    body: 'Your spreadsheet, stakeholder agreement, and deployed distribution logic stop matching once launch plans change.'
  },
  {
    number: '02',
    title: 'Post-TGE changes become risky',
    body: 'Wrong wallet, updated deal, new contributor, or revised vesting terms can create manual fixes and operational risk.'
  },
  {
    number: '03',
    title: 'Teams lose visibility',
    body: 'Founders, ops, investors, and contributors need clarity on what changed, who approved it, and when tokens unlock.'
  }
]

const capabilities = [
  'Linear, cliff, and milestone-based vesting',
  'Spreadsheet import and allocation validation',
  'Mismatch detection before distribution breaks',
  'Controlled post-deployment updates',
  'Audit trail for every allocation change',
  'Stakeholder-ready distribution visibility'
]

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    document.querySelectorAll('#hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 90 + i * 90)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <nav className="nav">
        <div className="navInner">
          <a href="#hero" className="brand" aria-label="Uniflow home">
            <Image src="/uniflow-logo.png" alt="Uniflow logo" width={44} height={44} className="brandLogo" priority />
            <span>Uniflow</span>
          </a>

          <div className="desktopLinks">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#features">Features</a>
            <a href={xUrl} target="_blank" rel="noreferrer">X / Twitter</a>
          </div>

          <a href={tallyUrl} target="_blank" rel="noreferrer" className="navCta">Join early access</a>

          <button className="menuButton" onClick={() => setMobileOpen(value => !value)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>

        {mobileOpen && (
          <div className="mobileLinks">
            <a onClick={() => setMobileOpen(false)} href="#problem">Problem</a>
            <a onClick={() => setMobileOpen(false)} href="#solution">Solution</a>
            <a onClick={() => setMobileOpen(false)} href="#features">Features</a>
            <a onClick={() => setMobileOpen(false)} href={xUrl} target="_blank" rel="noreferrer">X / Twitter</a>
            <a onClick={() => setMobileOpen(false)} href={tallyUrl} target="_blank" rel="noreferrer" className="mobileCta">Join early access</a>
          </div>
        )}
      </nav>

      <section id="hero" className="hero sectionGlow">
        <div className="gridTexture" />
        <div className="orb orbPurple" />
        <div className="orb orbBlue" />

        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="reveal pill">Token Distribution Infrastructure</div>
            <h1 className="reveal delay1">
              Fix token distribution before it becomes chaos.
            </h1>
            <p className="reveal delay2 heroLead">
              Uniflow helps Web3 founders and ops teams sync allocations, detect mismatches, and manage vesting changes without messy spreadsheets, manual patches, or contract redeployment.
            </p>
            <div className="reveal delay3 ctaRow">
              <a href={tallyUrl} target="_blank" rel="noreferrer" className="primaryButton">Join the waitlist</a>
              <a href="#solution" className="secondaryButton">See how it works</a>
            </div>
            <div className="reveal delay4 trustStrip">
              <div><strong>0</strong><span>Redeploy chaos</span></div>
              <div><strong>1</strong><span>Unified source</span></div>
              <div><strong>TGE</strong><span>Ready ops</span></div>
            </div>
          </div>

          <div className="reveal delay2 heroVisual" aria-label="Uniflow SaaS dashboard preview">
            <div className="logoHalo">
              <Image src="/uniflow-logo.png" alt="Uniflow flowing U logo" width={360} height={360} className="heroLogo" priority />
            </div>
            <div className="dashboardCard allocationCard">
              <span>Allocation Sync</span>
              <strong>98.7%</strong>
              <div className="progress"><i /></div>
            </div>
            <div className="dashboardCard auditCard">
              <span>Audit Trail</span>
              <strong>Live</strong>
              <small>4 changes approved</small>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section">
        <div className="container">
          <div className="sectionHeader reveal">
            <div className="pill">The problem</div>
            <h2>Token distribution breaks when plans change.</h2>
            <p>Most teams still run high-stakes distribution through fragile spreadsheets, screenshots, and manual coordination.</p>
          </div>
          <div className="cardGrid three">
            {problems.map(item => (
              <article className="reveal glassCard" key={item.number}>
                <span className="cardNumber">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="section tinted">
        <div className="container split">
          <div className="reveal">
            <div className="pill">The solution</div>
            <h2>One operational layer from spreadsheet to on-chain.</h2>
            <p className="sectionText">Uniflow turns token distribution into a controlled workflow: import, validate, sync, update, and track every change with confidence.</p>
            <a href={tallyUrl} target="_blank" rel="noreferrer" className="primaryButton inline">Get early access</a>
          </div>
          <div className="reveal flowPanel">
            {['Upload allocations', 'Validate schedules', 'Detect mismatches', 'Apply controlled updates'].map((step, index) => (
              <div className="flowStep" key={step}>
                <b>{index + 1}</b>
                <div>
                  <strong>{step}</strong>
                  <span>{index === 0 ? 'CSV or spreadsheet source' : index === 1 ? 'Rules, wallets, unlocks' : index === 2 ? 'Off-chain vs on-chain' : 'With audit-ready history'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <div className="sectionHeader center reveal">
            <div className="pill">Key capabilities</div>
            <h2>Built for founders and ops teams managing token complexity.</h2>
          </div>
          <div className="featureGrid">
            {capabilities.map(item => (
              <div className="reveal featureItem" key={item}>
                <span className="check">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section finalCta">
        <div className="container narrow reveal">
          <div className="pill">Get early access</div>
          <h2>Do not let token distribution become your operational risk.</h2>
          <p>One wrong address. One missed sync. One redeploy too many.</p>
          <div className="ctaRow centerRow">
            <a href={tallyUrl} target="_blank" rel="noreferrer" className="primaryButton">Join the early access waitlist</a>
            <a href={xUrl} target="_blank" rel="noreferrer" className="secondaryButton">Follow Uniflow on X</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <div>
            <strong>Uniflow</strong>
            <span>One unified flow for token distribution</span>
          </div>
          <div className="footerLinks">
            <a href={xUrl} target="_blank" rel="noreferrer">X / Twitter</a>
            <span>© 2026 Uniflow</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
