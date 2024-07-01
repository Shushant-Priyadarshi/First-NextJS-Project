
import { Button } from "@/components/ui/button"

import Link from "next/link";


export default function notFound(){
    return(
        <div className="flex justify-center   min-h-screen items-center flex-col">
           <div className="p-4 text-4xl font-bold ">Page Not Found</div> 
           <Link href={"/"}><Button >Home Page</Button></Link>

        </div>
    )
}