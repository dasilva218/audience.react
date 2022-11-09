import { Link } from "@inertiajs/inertia-react";
import React from "react";

function NavFront() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container px-8">
                <Link className="navbar-brand" href="/accueil">
                    <h2>Audiences</h2>
                </Link>
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
                <div
                // className="collapse navbar-collapse"
                // id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/accueil">
                                <a className="nav-link">Accueil</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                href={route("formulaire")}
                            >
                                Audience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("about")}>
                                A propos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("help")}>
                                Aide
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("contact")}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavFront;
