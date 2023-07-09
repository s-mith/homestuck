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
    const binaryStringArray = binaryString.match(/.{1,4}/g);


    return (
        <div>
            {/* orange rectangle with centered content*/}
            <div className="w-96 h-[29rem] bg-orange-500 flex justify-center items-center">
                {/* 12 rows of 4 columns */}
                <div className="grid grid-cols-4 gap-0 w-64 h-96 bg-white">
                    {binaryStringArray.map((binaryString, index) => {
                        return (
                            // grid of 12 rows of 4 columns
                            <div key={index} className="grid grid-rows-12 gap-0">
                                {binaryString.split('').map((bit, index) => {
                                    return (
                                        // grid of 12 rows of 1 column
                                        <div key={index} className="grid grid-rows-12 gap-0">
                                            {bit === '1' ? (
                                                // if the bit is 1, then show a rectangle
                                                <div className="w-[80%] h-6 bg-black"></div>
                                            ) : (
                                                // if the bit is 0, then show nothing
                                                <div className="w-[80%] h-6 transparent"></div>
                                            )}
                                        </div>
                                    );
                                })}
                                
                </div>
                        );
                    })}

            </div>
                

        </div>
        </div>
    );
};



export default PunchedCard;