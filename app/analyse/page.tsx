"use client";

import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  ResponsiveContainer,
  ScatterChart,
  ZAxis,
  Legend,
  Scatter,
} from "recharts";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [analysis1, setAnalysis1] = useState<any>(null);
  const [analysis2, setAnalysis2] = useState<any>(null);
  const [analysis3, setAnalysis3] = useState<any>(null);
  const [analysis4, setAnalysis4] = useState<any>(null);
  const [analysis5_1, setAnalysis5_1] = useState<any>(null);
  const [analysis5_2, setAnalysis5_2] = useState<any>(null);

  useEffect(() => {
    featchAnalysis1();
    featchAnalysis2();
    featchAnalysis3();
    featchAnalysis4();
    featchAnalysis5();
  }, []);

  const featchAnalysis1 = async () => {
    setLoading(true);
    const response1 = await fetch("http://127.0.0.1:5000/api/analysis/1");
    const data = await response1.json();

    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    // Data is in the format of a list of list like [[crime_type, count, percentage], [crime_type, count, percentage], ...] already sorted in the highest percentage.
    // But the percentages are in strings, convert them to integers.
    for (let i = 0; i < data.length; i++) {
      data[i][2] = parseInt(data[i][2]);
    }
    // I want only 7 instances of the data, where the first 6 will have their name and percentage and the last one will be others with all the other percentages added upon.
    let other_percentage = 0;
    for (let i = 0; i < data.length; i++) {
      if (i < 6) {
        data[i] = { name: data[i][0] + "(%) ", value: data[i][2] };
      } else {
        other_percentage += data[i][2];
      }
    }

    data.splice(6, data.length - 6);
    data.push({ name: "Others (%) ", value: other_percentage });

    setAnalysis1(data);
    setLoading(false);
  };

  const featchAnalysis2 = async () => {
    setLoading(true);
    const response2 = await fetch("http://localhost:5000/api/analysis/2");
    const data = await response2.json();

    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    for (let i = 0; i < data.length; i++) {
      data[i][2] = parseInt(data[i][2]);
    }
    // I want only 7 instances of the data, where the first 6 will have their name and percentage and the last one will be others with all the other percentages added upon.
    let other_percentage = 0;
    for (let i = 0; i < data.length; i++) {
      if (i < 6) {
        data[i] = { name: data[i][0] + "(%) ", value: data[i][2] };
      } else {
        other_percentage += data[i][2];
      }
    }

    data.splice(6, data.length - 6);
    data.push({ name: "Others (%) ", value: other_percentage });

    setAnalysis2(data);
    setLoading(false);
  };

  const featchAnalysis3 = async () => {
    setLoading(true);
    const response3 = await fetch("http://localhost:5000/api/analysis/3");
    const data = await response3.json();

    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    // Data is in the format of a list of list like [[year], [count], [percentage]], sort the data based on year
    // and then assign the data to the state
    data.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < data.length; i++) {
      data[i] = { name: data[i][0], Crime_Count: data[i][1] };
    }
    setAnalysis3(data);
    setLoading(false);
  };

  const featchAnalysis4 = async () => {
    setLoading(true);
    const response4 = await fetch("http://localhost:5000/api/analysis/4");
    const data = await response4.json();

    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    data.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < data.length; i++) {
      data[i] = { name: "Month " + data[i][0], Crime_Count: data[i][1] };
    }

    setAnalysis4(data);
    setLoading(false);
  };

  const featchAnalysis5 = async () => {
    setLoading(true);
    const response5 = await fetch("http://localhost:5000/api/analysis/5");
    const data = await response5.json();

    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    data.sort((a, b) => a[0] - b[0]);
    // The data is in the format of a list of list like [[year, arrest_count, domestic_incident_count], [year, arrest_count, domestic_incident_count], ...]
    let data1 = [];
    let data2 = [];

    for (let i = 0; i < data.length; i++) {
      data1.push({ x: data[i][0], y: data[i][1] });
      data2.push({ x: data[i][0], y: data[i][2] });
    }

    setAnalysis5_1(data1);
    setAnalysis5_2(data2);
    setLoading(false);
  };

  const data01 = [
    {
      x: 100,
      y: 200,
    },
    {
      x: 120,
      y: 100,
    },
    {
      x: 170,
      y: 300,
      z: 400,
    },
    {
      x: 140,
      y: 250,
      z: 280,
    },
    {
      x: 150,
      y: 400,
      z: 500,
    },
    {
      x: 110,
      y: 280,
      z: 200,
    },
  ];
  const data02 = [
    {
      x: 200,
      y: 260,
      z: 240,
    },
    {
      x: 240,
      y: 290,
      z: 220,
    },
    {
      x: 190,
      y: 290,
      z: 250,
    },
    {
      x: 198,
      y: 250,
      z: 210,
    },
    {
      x: 180,
      y: 280,
      z: 260,
    },
    {
      x: 210,
      y: 220,
      z: 230,
    },
  ];

  return (
    <Wrapper title="Analyse">
      <div className="flex flex-col h-max">
        <div className="w-full flex h-screen bg-black">
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            {/* <Image
              src="/Analysis_1.jpg"
              alt="Statistical Breakdown of Most Common Crimes"
              height={500}
              width={500}
            /> */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={1600} height={1600}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={analysis1}
                  cx="50%"
                  cy="50%"
                  outerRadius={190}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col w-[50%] h-full items-start justify-center">
            <div className="p-12 flex flex-col space-y-2 w-[90%]">
              <p className="text-primary font-bold text-[#284d89]">
                Crime Analysis 1
              </p>
              <h1 className="text-2xl font-medium pb-2">
                Statistical Breakdown of Most Common Crimes
              </h1>
              <p className="h-full min-h-fit">
                Analysis 1 described involves processing a PySpark DataFrame to
                categorize and quantify crime types. By grouping the data by
                "Primary Type," the analysis identifies the most frequent
                crimes, notably theft and battery, followed by criminal damage
                and narcotics. Additionally, it calculates the percentage
                distribution of each crime type, highlighting their proportion
                relative to the total number of crimes, with theft comprising
                over 21% of reported incidents. This provides a clear view of
                the prevailing crime trends, helping in strategic planning and
                community awareness.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex h-screen bg-[#F5F5F5]">
          <div className="flex flex-col w-[50%] h-full items-start justify-center text-black">
            <div className="p-12 flex flex-col space-y-2 w-[90%]">
              <p className="text-primary font-bold text-[#284d89]">
                Crime Analysis 2
              </p>
              <h1 className="text-2xl font-medium pb-2">
                Crime Distribution Across Key Urban Locations
              </h1>
              <p className="h-full min-h-fit">
                Analysis 2 utilizes a PySpark DataFrame containing detailed
                crime data to categorize and quantify crime occurrences by
                location. It involves grouping the data by "Location
                Description," counting the crimes at each location, and then
                sorting these counts to identify areas with the highest crime
                prevalence. Additionally, the analysis calculates the total
                number of crime incidents and the percentage distribution of
                crimes across different locations. The output includes a
                DataFrame that not only lists the locations and their respective
                crime counts but also shows the percentage each location
                contributes to the total crime incidents. This provides a
                clearer perspective on which locations are more prone to crime,
                aiding in targeted preventive measures and resource allocation.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            {/* <Image
              src="/Analysis_2.jpg"
              alt="Search"
              height={400}
              width={400}
            /> */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={1600} height={1600}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={analysis2}
                  cx="50%"
                  cy="50%"
                  outerRadius={190}
                  fill="#284d89"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full flex h-screen bg-black">
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            {/* <Image
              src="/Analysis_3.jpg"
              alt="Crime Analysis"
              height={300}
              width={300}
            /> */}
            <div className="text-black">
              <LineChart
                width={700}
                height={300}
                data={analysis3}
                // margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="Crime_Count" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div>
          <div className="flex flex-col w-[50%] h-full items-start justify-center">
            <div className="p-12 flex flex-col space-y-2 w-[90%]">
              <p className="text-primary font-bold text-[#284d89]">
                Crime Analysis 3
              </p>
              <h1 className="text-3xl font-medium pb-2">
                Yearly Crime Incidence and Trends Analysis
              </h1>
              <p className="h-full min-h-fit">
                Analysis 3 explores temporal patterns in crime rates using a
                PySpark DataFrame, which records crimes by year. It involves
                grouping the data by "Year," counting the occurrences, and then
                ordering them to identify trends in crime activity over the
                years. Further, it calculates the total number of crime
                incidents and determines the percentage distribution for each
                year, leading to the creation of a DataFrame that highlights the
                proportion of crimes for each year in relation to the total.
                This output helps in understanding how crime rates have evolved
                over time, revealing specific years with notable increases or
                decreases in crime occurrences.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex h-screen bg-[#F5F5F5]">
          <div className="flex flex-col w-[50%] h-full items-start justify-center text-black">
            <div className="p-12 flex flex-col space-y-2 w-[90%]">
              <p className="text-primary font-bold text-[#284d89]">
                Crime Analysis 4
              </p>
              <h1 className="text-3xl font-medium pb-2">
                Analysis of Crime Frequencies Across Different Months
              </h1>
              <p className="h-full min-h-fit">
                Analysis 4 explores seasonal trends in crime rates using a
                PySpark DataFrame structured with a "Month" column. It groups
                the crime data by month, counts the occurrences, and orders them
                to identify which months experience the highest crime rates.
                Additionally, the total number of crimes across all months is
                calculated. This total serves as the basis for computing the
                percentage distribution of crimes for each month by dividing
                each month's count by the total and converting the result into a
                percentage. The outputs include a DataFrame showing each month's
                crime count and another showcasing the proportion of total
                crimes occurring in each month, providing insights into possible
                seasonal patterns in crime occurrences.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] h-full bg-blue justify-center items-center text-black">
            <LineChart
              width={700}
              height={300}
              data={analysis4}
              // margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="Crime_Count" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </div>
        <div className="w-full flex h-screen bg-black">
          <div className="flex flex-col w-[50%] h-full bg-blue justify-center items-center">
            {/* <Image
              src="/Analysis_5.jpg"
              alt="Statistical Breakdown of Most Common Crimes"
              height={300}
              width={300}
            /> */}
            <ScatterChart
              width={500}
              height={250}
              margin={{
                top: 20,
                right: 20,
                bottom: 10,
                left: 10,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="x" name="Year" range={[2000, 2024]} />
              <YAxis dataKey="y" type="number" name="Count" />

              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter
                name="No. of Arrests"
                data={analysis5_1}
                fill="#8884d8"
              />
            </ScatterChart>
            <ScatterChart
              width={500}
              height={250}
              margin={{
                top: 20,
                right: 20,
                bottom: 10,
                left: 10,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="x" name="Year" range={[2000, 2024]} />
              <YAxis dataKey="y" type="number" name="Count" />

              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter
                name="No. of Domestic Incidents"
                data={analysis5_2}
                fill="#ff0000"
              />
            </ScatterChart>
          </div>
          <div className="flex flex-col w-[50%] h-full items-start justify-center">
            <div className="p-12 flex flex-col space-y-2 w-[90%]">
              <p className="text-primary font-bold text-[#284d89]">
                Crime Analysis 5
              </p>
              <h1 className="text-2xl font-medium pb-2">
                Comparative Annual Statistics on Arrests and Domestic Incidents
              </h1>
              <p className="h-full min-h-fit">
                Analysis 5 leverages a DataFrame to compute and compare yearly
                totals of arrests and domestic incidents within crime data. It
                aggregates these figures for each year, then sorts the results
                to highlight years with the highest arrest rates. The output,
                displayed in a DataFrame, shows each year alongside the total
                arrests and domestic incidents recorded, allowing for an easy
                assessment of trends in law enforcement activity over time. This
                approach identifies significant years of law enforcement actions
                and patterns in domestic incidents, providing a clear historical
                perspective on crime and police response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
