import { useState } from "react";
import config from "../config/config"


const RunCommand = async (lineNumber: string, lineStatus: string) => {
  await fetch(`${config.backendUrl}/${lineStatus}?id=${lineNumber}`, {
    method: 'GET',
  });
}

const Manual_start = () => {
  const [isToggle1, setIsToggle1] = useState(false);
  const [isToggle2, setIsToggle2] = useState(false);
  const [isToggle3, setIsToggle3] = useState(false);
  const [isToggle4, setIsToggle4] = useState(false);
  const [isToggle5, setIsToggle5] = useState(false);
  const [isToggle6, setIsToggle6] = useState(false);
  const [isToggle7, setIsToggle7] = useState(false);
  const [isToggle8, setIsToggle8] = useState(false);
  const [isToggle9, setIsToggle9] = useState(false);
  const [isToggle10, setIsToggle10] = useState(false);
  return (
    <div 
      className='w-full flex flex-row flex-wrap gap-10 items-centre justify-center'
      >
        <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle1 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle1)
              {
                setIsToggle1(!isToggle1);
                RunCommand('1', 'off');
              }
            else
              {
                setIsToggle1(!isToggle1);
                RunCommand('1', 'on');
              }
            
          }}
          >
          line 1
          </button>
        
          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle2 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle2)
            {
              setIsToggle2(!isToggle2);
              RunCommand('2', 'off');
            }
            else
            {
              setIsToggle2(!isToggle2);
              RunCommand('2', 'on');
            }
          }}
          >
          line 2
          </button>

          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle3 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle3)
            {
              setIsToggle3(!isToggle3);
              RunCommand('3', 'off');
            }
            else
            {
              setIsToggle3(!isToggle3);
              RunCommand('3', 'on');
            }
          }}
          >
          line 3
          </button>

          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle4 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle4)
            {
              setIsToggle4(!isToggle4);
              RunCommand('4', 'off');
            }
            else
            {
              setIsToggle4(!isToggle4);
              RunCommand('4', 'on');
            }
          }}
          >
          line 4
          </button>

          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle5 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle5)
            {
              setIsToggle5(!isToggle5);
              RunCommand('5', 'off');
            }
            else
            {
              setIsToggle5(!isToggle5);
              RunCommand('5', 'on');
            }
          }}
          >
          line 5
          </button>

          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle6 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle6)
            {
              setIsToggle6(!isToggle6);
              RunCommand('6', 'off');
            }
            else
            {
              setIsToggle6(!isToggle6);
              RunCommand('6', 'on');
            }
          }}
          >
          line 6
          </button>

          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle7 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle7)
            {
              setIsToggle7(!isToggle7);
              RunCommand('7', 'off');
            }
            else
            {
              setIsToggle7(!isToggle7);
              RunCommand('7', 'on');
            }
          }}
          >
          line 7
          </button>

          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle8 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle8)
            {
              setIsToggle8(!isToggle8);
              RunCommand('8', 'off');
            }
            else
            {
              setIsToggle8(!isToggle8);
              RunCommand('8', 'on');
            }
          }}
          >
          line 8
          </button>

          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle9 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle9)
            {
              setIsToggle9(!isToggle9);
              RunCommand('9', 'off');
            }
            else
            {
              setIsToggle9(!isToggle9);
              RunCommand('9', 'on');
            }
          }}
          >
          line 9
          </button>

          <button
          className={`px-2 py-1.5 rounded-[10px] ${ isToggle10 ? 'bg-red-600' : 'bg-emerald-400'} text-black border-blue-700 border`}
          type="button"
          onClick={() => { 
            if(isToggle10)
            {
              setIsToggle10(!isToggle10);
              RunCommand('10', 'off');
            }
            else
            {
              setIsToggle10(!isToggle10);
              RunCommand('10', 'on');
            }
          }}
          >
          line 10
          </button>
      </div>
  )
}

export default Manual_start