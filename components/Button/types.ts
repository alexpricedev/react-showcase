import { PropsWithChildren } from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

export type ButtonColor = "blue" | "green";

type ButtonOrAnchorProps = Omit<
  React.HTMLProps<HTMLButtonElement | HTMLAnchorElement>,
  "ref" | "type"
>;

export interface ButtonProps extends PropsWithChildren, ButtonOrAnchorProps {
  color: ButtonColor;
  href?: string;
  className?: string;
  icon?: typeof BeakerIcon;
  iconClassName?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}
