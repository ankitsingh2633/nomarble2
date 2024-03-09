import React from "react";
import { Text, Img, Heading } from "./..";

interface Props {
  className?: string;
  onlinestore?: string;
  value?: string;
  change?: string;
}

export default function ComponentsMetricpill({
  onlinestore = "Online store sessions",
  value = "255,581",
  change = "9%",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-[5px] md:px-5 max-w-[163px]">
        <div className="flex flex-row justify-start items-center w-full gap-[17px]">
          <div className="flex flex-row justify-start w-[76%]">
            <div className="flex flex-col items-center justify-start w-full gap-px">
              <Text as="p" className="!text-blue_gray-900 !font-medium">
                {onlinestore}
              </Text>
              <div className="h-px w-full bg-blue_gray-100" />
            </div>
          </div>
          <Img src="images/img_edit.svg" alt="image" className="h-[23px] w-[23px] rounded-[5px]" />
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-[7px]">
          <Heading as="h1" className="mt-px">
            {value}
          </Heading>
          <div className="flex flex-row justify-start items-center w-[15%] gap-0.5">
            <Img src="images/img_trend.svg" alt="image_one" className="h-[10px]" />
            <Text size="s" as="p" className="h-[13px] !text-gray-700_01">
              {change}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
