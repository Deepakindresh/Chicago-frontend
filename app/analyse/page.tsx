import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <Wrapper title="Analyse">
      <div className="flex flex-col h-max">
        <div className="w-full flex h-screen bg-black">
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            <Image
              src="/Analysis_1.jpg"
              alt="Statistical Breakdown of Most Common Crimes"
              height={600}
              width={600}
            />
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
                categorize and quantify crime types. By grouping the data by "Primary Type," the analysis identifies the most frequent crimes, notably theft and battery, followed by criminal damage and narcotics. Additionally, it calculates the percentage distribution of each crime type, highlighting their proportion relative to the total number of crimes, with theft comprising over 21% of reported incidents. This provides a clear view of the prevailing crime trends, helping in strategic planning and community awareness.
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
              Analysis 2 utilizes a PySpark DataFrame containing detailed crime data to categorize and quantify crime occurrences by location. It involves grouping the data by "Location Description," counting the crimes at each location, and then sorting these counts to identify areas with the highest crime prevalence. Additionally, the analysis calculates the total number of crime incidents and the percentage distribution of crimes across different locations. The output includes a DataFrame that not only lists the locations and their respective crime counts but also shows the percentage each location contributes to the total crime incidents. This provides a clearer perspective on which locations are more prone to crime, aiding in targeted preventive measures and resource allocation.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            <Image src="/Analysis_2.jpg" alt="Search" height={600} width={600} />
          </div>
        </div>
        <div className="w-full flex h-screen bg-black">
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            <Image
              src="/Analysis_3.jpg"
              alt="Crime Analysis"
              height={400}
              width={400}
            />
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
              Analysis 3 explores temporal patterns in crime rates using a PySpark DataFrame, which records crimes by year. It involves grouping the data by "Year," counting the occurrences, and then ordering them to identify trends in crime activity over the years. Further, it calculates the total number of crime incidents and determines the percentage distribution for each year, leading to the creation of a DataFrame that highlights the proportion of crimes for each year in relation to the total. This output helps in understanding how crime rates have evolved over time, revealing specific years with notable increases or decreases in crime occurrences.
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
              Analysis 4 explores seasonal trends in crime rates using a PySpark DataFrame structured with a "Month" column. It groups the crime data by month, counts the occurrences, and orders them to identify which months experience the highest crime rates. Additionally, the total number of crimes across all months is calculated. This total serves as the basis for computing the percentage distribution of crimes for each month by dividing each month's count by the total and converting the result into a percentage. The outputs include a DataFrame showing each month's crime count and another showcasing the proportion of total crimes occurring in each month, providing insights into possible seasonal patterns in crime occurrences.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            <Image src="/Analysis_4.jpg" alt="Search" height={600} width={600} />
          </div>
        </div>
        <div className="w-full flex h-screen bg-black">
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            <Image
              src="/Analysis_5.jpg"
              alt="Statistical Breakdown of Most Common Crimes"
              height={400}
              width={400}
            />
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
              Analysis 5 leverages a DataFrame to compute and compare yearly totals of arrests and domestic incidents within crime data. It aggregates these figures for each year, then sorts the results to highlight years with the highest arrest rates. The output, displayed in a DataFrame, shows each year alongside the total arrests and domestic incidents recorded, allowing for an easy assessment of trends in law enforcement activity over time. This approach identifies significant years of law enforcement actions and patterns in domestic incidents, providing a clear historical perspective on crime and police response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
