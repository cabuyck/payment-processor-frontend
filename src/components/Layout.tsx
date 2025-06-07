import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Pay
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:underline">
                Admin
              </Link>
            </li>
            <li className="ml-auto">
              <Link to="/terms" className="hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
