import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  kic-nav">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            📒 Notes App
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Notas 🗒️
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-products">
                  + Notas
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Agrega Notas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/add-base">
                      Agrega Base de Helado
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/add-insumo">
                      Agrega Insumo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/add-product">
                      Agrega Producto
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Agrega Otro
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
}
