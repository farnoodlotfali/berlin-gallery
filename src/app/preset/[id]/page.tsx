import { notFound } from "next/navigation";

import PresetScreen from "@/components/screens/preset-detail";
import { PRESETS } from "@/lib/presets";

export async function generateStaticParams() {
  return PRESETS.map((img) => ({
    id: String(img.id),
  }));
}

export default async function PresetPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const preset = PRESETS.find((img) => String(img.id) === id);

  if (!preset) return notFound();

  return <PresetScreen preset={preset} />;
}
