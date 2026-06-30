import NewsletterSection from "./NewsletterSection";
import FooterBrandSection from "./FooterBrandSection";

const Footer = () => {
    return (
        <footer className="min-h-[50vh] flex flex-col bg-[#e8cbb589] px-6 md:px-12 py-10 gap-1">
            <NewsletterSection />
            <FooterBrandSection />
        </footer>
    )
};

export default Footer;