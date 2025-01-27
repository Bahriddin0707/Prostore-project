"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        className="min-h-[300px] object-cover object-center"
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
      />

      <div className="flex gap-2">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              className={cn(
                "border-2 cursor-pointer hover:border-orange-600",
                current === index && "border-orange-400"
              )}
              onClick={() => setCurrent(index)}
            >
              <Image src={image} alt="image" width={100} height={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
