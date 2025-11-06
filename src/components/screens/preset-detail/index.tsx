"use client";

import { useCallback } from "react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IPreset } from "@/types/preset";

const PresetScreen = ({ preset }: { preset: IPreset }) => {
  const stopContext = useCallback((e: React.MouseEvent) => e.preventDefault(), []);
  const stopDrag = useCallback((e: React.DragEvent) => e.preventDefault(), []);

  if (!preset) return notFound();

  return (
    <Container className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-10 sm:gap-6 lg:grid-cols-2">
        <div>
          <div className="relative">
            <img
              onContextMenu={stopContext}
              onDragStart={stopDrag}
              alt={preset.name}
              src={preset.src.src}
              className="mx-auto h-auto w-[350px]"
            />
          </div>

          <div className="mx-auto mt-16 grid max-w-xl gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-bold">Total Price</span>
              <span>CA$ {preset.price}</span>
            </div>

            <Button
              className="h-[48px] w-full text-base"
              onClick={() => window.open(preset.purchaseLink, "_blank")}
            >
              BUY NOW
            </Button>
          </div>
        </div>

        <div>
          <div dangerouslySetInnerHTML={{ __html: preset.html }} />
        </div>
      </div>
    </Container>
  );
};

export default PresetScreen;
