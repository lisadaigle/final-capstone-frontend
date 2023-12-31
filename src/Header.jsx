import { useState } from "react";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      {/* <nav className="navbar navbar-expand-lg bg-light"> */}
      <nav className="navbar navbar-expand-lg navbar-green">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ fontSize: "36px", fontWeight: "bold" }}>
            TRELLIS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/plants">
                  PLANT REPOSITORY
                </a>
              </li>
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      LOGIN
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      SIGN UP
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/mygarden">
                      MY GARDEN
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/hello">
                      DASHBOARD
                    </a>
                  </li>

                  <li className="nav-d-flex">
                    <LogoutLink />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
