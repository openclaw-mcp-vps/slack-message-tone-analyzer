export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="text-center mb-20">
          <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            AI Tone Analysis
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Send Slack messages that{" "}
            <span className="text-[#58a6ff]">land right</span>
          </h1>
          <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
            Analyze your Slack drafts for tone before hitting send. Catch passive-aggression, ambiguity, and harshness in real time — before they damage team trust.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
          >
            Get Started — $9/mo
          </a>
          <p className="mt-4 text-sm text-[#8b949e]">Chrome extension + web dashboard. Cancel anytime.</p>
        </section>

        {/* Feature highlights */}
        <section className="grid sm:grid-cols-3 gap-6 mb-20">
          {[
            { title: "Real-time feedback", desc: "Tone scores appear as you type inside Slack." },
            { title: "Improvement suggestions", desc: "AI rewrites harsh or unclear sentences for you." },
            { title: "Team safety", desc: "Flag messages that may violate HR communication policies." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
          <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
            <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
            <p className="text-5xl font-bold text-white mb-1">$9</p>
            <p className="text-[#8b949e] text-sm mb-6">per month</p>
            <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
              {[
                "Chrome extension for Slack",
                "Unlimited tone analyses",
                "AI rewrite suggestions",
                "HR policy flag alerts",
                "Web dashboard & history"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#58a6ff] font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
              className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Start for $9/mo
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">How does the Chrome extension work?</h3>
              <p className="text-[#8b949e] text-sm">The extension reads your Slack message draft locally, sends it to our API for analysis, and overlays a tone score and suggestions directly in the Slack interface — no copy-pasting required.</p>
            </div>
            <div className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">Is my message content stored?</h3>
              <p className="text-[#8b949e] text-sm">Messages are analyzed in transit and not stored permanently. We retain anonymized tone metadata for improving the model, but never your raw message text.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-[#8b949e] text-sm">Yes. Cancel from your dashboard at any time. You keep access until the end of your billing period with no questions asked.</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-xs text-[#8b949e]">
          &copy; {new Date().getFullYear()} Slack Tone Analyzer. Not affiliated with Slack Technologies.
        </footer>
      </div>
    </main>
  )
}
