interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-white/70 max-w-[100px]">{label}</div>
    </div>
  );
}