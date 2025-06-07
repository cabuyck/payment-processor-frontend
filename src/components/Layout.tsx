import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Pay</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
