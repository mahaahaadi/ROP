import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";

function Review(props) {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <div className="wrapper w-25 p-3 ">
        <Link
          href={"/product/" + productId + "/review/1"}
          className="text text-primary text-decoration-none"
        >
          <h3>Review 1</h3>
        </Link>
        <br />

        <Link
          href={"/product/" + productId + "/review/2"}
          className="text text-primary text-decoration-none"
        >
          <h3>Review 2</h3>
        </Link>
        <br />

        <Link
          href={"/product/" + productId + "/review/3"}
          className="text text-primary text-decoration-none"
        >
          <h3>Review 3</h3>
        </Link>
        <br />

        <br />
      </div>
    </>
  );
}

export default Review;
