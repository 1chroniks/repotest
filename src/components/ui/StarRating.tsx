interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export default function StarRating({
  rating,
  maxStars = 5,
  size = 'sm',
  showValue = false,
}: StarRatingProps) {
  const sizeClasses = { sm: 'w-3.5 h-3.5', md: 'w-5 h-5', lg: 'w-6 h-6' };

  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: maxStars }).map((_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <svg
            key={i}
            className={`${sizeClasses[size]} flex-shrink-0`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <defs>
              {partial && (
                <linearGradient id={`partial-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset={`${(rating - Math.floor(rating)) * 100}%`} stopColor="#f59e0b" />
                  <stop offset={`${(rating - Math.floor(rating)) * 100}%`} stopColor="#374151" />
                </linearGradient>
              )}
            </defs>
            <path
              fill={filled ? '#f59e0b' : partial ? `url(#partial-${i})` : '#374151'}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        );
      })}
      {showValue && (
        <span className="ml-1 text-sm text-white/60">{rating.toFixed(1)}</span>
      )}
    </span>
  );
}
