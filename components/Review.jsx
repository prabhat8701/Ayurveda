"use client"
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Rating from "./Rating";
import { useState } from "react";
const Review = () => {
    const rating = [
        {
            id: 1,
            heading: "Safety",
            subheading: "How safe did you feel with Trausti?",
        },
        {
            id: 2,
            heading: "Communication",
            subheading: "How easy was to communicate with Trausti?",
        }
    ]

    const praise = [
        {
            id: 1,
            praise: "Adventurous",
        },
        {
            id: 2,
            praise: "Clean",
        },
        {
            id: 3,
            praise: "Good listener",
        }
    ]

    const [isTDHovered, setTDHovered] = useState(false);
    const [isTUHovered, setTUHovered] = useState(false);
    const [tDClicked, setTDClicked] = useState(false);
    const [tUClicked, setTUClicked] = useState(false);

    const handleTDClick = () => {
        setTDClicked(true);
        setTUClicked(false);
    };

    const handleTUClick = () => {
        setTUClicked(true);
        setTDClicked(false);
    };

    const [Praises, setPraises] = useState([]);
    const handlePraiseClick = (id) => {
        
        if (Praises.includes(id)) {
            setPraises((prevSelected) => prevSelected.filter((prevId) => prevId !== id));
        } else {
            setPraises((prevSelected) => [...prevSelected, id]);
        }
    };
    


    return (
        <div className=" px-1 w-screen">
            <div className="text-2xl">
                &#10006;
            </div>
            <h1 className=" text-4xl mb-4">Leave a review</h1>
            {
                rating.map((r) => {
                    return <Rating key={r.id} heading={r?.heading} subheading={r?.subheading} />
                })
            }
            <div className="py-5 border-t-0 border-l-0 border-r-0  border-b  border-dashed border-gray-300">
                <h2 className="text-2xl ">Would you recommend Trausti?</h2>
                <p className="text-sm font-sans  text-[#babdc0] ">Your opinion won't be posted publicly</p>
                <div className="text-5xl flex h-[100px] gap-6 text-[#dddfe1]">
                    <div
                        className={`flex cursor-pointer  items-center ${isTDHovered ? 'hover:text-[#FF5733]' : ''} ${tDClicked ? 'text-[#FF5733]' : ''}`}
                        onMouseEnter={() => setTDHovered(true)}
                        onMouseLeave={() => setTDHovered(false)}
                    >
                        <FaThumbsDown className=" hover:text-[3.5rem] pr-3" onClick={handleTDClick} />
                        <p className="text-[24px] font-sans">No</p>
                    </div>
                    <div
                        className={`flex cursor-pointer items-center ${isTUHovered ? 'hover:text-[#90EE90]' : ''} ${tUClicked ? 'text-[#90EE90]' : ''}`}
                        onMouseEnter={() => setTUHovered(true)}
                        onMouseLeave={() => setTUHovered(false)}

                    >
                        <FaThumbsUp className=" hover:text-[3.5rem] pr-3" onClick={handleTUClick} />
                        <p className="text-[24px] font-sans">Yes</p>
                    </div>
                </div>
            </div>
            <div className="py-5 border-t-0 border-l-0 border-r-0  border-b  border-dashed border-gray-300">
                <h2 className="text-[1.70rem]  ">Praise</h2>
                <p className="text-sm font-sans text-[#babdc0]">What traits best describe Trausti?</p>
                <div className="text-md  font-sans py-4 flex gap-2 ">
                    {
                        praise.map((p) => {
                            return <span key={p.id} className={`px-3  rounded-xl flex  justify-center items-center transition ease-in-out delay-150   duration-300 cursor-pointer ${Praises.includes(p.id) ? 'bg-[#90EE90]' : 'bg-[#dddfe1]'} `}
                                onClick={() => handlePraiseClick(p.id)}
                            >{p.praise}</span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Review
