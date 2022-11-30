import Navigation from "../../../component/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const reviewId = router.query.reviewId;
  const productId = router.query.productId;

  return (
    <>
      <Navigation />
      <h1>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-4 text-warning"> Product - {productId} </div>
            <div className="col col-lg-4 text-warning ">
              &nbsp; Review - {reviewId}
            </div>
          </div>
        </div>
      </h1>
    </>
  );
}

export default Review;
