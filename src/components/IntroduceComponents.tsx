const IntroComponents: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 border p-8 w-full h-fit justify-center sm:w-full sm:h-fit sm:pt-2 sm:-pl-2 sm:border-none md:w-full md:h-fit md:p-7 xs:w-fit xs:p-5 xxs:w-fit xxs:p-0 xxs:-ml-5 xxs:border-none">
      <p className="font-semibold text-l sm:text-sm md:text-base xs:text-xs xxs:text-[11px]">
        ㅇㅇㅇ의 포트폴리오 입니다.
      </p>
      <div className="ml-5 sm:ml-0 md:ml-4 sm:text-xs md:text-sm xs:text-[10px] xs:ml-0 xxs:text-[10px] xxs:ml-0">
        <p className="mb-2">📍 자기소개 1</p>
        <p>자기소개 상세 내용1</p>
      </div>
      <div className="ml-5 sm:ml-0 md:ml-4 sm:text-xs md:text-sm xs:text-[10px] xs:ml-0 xxs:text-[10px] xxs:ml-0">
        <p className="mb-2">📍 자기소개 2</p>
        <p>자기소개 상세 내용 2</p>
      </div>
    </div>
  );
};

export default IntroComponents;
