import { DATA } from "../data";

/** Blinking block caret - a terminal cursor, replacing the cliche pulsing dot. */
function Caret() {
  return (
    <span
      aria-hidden="true"
      className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-accent motion-safe:animate-[caretBlink_1.05s_step-end_infinite]"
    />
  );
}

/**
 * Availability shown as a developer command prompt rather than the generic
 * "green dot + Available for work" pill. `hero` = full multi-line block,
 * `nav` = compact single line for the navbar / cards.
 */
export default function StatusPrompt({
  variant = "hero",
}: {
  variant?: "hero" | "nav";
}) {
  const { label, detail } = DATA.profile.availability;

  if (variant === "nav") {
    return (
      <span className="inline-flex items-center font-mono text-xs text-foreground-muted">
        <span aria-hidden="true" className="mr-1 text-accent">
          ~$
        </span>
        {label}
        <Caret />
      </span>
    );
  }

  return (
    <div
      role="status"
      aria-label={`${label}: ${detail}`}
      className="inline-flex flex-col gap-0.5 text-left font-mono text-sm"
    >
      <span aria-hidden="true" className="text-foreground-subtle">
        <span className="text-accent">vincent@cebu</span>:~$ whoami --status
      </span>
      <span aria-hidden="true" className="text-foreground">
        <span className="text-accent">&rarr;</span> {label}{" "}
        <span className="text-foreground-muted">&middot; {detail}</span>
        <Caret />
      </span>
      {/* Blank line intentionally preserves the original 3-line height so
          removing the context comment doesn't shift the hero layout up. */}
      <span aria-hidden="true" className="mt-0.5 text-xs">
        &nbsp;
      </span>
    </div>
  );
}
