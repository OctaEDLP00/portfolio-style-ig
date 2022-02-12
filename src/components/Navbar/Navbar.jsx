export default function Navbar() {
  return (
    <div className="navigation">
      <div className="logo">
        <a className="no-underline" href="#">
          Octavio Caro
        </a>
      </div>
      <div className="navigation-search-container">
        <input
          className="search-field"
          type="text"
          placeholder="🔍 Buscar" />
        <div className="search-container">
          <div className="search-container-box">
            <div className="search-results"></div>
          </div>
        </div>
      </div>
      <div className="navigation-icons">
        <a
          href=""
          className="navigation-link"
        >
          <i className="fas fa-network-wired light-blue"></i>
        </a>
        <a
          href=""
          className="navigation-link"
        >
          <i className="far fa-heart red"></i>
        </a>
        <a
          href=""
          className="navigation-link"
        >
          <i className="far fa-user orange"></i>
        </a>
        <a
          href=""
          id="signout"
          className="navigation-link"
        >
          <i className="fas fa-code cyan"></i>
        </a>
      </div>
    </div>

    // <nav className="nav">
    //   <div className="nav__container">
    //     <div className="nav__logo">
    //       <a href="/">
    //         
    //       </a>
    //     </div>

    //     <div className="nav__search">
    //       <input
    //         aria-label="Buscar Entrada"
    //         autoCapitalize="none"
    //         className="input__nav"
    //         type="text"
    //         placeholder="🔍 Buscar"
    //       />
    //     </div>

    //     <div className="nav__menu">
    //       <ul className="ul__nav">
    //         <li>
    //           <a
    //             href="#About"
    //             className="links__nav"
    //           >
    //             <i className="far fa-user"></i>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#Hobbies"
    //             className="links__nav"
    //           >
    //             <i className="far fa-heart"></i>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#Proyects"
    //             className="links__nav"
    //           >
    //             <i classNameName=""></i>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#Lenguajes"
    //             className="links__nav"
    //           >
    //             <i className=""></i>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

