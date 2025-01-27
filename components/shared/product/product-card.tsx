import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { APP_NAME } from "@/lib/constants";
import ProductPrice from "./product-price";
import { Product } from "../../../types/index";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-col space-y-1.5 p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={`${APP_NAME} logo`}
            width={250}
            height={250}
            priority={true}
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-md">{product.name}</h2>
        </Link>

        <div className="flex-between">
          <p>4/5</p>
          {product.stock > 0 ? (
            <ProductPrice
              value={Number(product.price)}
              className="text-green-900"
            />
          ) : (
            <p className="text-destructive">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
