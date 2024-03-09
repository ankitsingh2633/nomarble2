import React from "react";
import { Text, Img, Input, Heading, Button } from "../../components";
import LineGraph from "./list";




export default function ComponentsPage() {
  
  return (
    <>
      

                

      <div className="flex flex-col items-center justify-center w-[43%] md:w-full mx-auto h-screen">
  
              <div className="flex flex-row justify-center w-[97%] md:w-full mb-[34px] p-2.5 bg-white-A700 shadow-xs rounded-[10px] ">
                <div className="flex flex-col items-center justify-center w-full gap-[9px]">
                  <div className="flex flex-row md:flex-col justify-start items-center w-full gap-1 md:gap-5">
                    <div className="flex flex-row md:flex-col w-[97%] md:w-full gap-1">
                      <div className="flex flex-row justify-center w-[25%] md:w-full p-[5px] bg-blue_gray-50 rounded-[10px]">
                        <div className="flex flex-col items-center justify-start w-[95%] gap-[5px]">
                          <div className="flex flex-row justify-start items-center w-full gap-[17px]">
                            <div className="flex flex-row justify-start w-[76%]">
                              <div className="flex flex-col items-center justify-start w-full gap-px">
                                <Text as="p" className="!text-blue_gray-900 !font-medium">
                                  Online store sessions
                                </Text>
                                <div className="h-px w-full bg-blue_gray-100" />
                              </div>
                            </div>
                      
                            
                          <LineGraph/>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full gap-[7px]">
                            <Heading as="h5" className="mt-px">
                              255,581
                            </Heading>
                            <div className="flex flex-row justify-start items-center w-[15%] gap-0.5">
                              <Img src="images/img_trend.svg" alt="image_one" className="h-[10px]" />
                              <Text size="s" as="p" className="h-[13px] !text-gray-700_01">
                                9%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[25%] md:w-full p-[5px] bg-white-A700 rounded-[10px]  hover:bg-gray-300">
                        <div className="flex flex-col items-center justify-start w-[95%] gap-[5px]">
                          <div className="flex flex-row justify-start w-full py-0.5">
                            <div className="flex flex-row justify-start w-[76%]">
                              <div className="flex flex-col items-center justify-start w-[76%] gap-px">
                                <Text as="p" className="!text-blue_gray-900 !font-medium">
                                  Net return value
                                </Text>
                                <div className="h-px w-full bg-blue_gray-100" />
                              </div>
                            </div>
                            <LineGraph/>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full">
                            <Heading as="h6">-$15,07.44</Heading>
                            <div className="flex flex-row justify-start items-center w-[18%] ml-[5px] gap-0.5">
                              <Img src="images/img_trend.svg" alt="trend_one" className="h-[10px]" />
                              <Text size="s" as="p" className="!text-gray-700_01">
                                14%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[25%] md:w-full p-[5px] bg-white-A700 rounded-[10px] hover:bg-gray-300">
  <div className="flex flex-col items-center justify-start w-[95%] gap-[5px]">
    <div className="flex flex-row justify-start w-full py-0.5">
      <div className="flex flex-row justify-start w-[76%]">
        <div className="flex flex-col items-center justify-start w-[57%] gap-px">
          <Text as="p" className="!text-blue_gray-900 !font-medium">
            Total orders
          </Text>
          <div className="h-px w-full bg-blue_gray-100" />
          
        </div>
      </div>
      <LineGraph/>
    </div>
    
    <div className="flex flex-row justify-start items-center w-full">
      <Heading as="p" className="mt-px">
        10,511
      </Heading>
      <div className="flex flex-row justify-start items-center w-[15%] ml-[5px] gap-0.5">
        <Img src="images/img_trend.svg" alt="trend_one" className="h-[10px]" />
        <Text size="s" as="p" className="h-[13px] !text-gray-700_01">
          2%
        </Text>
      </div>
    </div>
  </div>
</div>


                      
                      <div className="flex flex-row justify-center w-[25%] md:w-full p-[5px] bg-white-A700 rounded-[10px]  hover:bg-gray-300">
                        <div className="flex flex-col items-center justify-start w-[95%] gap-[5px]">
                          <div className="flex flex-row justify-start w-full py-0.5">
                            <div className="flex flex-row justify-start w-[76%]">
                              <div className="flex flex-col items-center justify-start w-[75%] gap-px">
                                <Text as="p" className="!text-blue_gray-900 !font-medium">
                                  Conversion rate
                                </Text>
                                <div className="h-px w-full bg-blue_gray-100" />
                              </div>
                            </div>
                            <LineGraph/>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full">
                            <Heading as="p">3.18%</Heading>
                            <div className="flex flex-row justify-start items-center w-[15%] ml-[5px] gap-0.5">
                            
                              <Img src="images/img_trend.svg" alt="trend_one" className="h-[10px]" />
                              
                              <Text size="s" as="p" className="h-[13px] !text-gray-700_01">
                                7%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="flex items-center justify-center h-[23px] w-[23px] bg-gray-400 rounded-[5px]  hover:bg-gray-300">
                  <Img src="images/img_edit.svg" />
                </Button>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row justify-center w-full p-[5px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row md:flex-col justify-start items-center w-full gap-2.5 md:gap-5">
                            <Text as="p" className="ml-px md:ml-0 !text-gray-600 text-right">
                              40K
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
                                20K
                              </Text>
                              <div className="h-px w-[96%] bg-gray-100_01" />
                            </div>
                          </div>
                          <div className="flex flex-row md:flex-col justify-end items-center w-full mt-[5px] gap-2.5">
                            <Text as="p" className="!text-gray-600 text-right">
                              0
                            </Text>
                            <div className="h-px w-[96%] bg-gray-100_01" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                        <Text as="p" className="ml-[19px] sm:ml-0">
                          Oct 2022
                        </Text>
                        <Text as="p">Dec 2022</Text>
                        <Text as="p">Feb 2023</Text>
                        <Text as="p">Apr 2023</Text>
                        <Text as="p">Jun 2023</Text>
                        <Text as="p">Aug 2023</Text>
                        <Text as="p">Oct 2023</Text>
                        <Text as="p" className="mr-[19px]">
                          Dec 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-end w-full gap-2.5 py-[5px] sm:gap-2.5">
                    <div className="flex flex-row justify-start items-end w-[25%] md:w-full gap-2.5 p-[3px] bg-gray-100 rounded-sm">
                      <Img
                        src="images/img_line_3.png"
                        alt="linethree_one"
                        className="w-[6%] md:h-auto sm:w-full mb-[5px] ml-1.5 object-cover"
                      />
                      <Text size="s" as="p" className="mt-0.5 !text-gray-600">
                        Oct 1, 2022 - Feb 21, 2024
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-end w-[25%] md:w-full gap-2.5 p-[3px] bg-gray-100 rounded-sm">
                      <Img
                        src="images/img_line_3_2x10.png"
                        alt="linethree_three"
                        className="w-[6%] md:h-auto sm:w-full mb-[5px] ml-1.5 object-cover"
                      />
                      <Text size="s" as="p" className="mt-0.5 !text-gray-600">
                        Oct 1, 2021 - Feb 21, 2023
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        
        
      
    </>
  );
}
