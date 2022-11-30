import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{justifyContent: "space-between !important"}}>
       <div>
        <img  className='align-items-md-stretch p={2}' src='https://www.eklakshya.com/assets/logo.png' width={120}/>
        </div>   
        <div className="d-flex justify-content-start">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className=" nav-link text-light" href="/blog">
                <h2>Blog Page |</h2>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" href="/product">
                <h2>Product Page |</h2>
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" href="/uploadform">
                <h2>Upload |</h2>
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>

<div className="container" >

</div>
    </>
  );
}

export default Navigation;
