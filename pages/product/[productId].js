import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../component/Navigation";
import Review from "../component/Review/Review";
import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
 
  return (
    <>
      <Navigation /> 
      <Review />

      <h1 className="m-6">
        <div className="number">
          <style jsx>{`
            .number {
              color: blue;
            }
          `}</style>
        </div>
      </h1>
      <h1>
        <div class="container  ">
          <div class="row justify-content-md-center">
            <div class="col col-lg-5 text-warning ">
              Details about Product {productId}
            </div>
          </div>
          <div class="row"></div>
        </div>
      </h1> 
    </>
  );
}

export default ProductDetail;
