

interface BadgeProps {
  text: string;
  variant?: 'blue' | 'green' | 'red' | 'yellow' | 'gray';
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  blue: 'bg-primary-500/20 text-primary-500 border-primary-500/30',
  green: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  red: 'bg-red-500/20 text-red-400 border-red-500/30',
  yellow: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  gray: 'bg-white/10 text-white/70 border-white/20',
};

export default function Badge({ text, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variantClasses[variant]} ${className}`}
    >
      {text}
    </span>
  );
}
