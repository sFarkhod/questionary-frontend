import React from "react";
import { useSelector } from "react-redux";

function Questionary() {
  const access = useSelector((state: any) => state.user.access);
  const refresh = useSelector((state: any) => state.user.refresh);

  console.log(`Access: ${access} \n Refresh ${refresh}`);
  
  return ( 
    <div>Questionary</div>
  )
}

export default Questionary;