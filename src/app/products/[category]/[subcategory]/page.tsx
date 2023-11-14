import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const SubCategory = ({ params }: { params: any }) => {
  // const params = useParams();
  // const path = usePathname();

  return (
    <div>
      <Link href={`${params.subcategory}/--1111--`}>Link for product</Link>
    </div>
  );
};

export default SubCategory;
