import React from "react";
import { Text } from "./..";

interface Props {
  className?: string;
  onlinestore?: string;
}

export default function ComponentsMetrictitle({ onlinestore = "Loading", ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-row justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text as="p" className="ml-px md:ml-0 !text-blue_gray-900 !font-medium">
              {onlinestore}
            </Text>
            <div className="h-[15px] w-full mt-[-14px] bg-blue_gray-100_01 rounded-sm" />
          </div>
        </div>
        <div className="h-px w-[38%] bg-blue_gray-100" />
      </div>
    </div>
  );
}
