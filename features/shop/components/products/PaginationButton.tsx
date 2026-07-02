type PaginationButtonProps = {
    children: React.ReactNode;
    icon: React.ReactNode;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    onClick: () => void;
}

const PaginationButton = ({
    children,
    icon,
    iconPosition = 'left',
    disabled = false,
    onClick,
}: PaginationButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="
                flex items-center gap-2
                rounded-md
                border border-[#C89268]
                px-4 py-2
                text-sm font-medium
                transition-all duration-300
                hover:bg-[#C89268]
                hover:text-white
                disabled:opacity-40
                disabled:cursor-not-allowed
                disabled:hover:bg-transparent
                disabled:hover:text-inherit
                cursor-pointer
            "
        >
            {iconPosition === "left" && icon}

            {children}

            {iconPosition === "right" && icon}
        </button>
    )
};

export default PaginationButton;