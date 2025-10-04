import { notFound } from "next/navigation";

import PhotoScreen from "@/components/screens/photo-screen";
import { IMAGES } from "@/lib/images";

export async function generateStaticParams() {
  return IMAGES.map((img) => ({
    id: String(img.id),
  }));
}

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = IMAGES.find((img) => String(img.id) === id);

  if (!photo) return notFound();

  return <PhotoScreen photo={photo} />;
}
