import Link from "next/link";
import React from "react";

const SubCategory = ({ params }: { params: any }) => {
  return (
    <div>
      <Link href={`${params.subcategory}/--1111--`}>
        [subcategory] Link for product
      </Link>
    </div>
  );
};

export default SubCategory;
