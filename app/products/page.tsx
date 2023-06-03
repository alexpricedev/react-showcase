import { ProductsPageFeed } from "./_components/ProductsPageFeed";

const ProductsPage = () => (
  <main>
    <h1 className="text-2xl mb-4 mt-10 font-bold">Server Data Loading</h1>
    {/* @ts-expect-error Server Component */}
    <ProductsPageFeed />
  </main>
);

export default ProductsPage;
