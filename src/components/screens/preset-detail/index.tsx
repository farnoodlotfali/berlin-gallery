"use client";

import { useCallback } from "react";
import { notFound, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IPreset } from "@/types/preset";

const PresetScreen = ({ preset }: { preset: IPreset }) => {
  const router = useRouter();

  const stopContext = useCallback((e: React.MouseEvent) => e.preventDefault(), []);
  const stopDrag = useCallback((e: React.DragEvent) => e.preventDefault(), []);

  if (!preset) return notFound();

  return (
    <Container className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="relative">
          <img
            onContextMenu={stopContext}
            onDragStart={stopDrag}
            alt={preset.name}
            src={preset.src.src}
            className="h-auto w-[350px] mx-auto"
          />
        </div>

        <div className="flex h-full flex-col">
          <div className="mb-10 grid gap-8">
            <div dangerouslySetInnerHTML={{ __html: preset.html }} />

            <div className="flex flex-col gap-1">
              <span className="font-bold">Total Price</span>
              <span>CA$ {preset.price}</span>
            </div>
          </div>
          <Button
            className="mt-10 h-[48px] w-full text-base md:mt-28"
            onClick={() => window.open(preset.purchaseLink, "_blank")}
          >
            BUY NOW
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default PresetScreen;
