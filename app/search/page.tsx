"use client";

import Button from "@/components/Button";
import Loading from "@/components/Loading";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  //Get data from the flask API
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<any>(null);
  const [searchChoice, setSearchChoice] = useState<string>("null");
  const [searchIUCR, setSearchIUCR] = useState<string>("null");
  const [searchCaseNumber, setSearchCaseNumber] = useState<string>("null");
  const [searchID, setSearchID] = useState<string>("null");
  const [searchMonth, setSearchMonth] = useState<string>("null");
  const [searchYear, setSearchYear] = useState<string>("null");

  //   Fetch Data once the component is mounted
  // const fetchData = async () => {
  //   setLoading(true);
  //   const response = await fetch("http://127.0.0.1:5000/api/search/id/4091800");
  //   const data = await response.json();
  //   setResponseData(data);
  //   setLoading(false);
  // };

  const fetchByIUCR = async () => {
    setLoading(true);
    setResponseData(null);
    const response = await fetch(
      `http://127.0.0.1:5000/api/search/iucr/${searchIUCR}`
    );
    const data = await response.json();
    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    setResponseData(data);
    setLoading(false);
  };

  const fetchByCaseNumber = async () => {
    setLoading(true);
    setResponseData(null);
    const response = await fetch(
      `http://127.0.0.1:5000/api/search/case_number/${searchCaseNumber}`
    );
    const data = await response.json();
    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    setResponseData(data);
    setLoading(false);
  };

  const fetchByID = async () => {
    setLoading(true);
    setResponseData(null);
    const response = await fetch(
      `http://127.0.0.1:5000/api/search/id/${searchID}`
    );
    const data = await response.json();
    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    setResponseData(data);
    setLoading(false);
  };

  const fetchByDate = async () => {
    setLoading(true);
    setResponseData(null);
    const response = await fetch(
      `http://127.0.0.1:5000/api/search/date/${searchYear}/${searchMonth}`
    );
    const data = await response.json();
    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    setResponseData(data);
    setLoading(false);
  };

  // Fetch the data once the component is mounted
  // useEffect(() => {
  //   fetchData();
  //   if (responseData) {
  //     console.log(responseData.length);
  //   }
  // }, []);

  return (
    <Wrapper title="Search">
      <div className="flex flex-col h-max">
        <div className="w-full flex h-screen bg-black">
          <div className="flex flex-col w-[50%] h-full items-start justify-center">
            <div className="p-12 flex flex-col space-y-2 w-[90%]">
              <p className="text-primary font-bold text-[#284d89]">
                Our Search Tool
              </p>
              <h1 className="text-3xl font-medium pb-2">
                Use our Search Tool!!!
              </h1>
              <p className="h-full min-h-fit">
                At Chicago Crime Search Tool, you can easily search for detailed
                information on specific cases using various criteria. Whether
                you have a Case ID, Case Number, Date, IUCR code, Month, or
                Year, our comprehensive search functionality allows you to find
                the precise data you need. Simply enter your search terms, and
                our system will provide you with relevant results, including
                detailed case information and trends. This feature is designed
                to help you quickly access specific crime records and gain
                valuable insights into individual cases or broader crime
                patterns across Chicago. Start your search today and uncover the
                data that matters most to you.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            <Image src="/search.svg" alt="Search" height={600} width={600} />
          </div>
        </div>
        <div className="w-[90%] px-12 mb-24">
          <div className="text-3xl my-8 text-yellow-500">Search</div>
          <select
            value={searchChoice}
            onChange={(e) => {
              setSearchChoice(e.target.value);
            }}
            className="bg-black border-white"
          >
            <option value="null">Select Search Criteria</option>
            <option value="IUCR">IUCR</option>
            <option value="case_number">Case Number</option>
            <option value="id">Case ID</option>
            <option value="Date">Date</option>
          </select>

          <div>
            {searchChoice === "null" ? (
              <></>
            ) : searchChoice === "IUCR" ? (
              <div className="space-x-4">
                <input
                  type="text"
                  placeholder="Enter IUCR (eg. 0880)"
                  className="border-2 border-black p-2 rounded-lg my-4 text-black"
                  onChange={(e) => {
                    setSearchIUCR(e.target.value);
                  }}
                />
                <Button text="Submit" onClick={fetchByIUCR}></Button>
              </div>
            ) : searchChoice === "case_number" ? (
              <div className="space-x-4">
                <input
                  type="text"
                  placeholder="(eg. HL428590)"
                  className="border-2 border-black p-2 rounded-lg my-4 text-black"
                  onChange={(e) => {
                    setSearchCaseNumber(e.target.value);
                  }}
                />
                <Button text="Submit" onClick={fetchByCaseNumber}></Button>
              </div>
            ) : searchChoice === "id" ? (
              <div className="space-x-4">
                <input
                  type="text"
                  placeholder="(eg. 4091809)"
                  className="border-2 border-black p-2 rounded-lg my-4 text-black"
                  onChange={(e) => {
                    setSearchID(e.target.value);
                  }}
                />
                <Button text="Submit" onClick={fetchByID}></Button>
              </div>
            ) : searchChoice === "Date" ? (
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="(2001-2021)"
                  className="border-2 border-black p-2 rounded-lg my-4 text-black"
                  onChange={(e) => {
                    setSearchYear(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="(1-12)"
                  className="border-2 border-black p-2 rounded-lg my-4 text-black"
                  onChange={(e) => {
                    setSearchMonth(e.target.value);
                  }}
                />
                <Button text="Submit" onClick={fetchByDate}></Button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        {loading && <Loading className="w-12 h-12" color="#142849"></Loading>}

        {responseData && !loading && (
          <div className="w-[90%] px-12">
            <div className="text-3xl my-8">Result</div>
          </div>
        )}
        {responseData && !loading && (
          <div className="bg-black flex justify-center items-center mb-24">
            <div className="overflow-auto max-h-96  w-[80%]">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-black">
                  <tr>
                    <th className="w-1/24 px-8 py-2">ID</th>
                    <th className="w-2/24 px-8 py-2">Case Number</th>
                    <th className="w-2/24 px-8 py-2">Date</th>
                    <th className="w-2/24 px-8 py-2">Block</th>
                    <th className="w-1/24 px-8 py-2">IUCR</th>
                    <th className="w-2/24 px-8 py-2">Primary Type</th>
                    <th className="w-2/24 px-8 py-2">Description</th>
                    <th className="w-2/24 px-8 py-2">Location Description</th>
                    <th className="w-1/24 px-8 py-2">Arrest</th>
                    <th className="w-1/24 px-8 py-2">Domestic</th>
                    <th className="w-1/24 px-8 py-2">Beat</th>
                    <th className="w-1/24 px-8 py-2">District</th>
                    <th className="w-1/24 px-8 py-2">FBI Code</th>
                    <th className="w-2/24 px-8 py-2">X Coordinate</th>
                    <th className="w-2/24 px-8 py-2">Y Coordinate</th>
                    <th className="w-1/24 px-8 py-2">Year</th>
                    <th className="w-2/24 px-8 py-2">Updated On</th>
                    <th className="w-2/24 px-8 py-2">Latitude</th>
                    <th className="w-2/24 px-8 py-2">Longitude</th>
                    <th className="w-2/24 px-8 py-2">Location</th>
                    <th className="w-1/24 px-8 py-2">Month</th>
                    <th className="w-1/24 px-8 py-2">Hour</th>
                  </tr>
                </thead>
                <tbody className="bg-black divide-y divide-gray-200">
                  {responseData &&
                    responseData.map((data, index) => (
                      <tr key={index}>
                        <td className="px-8 py-2">{data[0]}</td>
                        <td className="px-8 py-2">{data[1]}</td>
                        <td className="px-8 py-2">{data[2]}</td>
                        <td className="px-8 py-2">{data[3]}</td>
                        <td className="px-8 py-2">{data[4]}</td>
                        <td className="px-8 py-2">{data[5]}</td>
                        <td className="px-8 py-2">{data[6]}</td>
                        <td className="px-8 py-2">{data[7]}</td>
                        <td className="px-8 py-2">{data[8]}</td>
                        <td className="px-8 py-2">{data[9]}</td>
                        <td className="px-8 py-2">{data[10]}</td>
                        <td className="px-8 py-2">{data[11]}</td>
                        <td className="px-8 py-2">{data[12]}</td>
                        <td className="px-8 py-2">{data[13]}</td>
                        <td className="px-8 py-2">{data[14]}</td>
                        <td className="px-8 py-2">{data[15]}</td>
                        <td className="px-8 py-2">{data[16]}</td>
                        <td className="px-8 py-2">{data[17]}</td>
                        <td className="px-8 py-2">{data[18]}</td>
                        <td className="px-8 py-2">{data[19]}</td>
                        <td className="px-8 py-2">{data[20]}</td>
                        <td className="px-8 py-2">{data[21]}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {error && !loading && (
          <div className="w-[90%] px-12 mb-24">
            <div className="text-3xl my-8 text-red-600">Error</div>
            <p className="text-2xl">No data found or incorrect input</p>
          </div>
        )}
        {responseData && !loading && <Map props={responseData} />}
      </div>
    </Wrapper>
  );
}
