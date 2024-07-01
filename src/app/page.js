import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="text-center flex justify-center   min-h-screen items-center flex-col" >
      <h1 className=" p-4 text-4xl font-bold">Welcome to Product Page</h1>
      <Link href={"products"} ><Button >Browse Products</Button></Link>
    </div>
  );
}
