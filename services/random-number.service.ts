import { ErrorUtils } from "@/utils/error.utils";
import { MathUtils } from "@/utils/math.utils";

export const RandomNumberService = {
  randomNumberBoundary: 7,
  fetchNumber: () => {
    // We can use the Errors.catchError function to catch and normalise any
    // errors. Just make sure to `throw` and you're golden!
    return ErrorUtils.catchError(() => {
      const num = MathUtils.roundToTwoDP(Math.random() * 10);

      if (num > RandomNumberService.randomNumberBoundary) {
        throw new Error(
          `Number was over ${RandomNumberService.randomNumberBoundary} (${num})`
        );
      }

      return num;
    });
  },
};
