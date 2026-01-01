type Props = {
  statusClass: string;
  isMissing?: boolean;
  isAbutment?: boolean;
};

export function ToothSvg({ statusClass, isMissing, isAbutment }: Props) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={`w-10 h-12 stroke-[3] ${statusClass}`}
    >
      <path d="M20,30 Q10,30 10,50 L15,100 Q30,90 50,100 Q70,90 85,100 L90,50 Q90,30 80,30 Q70,10 50,10 Q30,10 20,30 Z" />

      {isAbutment && (
        <circle cx="50" cy="50" r="15" className="fill-white/50" />
      )}

      {isMissing && (
        <path
          d="M20 20 L80 100 M80 20 L20 100"
          stroke="white"
          strokeWidth="6"
        />
      )}
    </svg>
  );
}
