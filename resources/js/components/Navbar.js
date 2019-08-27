import React from 'react'

const Navbar = ({active, changeData}) => (
    <nav id="navbar" className="navbar-container">
        <a className={(active == 'active') ? 'active nav-item' : 'nav-item'} onClick={() => changeData('active')}>
            <h3>Proyectos en Curso</h3>
        </a>
        <a className={(active == 'stand-by') ? 'active nav-item' : 'nav-item'} onClick={() => changeData('stand-by')}>
            <h3>Proyectos en Stand-By</h3>
        </a>
        <a className={(active == 'ideas') ? 'active nav-item' : 'nav-item'} onClick={() => changeData('ideas')}>
            <h3>Ideas</h3>
        </a>
        <a className={(active == 'finished') ? 'active nav-item' : 'nav-item'} onClick={() => changeData('finished')}>
            <h3>Proyectos Finalizados</h3>
        </a>
    </nav>
)

export default Navbar