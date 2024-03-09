import React from "react";
import { Text, Img, Heading } from "./..";

interface Props {
  className?: string;
  onlinestore?: string;
  price?: string;
  change?: string;
}

export default function ComponentsMetricpill1({
  onlinestore = "Net return value",
  price = "-$15,07.44",
  change = "14%",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-[5px] md:px-5 max-w-[163px]">
        <div className="flex flex-row justify-start w-full py-0.5">
          <div className="flex flex-row justify-start w-[76%]">
            <div className="flex flex-col items-center justify-start w-[76%] gap-px">
              <Text as="p" className="!text-blue_gray-900 !font-medium">
                {onlinestore}
              </Text>
              <div className="h-px w-full bg-blue_gray-100" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full">
          <Heading as="h1">{price}</Heading>
          <div className="flex flex-row justify-start items-center w-[18%] ml-[5px] gap-0.5">
            <Img src="images/img_trend.svg" alt="trend_one" className="h-[10px]" />
            <Text size="s" as="p" className="!text-gray-700_01">
              {change}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
