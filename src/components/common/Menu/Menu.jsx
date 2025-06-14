import './Menu.css'
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar  

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/src/components/pages/Home/Home.jsx">
                                Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/src/components/pages/Analitica/Analitica.jsx">
                                    Analitica
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/src/components/pages/Api/Api.jsx">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}