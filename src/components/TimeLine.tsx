import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TestMain from "@images/testMain.png";

const TimeLine: React.FC = () => {
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
    <div className="flex flex-row gap-5 justify-center box-border w-min h-fit m-5 sm:m-2 sm:w-min sm:gap-2 md:w-min md:m-4 md:gap-4 xs:w-min xs:gap-2 xs:flex-col xs:items-start xxs:w-[80%] xxs:gap-2 xxs:flex-col xxs:items-start">
      <ol className="border-l border-neutral-300 dark:border-neutral-500 w-full mr-20 sm:w-full sm:-mr-10 md:w-full md:mr-12 xs:w-full xxs:w-full">
        {/* <!--First item--> */}
        <li>
          <div className="flex flex-start items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 xs:text-xs xxs:text-xs">
              {data?.project[1].period[0]} - {data?.project[1].period[1]}
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <div className="flex flex-row">
              <h4 className="mb-1.5 text-xl sm:text-base md:text-lg xs:text-sm xxs:text-sm font-semibold">
                {data?.project[1].name}
              </h4>
              <span className="ml-5 text-blue-500 font-bold pt-0.5 sm:text-base md:text-lg xs:text-sm xxs:text-sm">
                {data?.project[1].percent}
              </span>
              <span className="ml-3 text-slate-500 font-bold pt-0.5 sm:text-base md:text-lg xs:text-sm xxs:text-sm">
                {data?.project[1].teamInfo}
              </span>
            </div>
            <div className="w-full flex flex-col gap-5 mt-2 sm:w-full sm:gap-2 md:w-full md:gap-3">
              <img
                src={TestMain}
                alt="main image"
                className="w-full sm:w-[70%] md:w-[90%] xs:w-[70%] xxs:w-[70%]"
              />
              <p className="text-sm sm:text-xs md:text-xs xs:text-xs xxs:text-xs mb-2 italic sm:w-[70%] md:w-[90%] xs:w-[50%] xxs:w-[50%]">
                {data?.project[1].stack.join(", ")}
              </p>
            </div>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm sm:text-[10px] sm:w-96 sm:leading-snug md:text-xs md:w-96 xs:text-[9px] xs:leading-tight xxs:text-[9px] xxs:leading-tight whitespace-pre-wrap">
              {data?.project[1].shortDesc}
            </p>
            <Link to="/test2" preventScrollReset={true}>
              <button
                type="button"
                className="mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
        {/* <!--Second item--> */}
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 xs:text-xs xxs:text-xs">
              {data?.project[0].period[0]} - {data?.project[0].period[1]}
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <div className="flex flex-row">
              <h4 className="mb-1.5 text-xl sm:text-base md:text-lg xs:text-sm xxs:text-sm font-semibold">
                {data?.project[0].name}
              </h4>
              <span className="ml-5 text-blue-500 font-bold pt-0.5 sm:text-base md:text-lg xs:text-sm xxs:text-sm">
                {data?.project[0].percent}
              </span>
              <span className="ml-3 text-slate-500 font-bold pt-0.5 sm:text-base md:text-lg xs:text-sm xxs:text-sm">
                {data?.project[0].teamInfo}
              </span>
            </div>
            <div className="w-full flex flex-col gap-5 mt-2 sm:w-full sm:gap-2 md:w-full md:gap-3">
              <img
                src={TestMain}
                alt="main image"
                className="w-full sm:w-[70%] md:w-[90%] xs:w-[70%] xxs:w-[70%]"
              />
              <p className="text-sm sm:text-xs md:text-xs xs:text-xs xxs:text-xs mb-2 italic sm:w-[70%] md:w-[90%] xs:w-[50%] xxs:w-[50%]">
                {data?.project[0].stack.join(", ")}
              </p>
            </div>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm sm:text-[10px] sm:w-96 sm:leading-snug md:text-xs md:w-96 xs:text-[9px] xs:leading-tight xxs:text-[9px] xxs:leading-tight whitespace-pre-wrap">
              {data?.project[0].shortDesc}
            </p>
            <Link to="/test1">
              <button
                type="button"
                className="mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
      </ol>
      <ol className="border-l border-neutral-300 dark:border-neutral-500 w-fit sm:w-fit md:w-fit xs:w-full xxs:w-full">
        {/* <!--fourth item--> */}
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 xs:text-xs xxs:text-xs">
              {data?.project[1].period[0]} - {data?.project[1].period[1]}
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <div className="flex flex-row">
              <h4 className="mb-1.5 text-xl sm:text-base md:text-lg xs:text-sm xxs:text-sm font-semibold">
                {data?.project[1].name}
              </h4>
              <span className="ml-5 text-blue-500 font-bold pt-0.5 sm:text-base md:text-lg xs:text-sm xxs:text-sm">
                {data?.project[1].percent}
              </span>
              <span className="ml-3 text-slate-500 font-bold pt-0.5 sm:text-base md:text-lg xs:text-sm xxs:text-sm">
                {data?.project[1].teamInfo}
              </span>
            </div>
            <div className="w-full flex flex-col gap-5 mt-2 sm:w-full sm:gap-2 md:w-full md:gap-3">
              <img
                src={TestMain}
                alt="main image"
                className="w-full sm:w-[70%] md:w-[90%] xs:w-[70%] xxs:w-[70%]"
              />
              <p className="text-sm sm:text-xs md:text-xs xs:text-xs xxs:text-xs mb-2 italic sm:w-[70%] md:w-[90%] xs:w-[50%] xxs:w-[50%]">
                {data?.project[1].stack.join(", ")}
              </p>
            </div>
            <p className="mb-3 text-neutra l-500 dark9ext-neutral-300 w-96 text-sm sm:text-[10px] sm:w-96 sm:leading-snug  md:text-xs md:w-96 xs:text-[10px] xs:leading-tight xxs:text-[9px] xxs:leading-tight whitespace-pre-wrap">
              {data?.project[1].shortDesc}
            </p>
            <Link to="/test2">
              <button
                type="button"
                className="mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-o hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 )]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
        {/* <!--fifth item--> */}
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 xs:text-xs xxs:text-xs">
              {data?.project[0].period[0]} - {data?.project[0].period[1]}
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <div className="flex flex-row">
              <h4 className="mb-1.5 text-xl sm:text-base md:text-lg xs:text-sm xxs:text-sm font-semibold">
                {data?.project[0].name}
              </h4>
              <span className="ml-5 text-blue-500 font-bold pt-0.5 sm:text-base md:text-lg xs:text-sm xxs:text-sm">
                {data?.project[0].percent}
              </span>
              <span className="ml-3 text-slate-500 font-bold pt-0.5 sm:text-base md:text-lg xs:text-sm xxs:text-sm">
                {data?.project[0].teamInfo}
              </span>
            </div>
            <div className="w-full flex flex-col gap-5 mt-2 sm:w-fit sm:gap-3 md:w-fit md:gap-3">
              <img
                src={TestMain}
                alt="main image"
                className="w-full sm:w-[70%] md:w-[90%] xs:w-[70%] xxs:w-[70%]"
              />
              <p className="text-sm sm:text-xs xs:text-xs xxs:text-xs md:text-xs mb-2 italic sm:w-[70%] md:w-[90%] xs:w-[50%] xxs:w-[50%]">
                {data?.project[0].stack.join(", ")}
              </p>
            </div>
            <p className="mb-3 text-neutra l-500 dark9ext-neutral-300 w-96 text-sm sm:text-[10px] sm:w-96 sm:leading-snug  md:text-xs md:w-96 xs:text-[10px] xs:leading-tight xxs:text-[9px] xxs:leading-tight whitespace-pre-wrap">
              {data?.project[0].shortDesc}
            </p>
            <Link to="/test1">
              <button
                type="button"
                className="mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-o hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 )]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;
