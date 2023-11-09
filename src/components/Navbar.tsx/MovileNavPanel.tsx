import Image from "next/image";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    openNavbar: () => void;
}

const MobileNavPanel = ({ className = "", openNavbar }: Props) => {
    return <div className={className + " bg-project-100 h-24 w-full px-8 py-4 flex justify-between items-center"}>
        <a href="#" className="brand-logo w-[3/4] h-full">
            <Image width="300" height="300"
                priority={true}
                className="relative w-auto h-full overflow-hidden shrink-0"
                src="/webp/logo.webp"
                alt={"Sujan Studio"}
            />
        </a>
        <button onClick={openNavbar}>Open Navbar</button>
    </div>
}

export default MobileNavPanel;