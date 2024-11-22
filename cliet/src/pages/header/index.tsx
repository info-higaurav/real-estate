import { Menu } from "lucide-react";

export default function Header() {
    const navItem = [
        { label: "Home", path: "/" },
        { label: "Projects", path: '/projects' },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },

    ]
    return (
        <nav className="flex justify-center items-center border">
            <div className="wrapper w-full max-w-[1440px] py-3 px-3 md:py-5 ">
                <div className="nav-container flex justify-between items-center">
                    <section className="brand-info">
                        <h1 className="font-outfit font-bold text-xl">The Prime Infra</h1>
                    </section>

                    <section className="nav-items">
                        <Menu size={35} className="md:hidden" />
                        <div className="hidden md:flex gap-5 text-lg ">
                            {
                                navItem.map(
                                    (item, index) => <button key={index}>{item.label}</button>
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        </nav>
    )
}