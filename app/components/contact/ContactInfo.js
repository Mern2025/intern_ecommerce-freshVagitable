"use client";

import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-softprimary/40 bg-white shadow-xl">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-softprimary/10 via-transparent to-white"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-8 h-36 w-36 rounded-full bg-primary_color/10 blur-3xl"
        aria-hidden
      />

      <div className="relative space-y-8 p-10 text-left">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.25em] text-secondary_color">
            Visit, call, write
          </p>
          <h3 className="text-2xl font-semibold text-black_main">
            Here&apos;s how to reach us
          </h3>
          <p className="text-sm text-secondary_color">
            We are humans behind the screen. Drop by, dial in, or send a note
            and we will get back with real answers.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-2xl border border-softprimary/30 bg-white/90 p-4 shadow-sm backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary_color/10 text-primary_color">
              <FaLocationDot className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary_color">
                Studio
              </p>
              <p className="text-base font-semibold text-black_main">
                Sector 10, Uttara, Dhaka 1230
              </p>
              <p className="text-sm text-secondary_color">
                Gate 02, Level 4 — buzz us at reception.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-softprimary/30 bg-white/90 p-4 shadow-sm backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary_color/10 text-primary_color">
              <FaEnvelope className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary_color">
                Email
              </p>
              <p className="text-base font-semibold text-black_main">
                merndeveloper2025@gmail.com
              </p>
              <p className="text-base font-semibold text-black_main">
                help@ruhul.com
              </p>
              <p className="text-sm text-secondary_color">
                Share links or files and we will route them to the right person.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-softprimary/30 bg-white/90 p-4 shadow-sm backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary_color/10 text-primary_color">
              <FaPhone className="text-xl" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary_color">
                Call
              </p>
              <p className="text-base font-semibold text-black_main">
                (+880) 1705446670
              </p>
              <p className="text-base font-semibold text-black_main">
                (+880) 15577262766
              </p>
              <p className="text-sm text-secondary_color">
                Prefer WhatsApp? We can switch during the call.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-softprimary/30 bg-white/90 p-4 shadow-sm backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary_color/10 text-primary_color">
              <FaClock className="text-lg" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary_color">
                Support hours
              </p>
              <p className="text-base font-semibold text-black_main">
                Sun - Thu: 9:00 AM – 7:00 PM
              </p>
              <p className="text-sm text-secondary_color">
                We monitor emails on weekends for urgent storefront issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
