"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Button";

interface FeedErrorProps {
  errorMessage: string;
  resetError?: () => void;
}

export const FeedError = ({ errorMessage, resetError }: FeedErrorProps) => {
  const router = useRouter();

  // If the parent passes an error reset function, use that, if not refresh the page
  const reload = () => {
    if (resetError) {
      resetError();
      return;
    }
    router.refresh();
  };

  return (
    <div className="p-4 border-2">
      <p>
        <strong>Error:</strong> {errorMessage}
      </p>
      <Button className="mt-4" onClick={reload} color="blue">
        Reset feed
      </Button>
    </div>
  );
};
