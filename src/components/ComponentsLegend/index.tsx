import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
  linethreeFive?: string;
  maycounter?: string;
  thirteenthousandeighthundredninetynine?: string;
  trendFive?: string;
  changeOne?: string;
}

export default function ComponentsLegend({
  linethreeFive = "images/img_line_3.png",
  maycounter = "May 2023",
  thirteenthousandeighthundredninetynine = "13,899",
  trendFive,
  changeOne,
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img
        src={linethreeFive}
        alt="linethree_five"
        className="w-[7%] md:h-auto sm:w-full mb-[5px] ml-[5px] object-cover"
      />
      <Text size="s" as="p" className="!text-blue_gray-900">
        {maycounter}
      </Text>
      <Text size="s" as="p" className="!text-blue_gray-900_b3 !font-medium opacity-0.99">
        {thirteenthousandeighthundredninetynine}
      </Text>
      <div className="flex flex-row justify-start items-center w-[18%] mr-[5px] gap-0.5">
        {!!trendFive ? <Img src={trendFive} alt="trend_five" className="h-[10px]" /> : null}
        {!!changeOne ? (
          <Text size="s" as="p" className="h-[13px] !text-gray-700_01">
            {changeOne}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
