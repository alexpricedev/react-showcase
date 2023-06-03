import classNames from "classnames";

import { ButtonProps } from "./types";

type BuildClassesArgs = Pick<
  ButtonProps,
  "color" | "isDisabled" | "isLoading" | "className"
>;

export const ButtonUtils = {
  buildClasses: ({
    color,
    isDisabled,
    isLoading,
    className: classNameOverride,
  }: BuildClassesArgs) => {
    const baseClasses = "px-4 py-2 rounded-md font-semibold text-white";
    let colorClasses = "";
    const disabledClass = "cursor-not-allowed opacity-50";
    const loadingClass = "cursor-wait";

    switch (color) {
      case "blue":
        colorClasses = classNames("bg-blue-400 hover:bg-blue-800", {
          "bg-blue-900": isDisabled,
        });
        break;
      case "green":
        colorClasses = classNames("bg-green-400", "hover:bg-green-800");
        break;
    }

    const buttonCls = classNames(
      baseClasses,
      colorClasses,
      {
        [disabledClass]: isDisabled,
        [loadingClass]: isLoading,
      },
      classNameOverride
    );

    return buttonCls;
  },
};
