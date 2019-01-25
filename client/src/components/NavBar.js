import React from "react";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
            <button onClick={() => props.navEventHandler('list')} className= {'btn' + (props.slectedPage === 'list' ? 'btn-active' : '')} type='button'>List</button>
            <button className="btn btn-outline-success" type="button">Add New</button>
        </form>
        </nav>
    ) 
}

export default NavBar;
