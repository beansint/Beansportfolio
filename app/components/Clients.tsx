import { DATA } from "../data";

export default function Clients() {
  return (
    <section
      id="clients"
      aria-label="Worked with"
      className="py-10 border-y border-surface-border bg-surface/40"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">
            Worked with
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {DATA.clients.map((client) => (
              <li key={client.name}>
                {client.url ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-11 rounded-full border border-surface-border bg-surface text-sm font-medium text-foreground-muted hover:text-accent hover:border-accent/40 transition-colors ease-fluid"
                  >
                    {client.name}
                  </a>
                ) : (
                  <span className="inline-flex items-center px-4 py-2.5 min-h-11 rounded-full border border-surface-border bg-surface text-sm font-medium text-foreground-muted">
                    {client.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
