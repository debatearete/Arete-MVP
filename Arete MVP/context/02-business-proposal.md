# Business proposal

Source: `originals/Business-Proposal.pdf`

## 1. Problem identification

### Students

| Challenge | Description |
| --- | --- |
| Targeted feedback | Cannot isolate specific areas to improve immediately for a specific speech context |
| Schedule & accountability | Miss practice sessions; inconsistent progress |
| Self-review aversion | Avoid listening to their own recorded voice; no structured way to compare a corrected version against the original |

### Instructors

| Challenge | Description |
| --- | --- |
| Limited 24/7 availability | Coaches cannot be available around the clock |
| Lack of before-and-after focus | Hard to see a student correct a specific segment and compare versions; hard to measure internalised feedback |
| Lack of tools | No standardized tool for skill practice (matter file tests, drills) |

## 2. Market analysis

| Metric | Value |
| --- | --- |
| Market size 2025 | $0.3 billion |
| Market size 2034 | $0.6 billion |
| CAGR | 9.2% |

Drivers: digital transformation of education; demand for critical thinking and communication; emphasis on soft skills.

### Competitive landscape

| Competitor | Audience | Features | Gap |
| --- | --- | --- | --- |
| Contra | B2C | AI opponent, real-time streaming, 4-dimension scoring | Consumer-focused; no B2B institutional workflow |
| Counter-Point | B2C | AI opponent, 4 personalities, real-time analysis | Consumer-focused; no B2B integration |
| DebateMate | B2C | AI opponent, real-time analysis, voice synthesis | Open-source/consumer; no institutional structure |
| DebateGuard | B2C | AI opponent, body language analysis | Over-indexes on individual performance |
| Kialo & Debate.org | B2C/B2B general | Argument mapping, community debate | Generic tool |
| **Arete** | **B2B + B2C** | Instructor dashboards, structured practice, feedback, style matching, before-and-after correction | First-mover in debate-specific EdTech with dual-user model |

## 3. Societal benefit

- Soft skills: analytical reasoning, communication, collaborative problem-solving
- Civic engagement: reasoned discourse

## 4. Problem statement

There is no dedicated platform for debate academies, schools, and coaches to give students structured, data-driven, efficient practice. Instructors lack a clear view of student corrections and before-and-after improvement. Current tools are consumer-focused, weak on institutional features, or fail to fit academy workflow.

Justification: Capstone pilot interest; $0.6B by 2034; AI makes analysis feasible; B2B has lower CAC, deeper workflow lock-in, high knowledge barriers.

## 5. Customer discovery

**Beachhead:** Hong Kong debate academies and secondary schools; launch partner **Capstone**.

Rationale: proven demand (Capstone piloted a “dropbox” form); high density HK debate ecosystem; Capstone as social proof; talent pipeline of coach/student feedback.

Expansion: Hong Kong → Singapore & Australia → North America & Europe.

Discovery: outreach via Capstone + MVP screenshots; interviews; willingness-to-pay; workflow fit.

Deliverables: problem-solution fit, feature backlog, integration roadmap, pricing model.

## 6. Solution

See `01-overview.md`.

## 7. Competitive advantage

| Advantage | Description |
| --- | --- |
| Localised | HK debate ecosystem, WSDC/BP, local competition data and judging criteria |
| Specialised | Built for debate education: dashboards, class management, correction workflows |
| Personalised | Speech-correction workflow and style matching; one clear thing to work on |

### Arete vs generic LLM

| Feature | Generic LLM | Arete |
| --- | --- | --- |
| Training data | General internet | Curated WSDC/BP winning speeches, judge feedback, motion analysis |
| Output | Vague advice | Specific matter / manner / method feedback |
| Context | Unaware of formats/judging trends | Tuned to WSDC/BP and local judging |
| Accuracy | Hallucinations / wrong terminology | High accuracy on fallacies, structure, strategic gaps |
| Integration | Copy-paste standalone | Practice workflow + instructor dashboards + progress tracking |

## 8. Unique value proposition

**Instructors / businesses:** Students need help outside class hours, but coaches cannot be 24/7. The platform shows every correction with before-and-after playback so coaches focus on students who need them most and can prove progress to parents.

**Students:** One clear, actionable focus area per session. Style matching, targeted drills, correct-and-compare. Faster skill and confidence.

## 9. Blue ocean

| Factor | Red ocean | Blue ocean |
| --- | --- | --- |
| Customer | B2C individuals | B2B academies/schools + B2C subscribers |
| Use case | Solo AI opponent | Instructor-led practice management + self-directed improvement |
| Value | Generic AI feedback | Targeted feedback + before-and-after visibility |
| Success | Individual skill | Institutional retention + measurable correction-based progress |
| Integration | Standalone | Academy workflow and curriculum |
| Revenue | Individual subs | Institutional licensing + individual subs |

## 10. MVP

See `03-mvp-outline.md`.

