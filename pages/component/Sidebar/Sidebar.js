import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
function Sidebar(props) {
  return (
    <>
      <div className="wrapper h4 p-2 col-sm-2 col-md-2 text-primary sidebar">
        <nav id="sidebar text-primary">
          <ul className="list-unstyled components">
            <li>
              <Link href="product/1" className="text-decoration-none">
                Product 1
              </Link>
            </li>
            <li>
              <Link href="product/2" className="text-decoration-none ">
                Product 2
              </Link>
            </li>
            <li>
              <Link href="product/3" className="text-decoration-none  ">
                Product 3
              </Link>
            </li>

            <li>
              <Link href="product/4" className="text-decoration-none  ">
                Product 4
              </Link>
            </li>
            <li>
              <Link href="product/5" className="text-decoration-none  ">
                Product 5
              </Link>
            </li>

            <li>
              <Link href="product/6" className="text-decoration-none  ">
                Product 6
              </Link>
            </li>

            <li>
              <Link href="product/7" className="text-decoration-none  ">
                Product 7
              </Link>
            </li>

            <li>
              <Link href="product/8" className="text-decoration-none  ">
                Product 8
              </Link>
            </li>

            <li>
              <Link href="product/9" className="text-decoration-none  ">
                Product 9
              </Link>
            </li>

            <li>
              <Link href="product/10" className="text-decoration-none  ">
                Product 10
              </Link>
            </li>

            <li>
              <Link href="product/11" className="text-decoration-none  ">
                Product 11
              </Link>
            </li>

            <li>
              <Link href="product/12" className="text-decoration-none  ">
                Product 12
              </Link>
            </li>

            <li>
              <Link href="product/13" className="text-decoration-none  ">
                Product 13
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
