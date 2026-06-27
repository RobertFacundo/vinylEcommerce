type SectionH1Props = {
    title: string
}

const SectionH1 = ({ title }: SectionH1Props) => {
    return (
        <h1 className="font-[family-name:var(--font-alegreya)] text-4xl md:text-6xl font-light ">{title}</h1>
    )
};

export default SectionH1;