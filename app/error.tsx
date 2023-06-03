"use client";

import { Button } from "@/components/Button";

// Error components must be Client Components

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ reset }: ErrorPageProps) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={reset} color="blue">
        Try again
      </Button>
    </div>
  );
};

export default ErrorPage;
