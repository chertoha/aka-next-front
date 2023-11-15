// "use client";
import { useParams, useSearchParams } from "next/navigation";

const ProductPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const res = searchParams.get("search");

  // console.log("searchParams", res);

  return <div>ProductPage, id={params.id}</div>;
};

export default ProductPage;
