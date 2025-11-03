import React, {useState, useEffect} from 'react'
import logo from '../assets/logo.svg'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    //prevemt body scroll when responsive
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [open]);

    const navLinks = [
        { href: "#home", label: "Home"},
        { href: "#about", label: "About Me"},
        { href: "#projects", label: "Projects"},
        { href: "#contact", label: "Contact"}
    ];

    return (
        <>
            <div className="background-overlay fixed inset-0 -z-10 pointer-events-none" aria-hidden="true"/>

            <header className="navbar-wrapper fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-md transition-all duration-300">
                <div className="navbar-content flex justify-between items-center px-8 py-3 md:py-4 w-full">
                    <a href="#home" className="navbar-logo" aria-label="Mary Strelline - Home">
                        <img src={logo} alt="Mary Strelline Logo" className="w-10 h-10 object-contain" />
                    </a>

                    <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
                        {navLinks.map((link) => (
                            <a key={link.href} 
                            href={link.href} 
                            className="hover:text-blue-400 transition duration-300">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <button onClick={() => setOpen(!open)}
                    className="md:hidden text-white focus:outline-none" aria-label="Toggle Menu">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={
                                open
                                    ? "M6 18L18 6M6 6l12 12" 
                                    : "M4 6h16M4 12h16M4 18h16" 
                                }
                            />
                        </svg>
                    </button>
                </div>

                {open && (
                    <div className="md:hidden bg-black/90 backdrop-blur-sm absolute top-full left-0 w-full py-4">
                        <nav className="flex flex-col items-center gap-4 text-white">
                            {navLinks.map((link) => (
                                <a key={link.href} 
                                href={link.href}
                                className="hover:text-blue-400 text-lg transition duration-300"
                                onClick={() => setOpen(false)}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}