import { Feed, FeedError } from "@/components/Feed";

import { ProductsPageFeedService } from "../../_services/products-page-feed.service";

export const ProductsPageFeed = async () => {
  // Service calls always return an object with data and error
  // This means out React code can always expect the same shape
  // and error is always an Error object with a message
  const { data: productFeedData, error } =
    await ProductsPageFeedService.fetchData();

  if (error) {
    return <FeedError errorMessage={error.message} />;
  }

  return (
    <div className="p-4 border-2">
      <p>
        This page will fetch product data on the server{" "}
        <span className="text-sm opacity-50">
          (and randomly fail to show the error handling)
        </span>
      </p>
      <Feed data={productFeedData} />
    </div>
  );
};
