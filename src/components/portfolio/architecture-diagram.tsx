type Layer = { label: string; meta: string };

/**
 * Horizontal (desktop) / vertical (mobile) layered architecture visualization
 * used on project case-study pages.
 */
export function ArchitectureDiagram({
  layers,
  side,
  caption,
}: {
  layers: Layer[];
  side: Layer[];
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-surface/50 p-5 sm:p-7">
      <div className="grid gap-2 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
        {layers.map((layer, i) => (
          <div key={layer.label} className="flex items-center gap-2 md:flex-col md:gap-2">
            <div className="w-full rounded-xl border border-border bg-surface-2/70 px-3 py-3 text-center transition-colors hover:border-primary/40">
              <p className="text-sm font-medium text-foreground">{layer.label}</p>
              <p className="mt-1 font-mono text-[0.6rem] text-subtle">{layer.meta}</p>
            </div>
            {i < layers.length - 1 ? (
              <svg aria-hidden viewBox="0 0 20 2" className="h-2 w-5 shrink-0 md:hidden">
                <line
                  x1="0"
                  y1="1"
                  x2="20"
                  y2="1"
                  className="flow-line stroke-primary"
                  strokeWidth="2"
                />
              </svg>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {side.map((node) => (
          <div
            key={node.label}
            className="rounded-lg border border-dashed border-border bg-background/40 px-3 py-2.5"
          >
            <p className="font-mono text-xs text-foreground">{node.label}</p>
            <p className="mt-0.5 font-mono text-[0.6rem] text-subtle">{node.meta}</p>
          </div>
        ))}
      </div>

      <figcaption className="mt-6 text-sm leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
