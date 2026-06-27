type SectionTitleProps = {
    title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <span className="mb-5 text-[#C89268] text-sm font-semibold">{title}</span>
    )
};

export default SectionTitle;