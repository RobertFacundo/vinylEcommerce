type FooterLinkProps = {
    title: string;
    items: string[];
};

const FooterLinkColumn = ({ title, items }: FooterLinkProps) => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-tight">
                {title}
            </h3>

            {items.map((item) => (
                <p
                    key={item}
                    className="text-sm opacity-70 font-[family-name:var(--font-geist-mono)] hover:opacity-100 cursor-pointer transition"
                >
                    {item}
                </p>
            ))}
        </div>
    );
};

export default FooterLinkColumn;