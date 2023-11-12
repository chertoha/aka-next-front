import Link from "next/link";
import React from "react";

const SubCategory = () => {
  return (
    <div>
      <Link href={`/products/:test-product-id`}>Product-test</Link>
    </div>
  );
};

export default SubCategory;
