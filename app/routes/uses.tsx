export function meta() {
  return [{ title: "Uses" }];
}

export default function Uses() {
  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
          Uses
        </h1>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          A quick summary of tools, hardware, and workflows.
        </p>
      </div>
    </main>
  );
}
