import React from "react";

const sizes = {
  xs: "text-[8px] font-normal leading-[146.5%]",
  lg: "text-[13px] font-normal leading-[146.5%]",
  s: "text-[10px] font-normal leading-[146.5%]",
  md: "text-xs font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
