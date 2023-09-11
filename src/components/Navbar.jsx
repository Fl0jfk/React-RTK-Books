import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <header>
            <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white justify-content-between align-items-center">
                <h4 className="mr-md-auto">
                    <a href="/" className="text-decoration-none text-white">BOOKS</a>
                </h4>
                <nav className="btn-group">
                    <Link className="btn btn-light" to="/">Accueil</Link>
                    <Link className="btn btn-light" to="/search">Rechercher</Link>
                </nav>

            </div>
        </header>
    )
}

export default Navbar;