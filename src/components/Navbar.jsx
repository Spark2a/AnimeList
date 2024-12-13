 {/* Navbar */}
 import { Link } from "react-router-dom";

 function Navbar() {
 
    return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 <div className="container">
   <Link className="navbar-brand" to="/">
     MyAnimeList
   </Link>
   <div>
     <ul className="navbar-nav me-auto">
       <li className="nav-item">
         <Link className="nav-link" to="/">
           Home
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/list">
           List
         </Link>
       </li>
     </ul>
   </div>
 </div>
</nav>
    );
    }
export default Navbar;
