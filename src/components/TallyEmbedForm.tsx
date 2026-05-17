"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { Loader2 } from "lucide-react";
import TallyEmbed from "tally-embed";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/** Springer application — matches https://tally.so/r/9qRJ1E embed settings */
export const SPRINGER_TALLY_EMBED_URL =
  "https://tally.so/embed/9qRJ1E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

const LOAD_TIMEOUT_MS = 12_000;

export type TallyEmbedFormProps = {
  embedUrl?: string;
  title?: string;
  /** Initial iframe height before Tally dynamicHeight adjusts */
  minHeight?: number;
  className?: string;
  iframeClassName?: string;
};

export function TallyEmbedForm({
  embedUrl = SPRINGER_TALLY_EMBED_URL,
  title = "Springer application form",
  minHeight = 500,
  className,
  iframeClassName,
}: TallyEmbedFormProps) {
  const labelId = useId();
  const [isReady, setIsReady] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  const markReady = useCallback(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      try {
        await TallyEmbed.loadEmbeds();
      } catch {
        if (!cancelled) {
          setScriptError(true);
          document
            .querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])')
            .forEach((frame) => {
              if (frame.dataset.tallySrc) frame.src = frame.dataset.tallySrc;
            });
        }
      }
    };

    void init();

    const timeout = window.setTimeout(() => {
      if (!cancelled) markReady();
    }, LOAD_TIMEOUT_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [embedUrl, markReady]);

  return (
    <div
      className={cn("relative mx-auto w-full max-w-[700px]", className)}
      style={{ minHeight }}
      aria-busy={!isReady}
      aria-labelledby={labelId}
    >
      <span id={labelId} className="sr-only">
        {title}
      </span>

      {!isReady && (
        <div
          className="absolute inset-0 z-10 flex min-h-[inherit] flex-col justify-center gap-5 rounded-xl border border-border bg-card/95 p-6 shadow-card backdrop-blur-sm sm:p-8"
          aria-hidden
        >
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Loader2 className="h-5 w-5 shrink-0 animate-spin text-sage-deep" aria-hidden />
            <span className="text-sm font-medium tracking-wide">Loading application form…</span>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-3 w-2/5 rounded-sm" />
            <Skeleton className="h-10 w-full rounded-sm" />
            <Skeleton className="h-10 w-full rounded-sm" />
            <Skeleton className="h-10 w-4/5 rounded-sm" />
            <Skeleton className="h-24 w-full rounded-sm" />
            <Skeleton className="h-10 w-1/3 rounded-sm" />
          </div>
        </div>
      )}

      <div
        className={cn(
          "w-full transition-opacity duration-500 ease-out",
          isReady ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ minHeight }}
      >
        <iframe
          data-tally-src={embedUrl}
          loading="lazy"
          width="100%"
          height={minHeight}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title={title}
          onLoad={markReady}
          className={cn(
            "springer-tally-iframe block w-full max-w-full overflow-hidden border-0",
            iframeClassName,
          )}
          style={{ margin: "0 auto", display: "block" }}
        />
      </div>

      {scriptError && isReady && (
        <p className="mt-3 text-center text-xs text-muted-foreground" role="status">
          Form loaded in fallback mode. If anything looks wrong, please refresh the page.
        </p>
      )}
    </div>
  );
}
