import { useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Uses", to: "/uses" },
  { name: "Musings", to: "/musings" },
  { name: "Experience", to: "/experience" },
  { name: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0b5688] text-white shadow-sm ring-1 ring-white/10">
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-12">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight font-mono"
          onClick={() => setOpen(false)}
        >
          Anthony Jesmok
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-[#116ab5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a4d75] text-white transition hover:bg-[#116ab5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-6 w-6 flex-col justify-between">
            <span className="block h-0.5 w-full rounded-full bg-white" />
            <span className="block h-0.5 w-full rounded-full bg-white" />
            <span className="block h-0.5 w-full rounded-full bg-white" />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-700 bg-slate-800 md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
