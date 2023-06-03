import { FeedItemData } from "@/components/Feed";
import { FakeStoreItem } from "@/types/fake-store.types";
import { ErrorUtils } from "@/utils/error.utils";

export const ProductsPageFeedService = {
  fetchData: () => {
    // We can use the Errors.catchError function to catch and normalise any
    // errors. Just make sure to `throw` and you're golden!
    return ErrorUtils.catchError<FeedItemData[]>(async () => {
      const result = await fetch("https://fakestoreapi.com/products?limit=6");
      const json = (await result.json()) as FakeStoreItem[];

      if (Math.random() > 0.75) {
        throw new Error("We couldn't fetch the products data");
      }

      // The service gives us an opportunity to get the data in the right shape
      return json.map(ProductsPageFeedService.transformFakeStoreItemToFeedItem);
    });
  },

  transformFakeStoreItemToFeedItem: (item: FakeStoreItem): FeedItemData => ({
    title: item.title,
    description: item.description,
    imageUrl: item.image,
  }),
};
