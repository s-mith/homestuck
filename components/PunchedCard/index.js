import React from 'react';
import valueDict from '@/utils/valueDict';
import str2bin from '@/utils/str2bin';

const PunchedCard = ({ code }) => {


    // if the length of the code is not 8 

    if (code.length !== 8) {
        // return a div of the same size as the card
        return (
            <div className="w-96 h-[29rem] bg-orange-500 flex justify-center items-center">
                <div className="w-64 h-96 bg-white"></div>
            </div>
        );
    }

    // check to see that all the characters in the code are keys in the valueDict
            
    const binaryString = str2bin(code);
    if (binaryString === null) {
        return (
            <div className="w-96 h-[29rem] bg-orange-500 flex justify-center items-center">
                <div className="w-64 h-96 bg-white"></div>
            </div>
        );
    }
    const binaryStringArray = binaryString.match(/.{1,1}/g);
    console.log(binaryStringArray);


    return (
        <div>
            {/* orange rectangle with centered content*/}
            <div className="w-96 h-[29rem] bg-orange-500 flex justify-center items-center">
                {/* 12 rows of 4 columns */}
                <div className="grid grid-cols-4 gap-0 w-64 h-96 bg-white">
                    {/* first column */}
                    {/* make 4 collums */}
                    { [1,2,3,4].map((bit, index) => {
                        return (
                    <div className="flex flex-col justify-center items-center" key={index}>
                        {/* 12 rows */}
                        {binaryStringArray.slice(0+(12*index), 12+(12*index)).map((bit, index) => {
                            if (bit === '1') {
                                return (
                                    <div className="w-[80%] h-4 m-2 bg-black" key={index}></div>
                                );
                            }
                            return (
                                <div className="w-[80%] h-4 m-2 bg-white" key={index}></div>
                            );
                        })}

                    </div>)
                    })}
                                    

            </div>
                

        </div>
        </div>
    );
};



export default PunchedCard;