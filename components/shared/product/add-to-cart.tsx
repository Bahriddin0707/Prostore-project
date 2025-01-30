"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast({
        variant: "destructive",
        description: res.message,
      });
      return;
    }

    // Handle succes ad to cart
    toast({
      variant: "default",
      description: `${item.name} added to cart`,
      action: (
        <ToastAction altText="Go to cart" onClick={() => router.push("/cart")}>
          Go To Cart
        </ToastAction>
      ),
    });
  };

  return (
    <div className="w-full">
      <Button className="w-full" type="button" onClick={handleAddToCart}>
        <Plus /> Add To Cart
      </Button>
    </div>
  );
};

export default AddToCart;
