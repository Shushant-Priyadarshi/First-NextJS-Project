import {
  Card,
  CardContent,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export default function ProductList({ products }) {
 
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full ">
        <div className="flex  justify-between">
        <h2 className="text-4xl font-bold text-grey-800 mb-12 ">Products</h2>
        <Link href={"/"} ><Button className="mb-5">Back</Button></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products && products.length > 0
            ? products.map((product) => (
                
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-105 duration-500">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        
                        <img
                          src={product.images? product.images:<Skeleton variant={"primary"}/>}
                          alt={product.title}
                          className="h-full w-full object-cover object-top "
                        ></img>
                      </div>
                      <div className="">
                        <h3 className="text-lg font-bold text-gray-800 text-center">{product.title}</h3>
                        <div className="text-gray-800 mt-4 flex items-center flex-wrap justify-between text-base">
                            <p  >Rating : {product.rating}</p>
                            <div>
                                <Button variant="secondary">{product.price}</Button>
                                
                            </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
               
              ))
            : <Skeleton/>}
        </div>
      </div>
    </div>
  );
}
