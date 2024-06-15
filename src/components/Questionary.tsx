import React from "react";
import { useSelector } from "react-redux";
import useDocumentTitle from "../useDocumentTitle";

function Questionary() {
  useDocumentTitle('Questionary');
  
  const access = useSelector((state: any) => state.user.access);
  const refresh = useSelector((state: any) => state.user.refresh);
  const isAdmin = useSelector((state: any) => state.user.is_Admin);

  console.log(`Access: ${access} \n Refresh ${refresh} \n Is Admin ${isAdmin}`);
  
  return ( 
    <div>Questionary</div>
  )
}

export default Questionary;
