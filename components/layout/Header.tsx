export default function Header() {
    return (
        <div className="flex pb-[1px] flex-col justify-center items-center w-full h-[138px] absolute left-[3px] top-[1px]">
            <div className="flex pt-2 pr-[406px] pb-[9px] pl-[1498px] justify-end items-center shrink-0 bg-[rgba(0,0,0,0.40)] w-full h-[33px] overflow-hidden">
                <div className="flex pt-0.5 pr-0 pb-0 pl-[5px] justify-end items-center w-4 h-4">
                    <div className="w-4 h-4 relative">
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 h-2.5 absolute left-1 top-[1px] "
                        >
                            <path
                                d="M6.18185 11.2727C8.99348 11.2727 11.2728 8.99345 11.2728 6.18182C11.2728 3.37019 8.99348 1.09091 6.18185 1.09091C3.37022 1.09091 1.09094 3.37019 1.09094 6.18182C1.09094 8.99345 3.37022 11.2727 6.18185 11.2727Z"
                                stroke="white"
                                strokeWidth="2.18182"
                            />
                        </svg>
                        <svg
                            width="7"
                            height="7"
                            viewBox="0 0 7 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[3px] h-[3px] absolute left-0.5 top-[11px]"
                        >
                            <path
                                d="M4.81545 1.54279L1.54272 4.81551"
                                stroke="white"
                                strokeWidth="2.18182"
                                strokeLinecap="square"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="shrink-0 w-285 h-26 relative">
                <div className="w-[285px] h-16 absolute left-4 top-5"></div>
                <div className="flex py-6 px-0 justify-center items-center gap-2 w-186 h-26 absolute left-95 top-0">
                    <button className="cursor-pointer text-nowrap flex pt-[9px] pr-4 pb-[9px] pl-4 justify-center items-center shrink-0 rounded-xl w-[102px] h-10">
                        <p className="flex flex-col justify-center shrink-0 text-[#FFF] font-manrope text-md font-semibold leading-[1.5em] w-[70px] h-[22px]">
                            Products
                        </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex pt-[9px] pr-4 pb-[9px] pl-4 justify-center items-center shrink-0 rounded-xl w-[133px] h-10">
                        <p className="flex flex-col justify-center shrink-0 text-[#FFF] font-manrope text-md font-semibold leading-[1.5em] w-[101px] h-[22px]">
                            Learning Hub
                        </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex pt-[9px] pr-4 pb-[9px] pl-4 justify-center items-center shrink-0 rounded-xl w-[105px] h-10">
                        <p className="flex flex-col justify-center shrink-0 text-[#FFF] font-manrope text-md font-semibold leading-[1.5em] w-[73px] h-[22px]">
                            Company
                        </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex pt-[9px] pr-4 pb-[9px] pl-4 justify-center items-center shrink-0 rounded-xl w-[237px] h-10">
                        <p className="flex flex-col justify-center shrink-0 text-[#FFF] font-manrope text-md font-bold leading-[1.5em] w-[205px] h-[22px]">
                            Call Today &#40;866&#41; 856-4580
                        </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex py-[17px] px-6 justify-center items-center gap-2 shrink-0 rounded-xl bg-[#FDDD00] w-34 h-14">
                        <p className="flex flex-col justify-center shrink-0 text-[#1C2C57] font-manrope text-md font-bold leading-[1.5em] w-16 h-[22px]">
                            Contact
                        </p>
                        <div className="flex justify-center items-center shrink-0 w-4 h-4">
                            <div className="flex justify-center items-center shrink-0 w-4 h-4 overflow-hidden">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0 w-4 h-4 overflow-hidden relative "
                                >
                                    <path d="M13 5L8 10L3 5" stroke="black" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
                <img
                    src="/asiagroup_solar.png"
                    className="w-[286px] h-[63px] absolute left-[15px] top-[17px] max-w-none"
                    alt="asiagroup_solar 2"
                />
            </div>
        </div>
    );
}