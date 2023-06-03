"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { RandomNumberService } from "@/services/random-number.service";
import { DataAndError, ErrorUtils } from "@/utils/error.utils";

import { FetchNumberError } from "./FetchNumberError";

export const FetchNumber = () => {
  const [{ data: num, error }, setDataAndError] = useState<
    DataAndError<number>
  >(ErrorUtils.noDataOrError);

  // Service calls always return an object with data and error
  // This means out React code can always expect the same shape
  // and error is always an Error object with a message
  const fetchMyNum = async () => {
    const res = await RandomNumberService.fetchNumber();
    setDataAndError(res);
  };

  if (error) {
    return (
      <FetchNumberError
        errorMessage={error.message}
        resetError={() => setDataAndError(ErrorUtils.noDataOrError)}
      />
    );
  }

  return (
    <div className="p-4 border-2">
      <p>
        This will error when n {`> ${RandomNumberService.randomNumberBoundary}`}{" "}
      </p>
      <Button color="green" className="mt-4" onClick={fetchMyNum}>
        Click me
      </Button>
      {num && <span className="ml-4">Our number: {num}</span>}{" "}
    </div>
  );
};
