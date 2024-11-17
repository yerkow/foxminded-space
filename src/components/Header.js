function Header() {
    return (
        <header className="clear d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img width={56} height={62} src="/svg/logo.svg" alt="Logo"/>
                <div>
                    <h3 className="text-uppercase">Foxminded<br/>Studio</h3>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-5">
                    <button>
                        <img width={18} height={18} src="/svg/search.svg" alt="Search"/>
                    </button>
                </li>
                <li>
                    <button>
                        <span className="text-uppercase mr-5">Меню</span>
                        <img width={28} height={10} src="/svg/menu.svg" alt="Menu"/>
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header;