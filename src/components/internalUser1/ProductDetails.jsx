import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      This is product details page
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/products/${id}/users`)}
      >
        <div>Product {id} : "Click here to go to users page"</div>
      </div>
    </div>
  );
};

export default ProductDetails;
