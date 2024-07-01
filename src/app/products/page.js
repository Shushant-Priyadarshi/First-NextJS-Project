import ProductList from "@/components/productList";


async function listofProducts(){
    try{
        const apiRes = await fetch("https://dummyjson.com/products",{cache:"no-store"});
        const result = await apiRes.json();
        return result.products;
    }catch(e){  
        throw new Error(e);
    }
}
export default async function Products(){
    const products =await listofProducts();
    return <ProductList products={products}/>
}