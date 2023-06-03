import classNames from "classnames";

import { FeedItemData } from "../types";

interface FeedItemProps {
  item: FeedItemData;
  className?: string;
}

export const FeedItem = ({ item, className }: FeedItemProps) => (
  <li className={classNames("border-2 border-black p-4 rounded", className)}>
    {item.imageUrl && (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageUrl}
          alt={item.title}
          width={300}
          height={150}
          className="mb-4"
        />
      </>
    )}
    <span>
      <strong>{item.title}</strong>
    </span>
    <p className="bg-gray-200 text-xs p-2 rounded mt-2">{item.description}</p>
  </li>
);
