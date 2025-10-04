import { useRouter } from "next/navigation";

import NoSaveImage from "@/components/no-save-image";
import { cn } from "@/lib/utils";
import { IPhoto } from "@/types/photo";

const Masonry = ({ items, className }: { items: IPhoto[]; className?: string }) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "xs:columns-2 columns-2 gap-6 sm:columns-2 md:columns-3 lg:columns-4",
        "[column-fill:balance]",
        className
      )}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="group border-border bg-muted/30 relative mb-6 cursor-pointer overflow-hidden shadow-sm select-none not-last-of-type:break-inside-avoid"
          onClick={() => {
            router.push(`/photo/${item.id}`);
          }}
        >
          <NoSaveImage
            style={{ width: "100%", height: "auto" }}
            alt={item.name ?? `car ${i + 1}`}
            src={item.src}
            placeholder="blur"
            quality={100}
            sizes="100vw"
          />

          <div
            className="pointer-events-none absolute inset-0 transition-colors duration-200 group-hover:bg-black/50"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 top-0 flex gap-2 p-3 text-white opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100 sm:p-4">
            <div className="inline-block rounded bg-black px-2 py-1 text-xs leading-tight font-medium shadow-2xl shadow-white">
              {item.name}
            </div>
            <div className="inline-block rounded bg-black px-2 py-1 text-xs leading-tight font-medium shadow-2xl shadow-white">
              {item.dimension}
            </div>
            <div className="inline-block rounded bg-black px-2 py-1 text-xs leading-tight font-medium shadow-2xl shadow-white">
              {item.project}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
