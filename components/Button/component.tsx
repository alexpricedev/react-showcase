import { ButtonProps } from "./types";
import { ButtonUtils } from "./utils";

/**
 * Common use case
 * <Button color="blue" className="ml-2" icon={CheckIconSolid} isDisabled={isFormDisabled} />
 *
 * Override case (make !important very explicit)
 * const ICON_WRAPPER_OVERRIDE_CLASS = '!px-10';
 * ...
 * <Button color="green" icon={CheckSolid} iconClassName={ICON_WRAPPER_OVERRIDE_CLASS} />
 */

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    color,
    href,
    icon,
    iconClassName: iconClassNameOverride,
    isDisabled,
    isLoading,
    ...passThroughProps
  } = props;

  const buttonCls = ButtonUtils.buildClasses({
    color,
    isDisabled,
    isLoading,
    className,
  });

  // Button icon
  const Icon = icon;
  const defaultIconClassName = "w-6 h-6";
  const iconClassName = `${defaultIconClassName} ${iconClassNameOverride}`;

  const ButtonContents = () => (
    <>
      {Icon && <Icon className={iconClassName} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonCls} {...passThroughProps}>
        <ButtonContents />
      </a>
    );
  }

  return (
    <button className={buttonCls} {...passThroughProps}>
      <ButtonContents />
    </button>
  );
};
