import { motion } from 'framer-motion'
import {
  Phone,
  PhoneOutgoing,
  CalendarCheck,
  Bot,
  Zap,
  BarChart3,
  Users,
  Clock,
  Shield,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import './App.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

function App() {
  return (
    <div className="presentation">
      {/* ─── Nav ─── */}
      <nav className="nav">
        <div className="nav-inner">
          <img src="https://assets.cdn.filesafe.space/YgEwClestRQiYPFHyWd7/media/6928e75b362bfe4442bfc2bc.png" alt="Madlabz Solutions" className="nav-logo-img" />
          <span className="nav-label">Presented by <strong>Jerry Madubuko</strong></span>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="badge">
            <Zap size={14} />
            Prepared for Clinic Profits
          </motion.div>
          <motion.h1 variants={fadeUp}>
            Your 24/7 AI Voice
            <br />
            <span className="gradient-text">Booking System</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-sub">
            An intelligent voice AI platform that answers calls, books appointments,
            and follows up with patients — so your clinic never misses a lead.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-stats">
            <div className="hero-stat">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Always On</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">3</span>
              <span className="stat-label">AI Agents</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">0</span>
              <span className="stat-label">Missed Calls</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── What You Get ─── */}
      <section className="section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-tag">The Platform</motion.span>
          <motion.h2 variants={fadeUp}>
            Everything Clinic Profits Gets
          </motion.h2>
          <motion.p variants={fadeUp} className="section-sub">
            A complete voice AI system built for chiropractic and physical therapy clinics,
            fully integrated with your existing tools.
          </motion.p>
        </motion.div>

        <motion.div
          className="agents-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="agent-card agent-inbound">
            <div className="agent-icon">
              <Phone size={28} />
            </div>
            <h3>Inbound AI Receptionist</h3>
            <p>
              Answers every patient call instantly — identifies new vs. existing patients,
              books appointments in real-time, and answers clinic questions.
            </p>
            <ul className="agent-features">
              <li><ChevronRight size={14} /> Instant call answering, zero hold times</li>
              <li><ChevronRight size={14} /> Smart patient identification</li>
              <li><ChevronRight size={14} /> Real-time appointment booking</li>
              <li><ChevronRight size={14} /> After-hours coverage</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="agent-card agent-outbound">
            <div className="agent-icon icon-purple">
              <PhoneOutgoing size={28} />
            </div>
            <h3>Outbound Lead Caller</h3>
            <p>
              Proactively calls leads from your CRM, qualifies them with natural
              conversation, and books initial consultations automatically.
            </p>
            <ul className="agent-features">
              <li><ChevronRight size={14} /> Automated lead follow-up</li>
              <li><ChevronRight size={14} /> Natural qualification conversations</li>
              <li><ChevronRight size={14} /> Books consultations on the spot</li>
              <li><ChevronRight size={14} /> CRM outcome tracking</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="agent-card agent-confirm">
            <div className="agent-icon icon-cyan">
              <CalendarCheck size={28} />
            </div>
            <h3>Appointment Confirmer</h3>
            <p>
              Calls patients ahead of their visit to confirm attendance or reschedule —
              reducing no-shows and keeping your calendar full.
            </p>
            <ul className="agent-features">
              <li><ChevronRight size={14} /> Pre-appointment confirmation calls</li>
              <li><ChevronRight size={14} /> Easy rescheduling flow</li>
              <li><ChevronRight size={14} /> Calendar auto-sync</li>
              <li><ChevronRight size={14} /> Up to 40% no-show reduction</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Platform Features ─── */}
      <section className="section section-dark">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-tag">Built For Scale</motion.span>
          <motion.h2 variants={fadeUp}>
            Agency Dashboard & Client Management
          </motion.h2>
          <motion.p variants={fadeUp} className="section-sub">
            A central command center for your entire client portfolio —
            real-time analytics, easy onboarding, and full visibility.
          </motion.p>
        </motion.div>

        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="feature-card">
            <BarChart3 className="feature-icon" size={24} />
            <h4>Live Analytics Dashboard</h4>
            <p>Track total calls, bookings, conversion rates, and trends across all clients in one view.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="feature-card">
            <Users className="feature-icon" size={24} />
            <h4>Multi-Client Management</h4>
            <p>Onboard new clinics in minutes. Each client gets their own agents, credentials, and analytics.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="feature-card">
            <Bot className="feature-icon" size={24} />
            <h4>Retell AI Voice Engine</h4>
            <p>Natural, human-like voice conversations powered by advanced AI — patients won&apos;t know the difference.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="feature-card">
            <Zap className="feature-icon" size={24} />
            <h4>GoHighLevel Integration</h4>
            <p>Seamless CRM sync — contacts, calendars, and appointments flow automatically between systems.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="feature-card">
            <Clock className="feature-icon" size={24} />
            <h4>24/7 Availability</h4>
            <p>Never miss a call again. The AI works nights, weekends, and holidays without breaks.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="feature-card">
            <Shield className="feature-icon" size={24} />
            <h4>Secure & Isolated</h4>
            <p>Each client&apos;s data and credentials are fully isolated. Enterprise-grade security from day one.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-tag">Simple Flow</motion.span>
          <motion.h2 variants={fadeUp}>How It Works</motion.h2>
        </motion.div>

        <motion.div
          className="flow-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flow-step">
            <div className="step-number">01</div>
            <h4>Patient Calls</h4>
            <p>A patient or lead calls your clinic&apos;s number — any time, day or night.</p>
          </motion.div>
          <div className="flow-arrow"><ArrowRight size={24} /></div>
          <motion.div variants={fadeUp} className="flow-step">
            <div className="step-number">02</div>
            <h4>AI Answers</h4>
            <p>The voice AI picks up instantly, greets them naturally, and understands their needs.</p>
          </motion.div>
          <div className="flow-arrow"><ArrowRight size={24} /></div>
          <motion.div variants={fadeUp} className="flow-step">
            <div className="step-number">03</div>
            <h4>Appointment Booked</h4>
            <p>The AI books the appointment and syncs everything to GoHighLevel in real-time.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <motion.div
          className="cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-tag tag-light">This Week Only</motion.span>
          <motion.h2 variants={fadeUp}>
            Ready to see it in action?
          </motion.h2>
          <motion.p variants={fadeUp} className="cta-sub">
            Book a live demo this week and experience the AI voice system firsthand.
            See exactly how it handles real patient calls for your clinics.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="https://links.madlabz.uk/widget/bookings/aivoice-demo-meetup"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Book Your Demo This Week
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <img src="https://assets.cdn.filesafe.space/YgEwClestRQiYPFHyWd7/media/6928e75b362bfe4442bfc2bc.png" alt="Madlabz Solutions" className="footer-logo-img" />
          <p className="footer-text">
            <strong>Madlabz Solutions</strong> &middot; Presented by Jerry Madubuko
          </p>
          <p className="footer-sub">AI-Powered Voice Solutions for Healthcare</p>
        </div>
      </footer>
    </div>
  )
}

export default App
