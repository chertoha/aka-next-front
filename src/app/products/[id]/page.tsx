"use client";

import { usePathname, useSearchParams } from "next/navigation";

const ProductPage = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  console.log(pathname);
  console.log(params);

  return <div>ProductPage</div>;
};

export default ProductPage;
