import { useCallback } from "react";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "draggable"> & {
  overlay?: boolean;
};
const NoSaveImage = ({ overlay = true, style, ...props }: Props) => {
  const stopContext = useCallback((e: React.MouseEvent) => e.preventDefault(), []);
  const stopDrag = useCallback((e: React.DragEvent) => e.preventDefault(), []);

  return (
    <div
      onContextMenu={stopContext}
      onDragStart={stopDrag}
      className="relative select-none"
      style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
    >
      <Image
        {...props}
        draggable={false}
        onContextMenu={stopContext}
        alt={props.alt}
        style={{ ...style, pointerEvents: overlay ? "none" : "auto" }}
      />
      {overlay && <div className="absolute inset-0" aria-hidden="true" />}
    </div>
  );
};
export default NoSaveImage;
