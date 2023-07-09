'use client'
import Image from 'next/image'
import PunchedCard from '@/components/PunchedCard'
import { useState, useEffect } from 'react'
import CodeInput from '@/components/CodeInput'
import orCombine from '@/utils/or'
import andCombine from '@/utils/and'
import str2bin from '@/utils/str2bin'
import valueDict from '@/utils/valueDict'




export default function Home() {

  const [code1, setCode1] = useState('f1f11111');
  const [combineMode, setCombineMode] = useState('&&'); // ['||', '&&']
  const [code2, setCode2] = useState('f1f1f111');
  const [code3, setCode3] = useState('00000000');

  


  const handleSetCode1 = (e) => {
    setCode1(e.target.value);
   
  }

  const handleSetCode2 = (e) => {
    setCode2(e.target.value);
    
  }

  useEffect(() => {
    console.log('code1', code1);
    if (code1.length == 8 && code2.length == 8) {
    if (combineMode === '||') {
      let result = orCombine( str2bin(code1), str2bin(code2))
        // split the result into chunks of 6
        result = result.match(/.{1,6}/g);
        // convert each chunk into a decimal number
        result = result.map((chunk) => parseInt(chunk, 2));
        // convert each decimal number into a character
        result = result.map((num) => Object.keys(valueDict).find(key => valueDict[key] === num));
        // join the characters into a string
        result = result.join('');
        setCode3(result);
     
    } else {
      let result = andCombine( str2bin(code1), str2bin(code2))
        // split the result into chunks of 6
        result = result.match(/.{1,6}/g);
        // convert each chunk into a decimal number
        result = result.map((chunk) => parseInt(chunk, 2));
        // convert each decimal number into a character
        result = result.map((num) => Object.keys(valueDict).find(key => valueDict[key] === num));
        // join the characters into a string
        result = result.join('');
        setCode3(result);
    }
  }
  }, [combineMode, code1, code2]);

  

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Punched Card</h1>
        <p className="text-xl text-center">Nerd fact: There are exactly 281,474,976,710,656 different possible captchalogue codes, as there are 64 different characters (0 to 9, A to Z (capitals), a to z (lowercase), and ! and ?) and 8 character spaces to work with.</p>
      </div>
      {/* make a row to put all the cards on */}
      <div className="flex flex-row justify-center items-center gap-4">
        {/* make a column to put the first card in */}
        <div className="flex flex-col justify-center items-center gap-4">
          <PunchedCard code={code1} />
          <CodeInput code={code1} onchange={(e) => handleSetCode1(e)} />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* make a big button to swap combine mode */}
          <button className="border-2 border-gray-500 rounded-md p-2" onClick={() => setCombineMode(combineMode === '||' ? '&&' : '||')}>{combineMode}</button>
        </div>
        {/* make a column to put the second card in */}
        <div className="flex flex-col justify-center items-center gap-4">
          <PunchedCard code={code2} />
          <CodeInput code={code2} onchange={(e) => handleSetCode2(e)} />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* make a equals sign */}
          <h1 className="text-4xl font-bold text-center">=</h1>
          </div>
        {/* make a column to put the third card in */}
        <div className="flex flex-col justify-center items-center gap-4">
          <PunchedCard code={code3} />
           {/* make an invisible code input */}
           <div>
            <input className="border-2 border-gray-500 rounded-md p-2" disabled type="text" value={code3} />
        </div>
                  </div>
      </div>

        
    </div>
  )
}
