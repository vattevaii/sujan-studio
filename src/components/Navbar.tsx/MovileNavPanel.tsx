import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    openNavbar: () => void;
}

const MobileNavPanel = ({ className = "", openNavbar }: Props) => {
    return <div className={className + " bg-project-100 h-24 w-full px-8 py-4 flex justify-between items-center"}>
        <Link href="/" className="brand-logo w-[3/4] h-full">
            <Image width="300" height="300"
                priority={true}
                className="relative w-auto h-full overflow-hidden shrink-0"
                src="/webp/logo.webp"
                alt={"Sujan Studio"}
            />
        </Link>
        <button onClick={openNavbar} className="h-full w-10">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 7.5H0V6H24V7.5ZM24 19.5H0V18H24V19.5ZM24 13.488H0V12H24V13.488Z" fill="#DCEAFD" />
            </svg>
        </button>
    </div>
}

export default MobileNavPanel;