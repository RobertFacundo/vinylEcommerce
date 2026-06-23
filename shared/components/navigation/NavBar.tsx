import Link from "next/link";
import Image from "next/image";
import Logo from '@/shared/assets/images/ui/logo.png'
import { FaOpencart } from "react-icons/fa6";

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 flex items-center w-full px-4 md:px-10 pt-4 bg-transparent">
            <div className="flex-1">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Vinyl Store Logo"
                        width={48}
                        height={48}
                        className="w-8 md:w-16 h-auto"  
                    />
                </Link>
            </div>
            <div className="flex-1 flex justify-center">
                <Link href="/shop">Shop</Link>
            </div>
            <div className="flex-1 flex justify-end">
                <Link href="/cart">
                    <FaOpencart className="w-6 h-6 md:w-8 md:h-8 text-white"/>
                </Link>
            </div>
        </nav>
    )
};

export default NavBar;