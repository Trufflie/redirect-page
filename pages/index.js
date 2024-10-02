import Spinner from "./spinner";
import { useState } from "react";
        
export default function Home() {
  const [time, setTime] = useState(5);
//make time countdown once per second until 0
setInterval(() => {
    if (time > 0) {
        setTime(time - 1);
        }
        }, 1000);
        




// if (time=== 0) {

// window.location.href = 'http://www.trufflie.com';

// }
  return (
    
    
      <div className="flex flex-col  absolute  h-fit w-fit">
        <h1 className="text-3xl font-bold text-center"> This page has moved! </h1>
      <div className="text-center relative top-0 left-1/2">
        <Spinner />
        <redir time= "time"/>
        </div>
          <div className="flex-col">
            
            <p className="text-lg text-center ">You can find the new location at <a href="trufflie.com">Trufflie.com</a>
            </p>
           <p>you will be automatically redirected in {time} seconds.</p>
           
           </div>
           </div>
           );
           }

        
