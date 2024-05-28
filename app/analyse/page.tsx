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
              src="/police.svg"
              alt="Chicago Police"
              height={600}
              width={600}
            />
          </div>
          <div className="flex flex-col w-[50%] h-full items-start justify-center">
            <div className="p-12 flex flex-col space-y-2 w-[90%]">
              <p className="text-primary font-bold text-[#284d89]">
                Crime Analysis
              </p>
              <h1 className="text-3xl font-medium pb-2">
                Welcome to our Website!!
              </h1>
              <p className="h-full min-h-fit">
                Explore the comprehensive database of crime incidents in Chicago
                from 2001 to 2022. Our platform allows you to delve into
                detailed analysis, identifying the types of crimes and their
                occurrences across different years and times. Whether
                you&apos;re a researcher, a concerned citizen, or simply
                curious, you can easily visualize and understand crime patterns,
                helping you stay informed and aware. Start your analysis now and
                uncover the insights behind Chicago&apos;s crime data.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex h-screen bg-[#F5F5F5]">
          <div className="flex flex-col w-[50%] h-full items-start justify-center text-black">
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
              <Button text="Search" />
            </div>
          </div>
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            <Image src="/search.svg" alt="Search" height={600} width={600} />
          </div>
        </div>
        <div className="w-full flex h-screen bg-black">
          <div className="flex w-[50%] h-full bg-blue justify-center items-center">
            <Image
              src="/analysis.svg"
              alt="Crime Analysis"
              height={600}
              width={600}
            />
          </div>
          <div className="flex flex-col w-[50%] h-full items-start justify-center">
            <div className="p-12 flex flex-col space-y-2 w-[90%]">
              <p className="text-primary font-bold text-[#284d89]">
                Chicago Crime Analysis
              </p>
              <h1 className="text-3xl font-medium pb-2">
                Checkout our Analysis!!
              </h1>
              <p className="h-full min-h-fit">
                Explore the comprehensive database of crime incidents in Chicago
                from 2001 to 2022. Our platform allows you to delve into
                detailed analysis, identifying the types of crimes and their
                occurrences across different years and times. Whether
                you&apos;re a researcher, a concerned citizen, or simply
                curious, you can easily visualize and understand crime patterns,
                helping you stay informed and aware. Start your analysis now and
                uncover the insights behind Chicago&apos;s crime data.
              </p>
              <Button text="Analysis" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
