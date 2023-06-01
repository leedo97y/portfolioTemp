import { useEffect, useState } from "react";
import Header from "@layouts/Header";
import Profile from "@layouts/Profile";
import Projects from "@layouts/Projects";
import TestMain from "@images/testMain.png";
import TopButton from "@layouts/TopButton";

const Portfolio: React.FC = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await fetch("/data.json").then((res) => res.json());

        if (fetchData) {
          setData(fetchData);
        }
      } catch (err: unknown) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="grid justify-center m-5 w-full box-border mt-10 xs:w-full xxs:w-fit">
        <div className="flex flex-row items-center w-full xs:flex-col xs:items-start xxs:flex-col xxs:items-start">
          <img
            src={TestMain}
            alt="Test image"
            className="w-[5rem] h-[5rem] mr-5 ml-5 sm:w-[3rem] sm:h-[3rem] sm:mr-3 sm:ml-3 md:w-[4rem] md:h-[4rem] md:mr-4 md:ml-4 xs:w-[3rem] xs:h-[3rem] xs:ml-3 xxs:w-[3rem] xxs:h-[3rem] xxs:ml-3"
          />
          <p className="text-4xl font-bold mt-8 mb-10 pt-4 pl-2 sm:text-2xl md:text-3xl xs:text-xl xs:mt-0 xxs:text-base xxs:mt-0">
            {data?.resumeTitle.title}
          </p>
        </div>
        <Profile />
        <Projects />
      </div>
      <TopButton />
    </>
  );
};

export default Portfolio;
