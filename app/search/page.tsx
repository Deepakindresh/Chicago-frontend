import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home() {
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
      </div>
    </Wrapper>
  );
}
