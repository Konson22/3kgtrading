export const iconFrames = [
    {
        back: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        front: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        accent: 'bg-primary',
        backClass: 'bg-primary/15',
    },
    {
        back: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)',
        front: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
        accent: 'bg-secondary',
        backClass: 'bg-secondary/15',
    },
    {
        back: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        front: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        accent: 'bg-primary',
        backClass: 'bg-primary/10',
    },
    {
        back: 'polygon(14% 0, 100% 0, 86% 100%, 0 100%)',
        front: 'polygon(12% 0, 100% 0, 88% 100%, 0 100%)',
        accent: 'bg-secondary',
        backClass: 'bg-secondary/15',
    },
];

export default function ClipPathIconFrame({ Icon, frame, index, align = 'center', className = '' }) {
    const alignClass = align === 'center' ? 'mx-auto mb-4 sm:mb-5' : 'shrink-0';

    return (
        <div
            className={`relative h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20 ${alignClass} ${className}`}
        >
            <div
                className={`absolute inset-0 translate-x-0.5 translate-y-0.5 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 sm:translate-x-1 sm:translate-y-1 sm:group-hover:translate-x-1.5 sm:group-hover:translate-y-1.5 ${frame.backClass}`}
                style={{ clipPath: frame.back }}
                aria-hidden
            />
            <div
                className="absolute inset-0 bg-gradient-brand opacity-90 transition duration-300 group-hover:scale-[1.03]"
                style={{ clipPath: frame.back, transform: 'rotate(8deg)' }}
                aria-hidden
            />
            <div
                className="relative flex h-full w-full items-center justify-center bg-primary-dark text-white shadow-md transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg"
                style={{ clipPath: frame.front }}
            >
                <Icon className="relative z-10 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.75} aria-hidden />
            </div>
            <span
                className={`absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center text-[9px] font-bold text-white shadow-sm sm:-right-1 sm:-top-1 sm:h-6 sm:w-6 sm:text-[10px] ${frame.accent}`}
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                aria-hidden
            >
                {String(index + 1).padStart(2, '0')}
            </span>
        </div>
    );
}
