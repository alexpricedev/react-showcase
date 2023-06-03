"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { DataAndError, ErrorUtils } from "@/utils/error.utils";
import { Feed, FeedError, FeedItemData } from "@/components/Feed";

import { HomePageFeedService } from "../../_services/home-page-feed.service";

export const HomePageFeed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [{ data: homeFeedData, error }, setDataAndError] = useState<
    DataAndError<FeedItemData[]>
  >(ErrorUtils.noDataOrError);

  // Service calls always return an object with data and error
  // This means out React code can always expect the same shape
  // and error is always an Error object with a message
  const fetchData = async () => {
    setIsLoading(true);
    const res = await HomePageFeedService.fetchData();
    setDataAndError(res);
    setIsLoading(false);
  };

  if (error) {
    return (
      <FeedError
        errorMessage={error.message}
        resetError={() => setDataAndError(ErrorUtils.noDataOrError)}
      />
    );
  }

  return (
    <div className="p-4 border-2">
      <p>
        This will go and fetch some data{" "}
        <span className="text-sm opacity-50">
          (and randomly fail to show the error handling)
        </span>
      </p>
      <Button color="green" className="mt-4" onClick={fetchData}>
        Fetch data
      </Button>
      <Feed data={homeFeedData} isLoading={isLoading} />
    </div>
  );
};
