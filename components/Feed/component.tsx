import { FeedEmpty } from "./FeedEmpty";
import { FeedItem } from "./FeedItem";
import { FeedLoading } from "./FeedLoading";
import { FeedItemData } from "./types";

interface FeedProps {
  data: FeedItemData[] | null;
  isLoading?: boolean;
}

export const Feed = (props: FeedProps) => {
  const { data, isLoading } = props;

  if (isLoading) {
    return <FeedLoading />;
  }

  if (!data) {
    return <FeedEmpty />;
  }

  return (
    <ul className="grid gap-4 grid-cols-3 mt-4">
      {data.map((item, index) => (
        <FeedItem key={index} item={item} />
      ))}
    </ul>
  );
};
