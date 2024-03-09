import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
  p40k?: string;
  p20k?: string;
  zero?: string;
  octcounter?: string;
  deccounter?: string;
  febcounter?: string;
  aprcounter?: string;
  juncounter?: string;
  augcounter?: string;
  octcounter1?: string;
  deccounter1?: string;
}

export default function ComponentsChartarea({
  p40k = "40K",
  p20k = "20K",
  zero = "0",
  octcounter = "Oct 2022",
  deccounter = "Dec 2022",
  febcounter = "Feb 2023",
  aprcounter = "Apr 2023",
  juncounter = "Jun 2023",
  augcounter = "Aug 2023",
  octcounter1 = "Oct 2023",
  deccounter1 = "Dec 2023",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-row justify-center w-full p-[5px]">
          <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[756px]">
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-2.5 md:gap-5">
              <Text as="p" className="ml-px md:ml-0 !text-gray-600 text-right">
                {p40k}
              </Text>
              <div className="h-px w-[96%] bg-gray-100_01" />
            </div>
            <div className="h-[69px] w-full mt-5 relative">
              <Img
                src="images/img_vector_1.png"
                alt="vectorone_one"
                className="justify-center h-[69px] w-[96%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Img
                src="images/img_vector_2.png"
                alt="vectortwo_one"
                className="justify-center h-[41px] w-[96%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-2.5 top-[29%] right-0 left-0 m-auto md:gap-5 absolute">
                <Text as="p" className="!text-gray-600 text-right">
                  {p20k}
                </Text>
                <div className="h-px w-[96%] bg-gray-100_01" />
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-end items-center w-full mt-[5px] gap-2.5">
              <Text as="p" className="!text-gray-600 text-right">
                {zero}
              </Text>
              <div className="h-px w-[96%] bg-gray-100_01" />
            </div>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
          <Text as="p" className="ml-[19px] sm:ml-0">
            {octcounter}
          </Text>
          <Text as="p">{deccounter}</Text>
          <Text as="p">{febcounter}</Text>
          <Text as="p">{aprcounter}</Text>
          <Text as="p">{juncounter}</Text>
          <Text as="p">{augcounter}</Text>
          <Text as="p">{octcounter1}</Text>
          <Text as="p" className="mr-[19px]">
            {deccounter1}
          </Text>
        </div>
      </div>
    </div>
  );
}
