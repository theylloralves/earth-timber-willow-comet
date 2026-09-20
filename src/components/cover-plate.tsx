import { useEffect, useState } from "react";
import type { CoverTone } from "@/lib/games";
import { cn } from "@/lib/utils";

const WIKI_ALIASES: Record<string, string> = {
  "Marvel's Spider-Man 2": "Marvel's Spider-Man 2",
  "Marvel's Spider-Man: Miles Morales": "Spider-Man: Miles Morales",
  "God of War Ragnarok": "God of War Ragnarök",
  "Final Fantasy VII Rebirth": "Final Fantasy VII Rebirth",
  "Final Fantasy XVI": "Final Fantasy XVI",
  "Grand Theft Auto VI": "Grand Theft Auto VI",
  "DOOM: The Dark Ages": "Doom: The Dark Ages",
  "Clair Obscur: Expedition 33": "Clair Obscur: Expedition 33",
  "Kingdom Come: Deliverance II": "Kingdom Come: Deliverance II",
};

function wikiTitle(title: string) {
  return WIKI_ALIASES[title] ?? title;
}

export function CoverPlate({
  title,
  cover,
  className,
}: {
  title: string;
  cover: CoverTone;
  className?: string;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const page = encodeURIComponent(wikiTitle(title).replace(/ /g, "_"));

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${page}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error("cover-not-found");
        return response.json();
      })
      .then((data: { thumbnail?: { source?: string } }) => {
        const source = data.thumbnail?.source;
        if (!source) throw new Error("cover-not-found");
        setImageUrl(source.replace(/\\/g, ""));
      })
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });

    return () => controller.abort();
  }, [title]);

  const mark = title
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className={cn(
        "cover-plate relative overflow-hidden rounded-[var(--radius-md)]",
        `cover-${cover}`,
        className,
      )}
      aria-label={`${title} cover`}
    >
      {imageUrl && !failed ? (
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.03]"
          onError={() => setFailed(true)}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-white/10" />
      <div className="relative flex h-full min-h-36 flex-col justify-between p-3 text-white">
        <div className="flex items-center justify-between gap-3">
          <span className="receipt-chip">PS5</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] opacity-80">
            {imageUrl && !failed ? "cover" : "receipt"}
          </span>
        </div>
        <div>
          <span className="font-display text-3xl font-medium leading-none tracking-tight drop-shadow-sm sm:text-4xl">
            {mark}
          </span>
          <p className="mt-2 line-clamp-2 max-w-[90%] font-mono text-[9px] uppercase tracking-[0.1em] text-white/80">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
