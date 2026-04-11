import type { ReactNode } from "react";

type SplitPageLayoutProps = {
  title: string;
  description: string;
  children?: ReactNode;
  imageUrl?: string;
};

const defaultImageUrl = "https://www.placecats.com/1200/1600";

export function SplitPageLayout({
  title,
  description,
  children,
  imageUrl = defaultImageUrl,
}: SplitPageLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-[95vw] flex-col overflow-hidden md:flex-row">
        <section className="flex w-full flex-1 flex-col justify-center gap-8 bg-slate-50 px-4 py-14 sm:px-6 lg:px-16 dark:bg-slate-950">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold font-mono tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300 font-sans">
              {description}
            </p>
          </div>

          {children ? (
            <div className="max-w-2xl space-y-6 text-base leading-8 text-slate-700 dark:text-slate-300 font-sans">
              {children}
            </div>
          ) : null}
        </section>

        <aside className="relative h-80 w-full flex-none overflow-hidden bg-slate-200 md:h-auto md:w-[30%]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </aside>
      </div>
    </main>
  );
}
