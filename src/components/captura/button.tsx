interface ButtonProps {
    text: string;
    variant?: 'primary' | 'white';
}

export default function ButtonRegistrar({ text, variant = 'primary' }: ButtonProps) {
    const classes = variant === 'primary'
        ? "bg-karina-primary text-white hover:bg-karina-secundary"
        : "bg-white text-karina-secundary hover:bg-gray-200";

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`${classes} font-bold rounded-xl w-full max-w-lg py-4 mt-8 transition-all`}
        >
            {text}
        </button>
    );
}