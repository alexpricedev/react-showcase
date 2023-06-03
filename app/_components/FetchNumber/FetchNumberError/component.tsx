import { Button } from "@/components/Button";

interface FetchErrorProps {
  errorMessage: string;
  resetError: () => void;
}

export const FetchNumberError = ({
  errorMessage,
  resetError,
}: FetchErrorProps) => (
  <div className="p-4 border-2">
    <p>
      <strong>Error:</strong> {errorMessage}
    </p>
    <Button className="mt-4" onClick={resetError} color="blue">
      Reset number fetching
    </Button>
  </div>
);
