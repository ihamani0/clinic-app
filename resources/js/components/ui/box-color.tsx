

interface BoxColorProps {
color?: string;
size?: string; // optional (e.g., "w-4 h-4")
rounded?: string; // optional rounded style
}

export default function BoxColor({ color = "#ccc", size = "w-4 h-4", rounded = "rounded" }: BoxColorProps) {
  return (
    <div
        className={`${size} ${rounded} border`}
        style={{ backgroundColor: color }}
        >
    </div>
  )
}
