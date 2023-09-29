

const NavBar = () => {


    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About Us', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/contact', name: 'Contact Us', id: 5 }
    ];


    return (
        <nav>
            <ul className="md:flex gap-10 justify-center my-4 font-semibold text-lg ">
                {
                    routes.map(route => <li className="hover:text-gray-500" key={route.id}>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;