## 11. A/B testing (post-build, not screenshot MVP)

Philosophy: data-driven, continuous, user-centric.

Tools: Mixpanel/Amplitude; Optimizely/VWO.

Priorities: onboarding (~4w) → feature optimization (~8w) → gamification (~8w) → instructor tools (~6w).

Key tests: tutorial vs interactive onboarding; motion selection; text vs gamified feedback; practice vs competition mode; matter-test cadence; personalized drills; before/after presentation (sequential vs side-by-side vs slider); leaderboard identity; streaks; dashboard “needs review” alerts.

## 12. Key stats (targets)

| Metric | Target |
| --- | --- |
| MAU | 5,000+ Year 1 |
| Student retention | 70%+ MoM |
| Practice sessions | 4+ per student per week |
| Instructor adoption | 90%+ of partner academy coaches |
| NPS | +50 students, +60 instructors |
| ARR | $500K+ Year 3 (note: section 15 lists different ARR ramps — treat 15 as scaling stages) |

Costs: LLM/API, engineering, marketing, support, cloud.

Revenue: B2B org subscription (higher), B2C small monthly, 1-week free trial. Signup: alone vs under an organisation (org codes).

## 13. Go-to-market

Principles: relationship-first; Capstone as proof; community-led (JSDC, circuits, WSDC); dual-tier B2B+B2C.

### Pricing

| Tier | Customer | Price | Trial |
| --- | --- | --- | --- |
| B2B Organisation | Academies, schools, clubs | $99.99 / 20 students / month | First week free for the org |
| B2C Individual | Solo debaters | $4.99 / month | First week free |

Signup chooses “part of an organisation” or “registering alone”. Org members need **organisation-specific codes**.

Phased: Capstone pilot → HK academies (5–10) and schools (10–15) → SEA → WSDC countries. Later: BP/AP/LD/Policy/PF; Mandarin, Malay, Tagalog.

Sales: warm intros, cold email, community, LinkedIn/Facebook, referrals, national bodies.

Cold-email subject: “Transform your debate practice with AI-powered targeted feedback.” Offer 1-week org trial and 15-minute screenshot demo.

## 14. Branding

**Logo concept:** “The Voice Bubble” — speech bubble + podium/pillar + subtle AI circuitry.

| Color | Hex | Usage |
| --- | --- | --- |
| Blue | `#2563EB` | Primary buttons, headings |
| Blue | `#3B82F6` | Secondary UI |
| Orange | `#F97316` | CTAs, notifications |
| Purple | `#8B5CF6` | Premium features |
| Green | `#22C55E` | Positive feedback |
| Red | `#EF4444` | Areas for improvement |

Type: custom bubble letters for brand name; Inter for headings/body; Outfit for display; JetBrains Mono for technical.

Taglines:

- Primary: Find Your Voice. Sharpen Your Argument.
- B2B: AI-Powered Debate Practice for Academies and Schools.
- Student: Practice Smarter. Debate Better.
- Product: Your Personal Debate Coach, Powered by AI.
- Aspirational: From Practice to Podium.
- Brand: One Platform. Infinite Improvement.

Values: Empowerment, Excellence, Accessibility, Innovation (AI augments coaches, does not replace them), Community, Authenticity.

Voice: encouraging coach — firm but kind; clear; professional for B2B; playful; empathetic.

Personality: Supportive Coach — knowledgeable, encouraging, approachable, reliable, innovative, community-focused.

Founder story (use in about/pitch, not in UI chrome): built by a former student debater who needed targeted feedback, less painful self-review, and a way to show coaches what improved.

## 15. Scaling

PMF bars: >80% MAU of total users; >70% 30-day retention; NPS >+50 / >+60; >30% free-to-paid; >20% organic referral; >60% core-feature adoption; >90% partner renewal.

ARR targets in this section: Y1 $10K, Y2 $30K, Y3 $100K (align product copy with current stage; do not invent a different number).

Churn <10% then <12% Y3. Gross margin >70% then >75%.

Formats: WSDC core; BP expanding; AP later; LD/Policy/PF for US later.

Languages: English now; Chinese / HKT style matching months 6–12; Malay, Tagalog months 18–24.

## 16. Financials

- B2B org subscription (primary): annual-ish fixed fee by student count; active pilot
- B2C: ~$4.99/month; future
- Free trial: first week, at launch
- Signup flow: org vs alone, at launch

Break-even notes: variable cost per B2B client ~$100/year; average revenue per B2B client ~$3,000.

## 17. Elevator pitches

**B2B:** Students practice anytime with specific feedback; instructors see improvement on each correction without extra coach workload. AI coach + before-and-after + instructor dashboard. Free one-week org trial; demo from screenshots.

**Student:** Instant feedback with one actionable focus; correct a segment; hear before/after; submit to coach; drills; matter-file leaderboards. Personal debate coach in your pocket.
