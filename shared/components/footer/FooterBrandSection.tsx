import Image from "next/image";
import Logo from '@/shared/assets/images/ui/logo.png'
import Link from "next/link";
import FooterLinkColumn from "./FooterLinkColumn";

type linksProps = {
    title: string,
    items: string[],
}
const links: linksProps[] = [
    { title: "SHOP", items: ["All vinyls", "New Arrivals", "Gift Cards"] },
    { title: "INFO", items: ["About us", "Shipping", "Returns"] },
    { title: "HELP", items: ["FAQ", "Contact", "Track Order"] },
    { title: "FOLLOW", items: ["Instagram", "Facebook", "Spotify"] }
]

const FooterBrandSection = () => {
    return (
        <div className="flex md:flex-row flex-col justify-around gap-12 pt-10 border-t border-black/10">

            {/* Brand */}
            <div className="flex flex-col gap-3">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Vinyl Store Logo"
                        width={48}
                        height={48}
                        className="w-12 md:w-16 h-auto"
                    />
                </Link>

                <p className="text-sm opacity-70 font-[family-name:var(--font-geist-mono)]">
                    Designed & Coded by{" "}
                    <span className="text-[#C89268] font-medium">
                        Facundo Robert
                    </span>
                </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {links.map((link) => (
                    <FooterLinkColumn
                        key={link.title}
                        title={link.title}
                        items={link.items}
                    />
                ))}
            </div>
        </div>
    )
};

export default FooterBrandSection;