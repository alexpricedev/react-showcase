import { FeedItemData } from "@/components/Feed";
import { FakeStoreUser } from "@/types/fake-store.types";
import { ErrorUtils } from "@/utils/error.utils";

export const HomePageFeedService = {
  fetchData: () => {
    // We can use the Errors.catchError function to catch and normalise any
    // errors. Just make sure to `throw` and you're golden!
    return ErrorUtils.catchError<FeedItemData[]>(async () => {
      const result = await fetch("https://fakestoreapi.com/users");
      const json = (await result.json()) as FakeStoreUser[];

      if (Math.random() > 0.75) {
        throw new Error("We couldn't fetch the feed data");
      }

      // The service gives us an opportunity to get the data in the right shape
      return json.map(HomePageFeedService.transformFakeStoreUserToFeedItem);
    });
  },

  transformFakeStoreUserToFeedItem: (user: FakeStoreUser): FeedItemData => ({
    title: `Name: ${user.name.firstname} ${user.name.lastname}`,
    description: `Username: ${user.username}`,
  }),
};
