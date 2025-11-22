"use client";

const ContactForm = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-softprimary/40 bg-gradient-to-br from-softprimary/20 via-white to-white shadow-xl">
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-primary_color/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-hardprimary/10 blur-[110px]"
        aria-hidden
      />

      <div className="relative border-b border-softprimary/30 bg-black_main px-6 py-5 text-white">
        <p className="text-[11px] uppercase tracking-[0.2em] text-softprimary">
          Get in touch
        </p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">Tell us about your idea</h2>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-medium text-softprimary">
            ~24h response
          </span>
        </div>
        <p className="mt-2 text-sm text-white/80">
          Share a few details and our team will come back with next steps and a
          clear timeline.
        </p>
      </div>

      <form className="relative space-y-6 px-6 py-8 md:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-black_main">
            Full name
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Alex Johnson"
              className="w-full rounded-xl border border-softprimary/50 bg-white/90 px-4 py-3 text-sm font-normal text-black_main shadow-inner focus:border-hardprimary focus:outline-none focus:ring-2 focus:ring-primary_color/20"
            />
            <span className="text-xs font-normal text-secondary_color">
              Let us know who to greet.
            </span>
          </label>

          <label className="space-y-2 text-sm font-semibold text-black_main">
            Work email
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-softprimary/50 bg-white/90 px-4 py-3 text-sm font-normal text-black_main shadow-inner focus:border-hardprimary focus:outline-none focus:ring-2 focus:ring-primary_color/20"
            />
            <span className="text-xs font-normal text-secondary_color">
              We reply from a real inbox, not a bot.
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-black_main">
            Project type
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Website refresh, storefront setup..."
              className="w-full rounded-xl border border-softprimary/50 bg-white/90 px-4 py-3 text-sm font-normal text-black_main shadow-inner focus:border-hardprimary focus:outline-none focus:ring-2 focus:ring-primary_color/20"
            />
            <span className="text-xs font-normal text-secondary_color">
              A short headline for what you need.
            </span>
          </label>

          <label className="space-y-2 text-sm font-semibold text-black_main">
            Phone (optional)
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+880 1705 446 670"
              className="w-full rounded-xl border border-softprimary/50 bg-white/90 px-4 py-3 text-sm font-normal text-black_main shadow-inner focus:border-hardprimary focus:outline-none focus:ring-2 focus:ring-primary_color/20"
            />
            <span className="text-xs font-normal text-secondary_color">
              Add a number if you prefer a quick call.
            </span>
          </label>
        </div>

        <label className="space-y-2 text-sm font-semibold text-black_main">
          Project details
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Share timelines, goals, or links we should review."
            className="w-full resize-none rounded-xl border border-softprimary/50 bg-white/90 px-4 py-3 text-sm font-normal text-black_main shadow-inner focus:border-hardprimary focus:outline-none focus:ring-2 focus:ring-primary_color/20"
          />
          <span className="text-xs font-normal text-secondary_color">
            The more context you share, the faster we can help.
          </span>
        </label>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="flex items-center gap-2 text-sm font-normal text-secondary_color">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded border-softprimary/60 text-primary_color focus:ring-primary_color/40"
            />
            Keep me posted about product tips and drops.
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-black_main px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary_color/15 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-hardprimary hover:shadow-xl"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
