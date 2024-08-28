import { useState } from "react";
import formatCurrency from "../utils/formatcurrency";

function Navbar() {
  const [token, setToken] = useState(false);
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          🍕 Home
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔓 Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔒 Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔐 Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔐 Register
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>

        <button className="btn btn-outline-primary">
          🛒 Total: {formatCurrency(total)}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
