import CategoriesSidebar from "../../components/CategoriesSidebar";
import ProductGrid from "../../components/ProductGrid";


function page() {
  return (
    <div>
      <div className="flex gap-6 px-10 py-40 bg-gray-100 min-h-screen">
        <CategoriesSidebar/>
        <ProductGrid />
      </div>
    </div>
  );
}

export default page