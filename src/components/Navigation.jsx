import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ activeIndex, setActiveIndex }) => {
    const location = useLocation();

    const navItems = [
        { name: "1", path: "/" },
        { name: "2", path: "/about" },
        { name: "3", path: "/services" },
        { name: "4", path: "/works" },
    ];

    React.useEffect(() => {
        const currentIndex = navItems.findIndex(item => item.path === location.pathname);
        if (currentIndex !== -1) {
            setActiveIndex(currentIndex);
        }
    }, [location, navItems, setActiveIndex]);

    return (
        <footer>
            <nav>
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`nav-link ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </footer>
    );
};

export default NavBar;
