const PRIMARY_NODES = [
  { label: "Client", meta: "HTTP" },
  { label: "REST API", meta: "JSON" },
  { label: "Spring Boot", meta: "runtime" },
  { label: "Security", meta: "authn / authz" },
  { label: "Service Layer", meta: "business rules" },
  { label: "PostgreSQL", meta: "persistence" },
];

const SIDE_NODES = [
  { label: "Redis", meta: "cache" },
  { label: "WebSockets", meta: "events" },
  { label: "Docker", meta: "runtime env" },
];

/**
 * Stylized backend request-flow visualization used in the hero.
 * Pure CSS/SVG, reflows to a single column on small screens.
 */
export function BackendFlowVisual() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-5 shadow-[var(--shadow-elevated)] sm:p-7"
      role="img"
      aria-label="Diagram of a backend request flow: client to REST API to Spring Boot, through security and the service layer into PostgreSQL, with Redis, WebSockets and Docker attached."
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[0.65rem] tracking-widest text-subtle">
          REQUEST&nbsp;FLOW
        </span>
        <span className="flex items-center gap-2 font-mono text-[0.65rem] text-subtle">
          <span className="node-pulse size-1.5 rounded-full bg-primary" />
          live
        </span>
      </div>

      <ol className="relative mt-5 space-y-2.5">
        {PRIMARY_NODES.map((node, i) => (
          <li key={node.label} className="relative">
            <div className="group flex items-center justify-between rounded-xl border border-border bg-surface-2/70 px-4 py-3 transition-colors hover:border-primary/40">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.65rem] text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground">{node.label}</span>
              </div>
              <span className="font-mono text-[0.65rem] text-subtle">{node.meta}</span>
            </div>
            {i < PRIMARY_NODES.length - 1 ? (
              <svg
                aria-hidden
                viewBox="0 0 2 12"
                preserveAspectRatio="none"
                className="mx-auto h-2.5 w-px"
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="12"
                  className="flow-line stroke-primary"
                  strokeWidth="2"
                  style={{ animationDelay: `${i * 180}ms` }}
                />
              </svg>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="relative mt-5 grid grid-cols-3 gap-2">
        {SIDE_NODES.map((node) => (
          <div
            key={node.label}
            className="rounded-lg border border-border bg-background/50 px-3 py-2.5 text-center transition-colors hover:border-primary/40"
          >
            <p className="font-mono text-[0.7rem] text-foreground">{node.label}</p>
            <p className="mt-0.5 font-mono text-[0.6rem] text-subtle">{node.meta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
