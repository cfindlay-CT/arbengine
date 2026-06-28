import { useRef, useState } from 'react'
import {
  Clock,
  CalculatorIcon,
  ShieldOff,
  Radar,
  Banknote,
  Bell,
  Check,
  ArrowRight,
  Loader2,
} from 'lucide-react'
import { supabase } from './supabaseClient'

function NavBar({ onScrollToForm }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold tracking-tight text-white">
          Arb<span className="text-emerald-400">Engine</span>
        </span>
        <button
          onClick={onScrollToForm}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Join Private Beta
        </button>
      </div>
    </header>
  )
}

function Hero({ onScrollToForm }) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-20 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
        Stop manual refreshing. Start flipping.
      </p>
      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
        Get Real-Time Spreads on Underpriced Luxury Assets Delivered Straight
        to Your Discord.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        We continuously scan secondary markets, auto-calculate true net
        margins (including platform fees, authentication, and shipping), and
        alert you to profitable flips before the market reacts.
      </p>
      <button
        onClick={onScrollToForm}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-emerald-400"
      >
        Join the Private Waitlist <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-sm text-slate-500">
        Limited to 100 beta users to preserve margin opportunity.
      </p>
    </section>
  )
}

function PainCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
      <Icon className="mb-4 h-8 w-8 text-emerald-400" />
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{text}</p>
    </div>
  )
}

function PainPoints() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">
        Why Manual Arbitrage is a Grind
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        <PainCard
          icon={Clock}
          title="The Time Sink"
          text="Spending 6 hours a day manually refreshing Chrono24, Vestiaire Collective, and eBay only to find that the best deals are gone in seconds."
        />
        <PainCard
          icon={CalculatorIcon}
          title="The Hidden Fee Trap"
          text="Getting excited about a spread, buying the item, and then realizing import duties, authentication fees, and platform commissions ate 100% of your profit."
        />
        <PainCard
          icon={ShieldOff}
          title="The Bot Blockade"
          text="Getting hit with continuous CAPTCHAs and IP bans because you tried to run a basic, unshielded browser scraper."
        />
      </div>
    </section>
  )
}

function StepCard({ icon: Icon, step, title, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
          {step}
        </div>
        <Icon className="h-6 w-6 text-emerald-400" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{text}</p>
    </div>
  )
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">
        How ArbEngine Automates Your Sourcing
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        <StepCard
          icon={Radar}
          step={1}
          title="Raw Ingestion"
          text="Our residential-backed pipelines scan major marketplaces every 5 minutes, capturing new listings instantly without getting blocked."
        />
        <StepCard
          icon={Banknote}
          step={2}
          title="Margin Calculation"
          text="The engine instantly converts foreign currency, standardizes condition grading, and deducts the exact fee ledger of the host platform."
        />
        <StepCard
          icon={Bell}
          step={3}
          title="Instant Alerts"
          text="If the net profit meets your target, a formatted alert lands in your private Discord channel with the direct purchase link and calculated ROI."
        />
      </div>
    </section>
  )
}

function PricingCard({
  name,
  price,
  bestFor,
  features,
  cta,
  highlight,
  onScrollToForm,
}) {
  return (
    <div
      className={`relative flex flex-col rounded-xl border p-6 ${
        highlight
          ? 'border-emerald-400 bg-slate-900 shadow-lg shadow-emerald-500/10'
          : 'border-white/10 bg-slate-900/50'
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-slate-950">
          Recommended
        </span>
      )}
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mt-2 text-3xl font-bold text-white">
        {price}
        <span className="text-base font-normal text-slate-400"> / month</span>
      </p>
      <p className="mt-3 text-sm text-slate-400">{bestFor}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={onScrollToForm}
        className={`mt-6 rounded-lg px-4 py-2 text-sm font-semibold transition ${
          highlight
            ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
            : 'border border-white/20 text-white hover:bg-white/10'
        }`}
      >
        {cta}
      </button>
    </div>
  )
}

function Pricing({ onScrollToForm }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">
        Pricing
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        <PricingCard
          name="Starter"
          price="$99"
          bestFor="Best for: Part-time flippers and course graduates starting their first flips."
          features={[
            'Monitor up to 10 specific luxury assets (e.g., Rolex 116500LN, Chanel Classic Flap)',
            '15-minute interval email alerts',
            'Calculated fee ledger adjustment',
          ]}
          cta="Join Starter Waitlist"
          onScrollToForm={onScrollToForm}
        />
        <PricingCard
          name="Professional"
          price="$249"
          bestFor="Best for: Full-time traders looking to scale their inventory."
          features={[
            'Monitor up to 50 assets across all categories',
            'Instant Discord / Slack webhook integration (Real-time speed)',
            '90-day rolling historical market clearing price charts',
            'Priority queue on pipeline refreshes',
          ]}
          cta="Join Professional Waitlist"
          highlight
          onScrollToForm={onScrollToForm}
        />
        <PricingCard
          name="Syndicate / Agency"
          price="$899"
          bestFor="Best for: High-volume trading groups and e-commerce aggregators."
          features={[
            'Unlimited asset tracking within specific categories',
            'Dedicated scraping IP pool (Zero rate limits)',
            'Direct API access to feed our margin engine data into your internal software',
            'White-glove setup and custom webhook formatting',
          ]}
          cta="Apply for Syndicate"
          onScrollToForm={onScrollToForm}
        />
      </div>
    </section>
  )
}

function WaitlistForm({ formRef }) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!supabase) {
      console.error(
        'Supabase env vars are not set — see WAITLIST_SETUP.md for setup.',
      )
      setStatus('error')
      return
    }

    const form = e.target
    const payload = {
      email: form.email.value,
      niche: form.niche.value,
      course: form.course.value,
    }

    setStatus('submitting')
    const { error } = await supabase.from('waitlist_signups').insert(payload)

    if (error) {
      console.error('Waitlist submission failed', error)
      setStatus('error')
      return
    }

    setStatus('success')
    form.reset()
  }

  if (status === 'success') {
    return (
      <section ref={formRef} className="mx-auto max-w-xl px-6 py-20">
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">You're on the list.</h2>
          <p className="mt-2 text-slate-300">
            We'll email you when your private beta invite is ready.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section ref={formRef} className="mx-auto max-w-xl px-6 py-20">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Secure Your Spot in the Private Beta
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-xl border border-white/10 bg-slate-900/50 p-8"
      >
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-emerald-400"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            What high-ticket niche are you currently reselling?
          </label>
          <select
            name="niche"
            className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2.5 text-white outline-none focus:border-emerald-400"
          >
            <option>Luxury Watches</option>
            <option>Designer Handbags & Apparel</option>
            <option>Graded Collectibles (Coins/Cards)</option>
            <option>Other / Undecided</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Have you taken a reselling or trading course?
          </label>
          <select
            name="course"
            className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2.5 text-white outline-none focus:border-emerald-400"
          >
            <option>Yes, currently enrolled</option>
            <option>Yes, in the past</option>
            <option>No, I am self-taught</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              Submitting <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Secure My Spot <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        {status === 'error' && (
          <p className="text-center text-sm text-red-400">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} ArbEngine. All rights reserved.
    </footer>
  )
}

export default function App() {
  const formRef = useRef(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <NavBar onScrollToForm={scrollToForm} />
      <Hero onScrollToForm={scrollToForm} />
      <PainPoints />
      <HowItWorks />
      <Pricing onScrollToForm={scrollToForm} />
      <WaitlistForm formRef={formRef} />
      <Footer />
    </div>
  )
}
