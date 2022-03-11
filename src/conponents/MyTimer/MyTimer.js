import React, { useState, useEffect } from 'react';
import MyAccordion from '../MyAccordion/MyAccordion';

let i = 0;
const MyTimer = (props) =>{
  const [second, setsecond] = useState(i);
  function Update () {
          setsecond(second=>second+1);
          if(props.ismain){
                i+=1;
          }
          
  }
  useEffect(() => {
          const intervald = setInterval(()=>{
                  Update();
          },1000)
          return () => clearTimeout(intervald);
  }, []);
  if(props.ismain){
        return(
                <></>
        )
  }
  return(
          <MyAccordion title={"Время на странице"} >
                <div className='timer'>
                        {~~((second%(60*60*60))/(60*60)) }:{~~((second%(60*60))/60) }:{second%60}
                </div>
          </MyAccordion>
  )
  
}
export default MyTimer

