"use client";
import React, { useState, useEffect } from "react";
import Allexercice from "../../lib/exerciceAll";
import Allexercices from "@/comp/Allexercices";
export default function Index() {
  console.log("1");
  const [muscle, setmuscle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementPage,setelementPage]=useState(6)
  const [data,setData]=useState([])
  console.log("test", muscle);

  useEffect(() => {
    console.log(2);

    Allexercice()
      .then((res) => {
        setData(res)
        console.log(res);
        
        setmuscle(res.splice(0,elementPage));
      })
      .catch((err) => console.error(err));
  }, []);
  const paginationRoles = (x: number) => {
    if (currentPage >= 1) {

      setCurrentPage(currentPage + x);
      console.log(  elementPage,elementPage+6);
            
            setmuscle(
              data.splice(
                elementPage,
                elementPage+6
              )
            )
            setelementPage(elementPage*currentPage)
            console.log("test",muscle)

          
    }
    else alert('you cant go there')
  };
  const pagination = () => {


  };

  return (
    <div>
      <button className="bg-white "
        onClick={() => {
          paginationRoles(1);
          ;
        }}
      >
        next
      </button>
      <button className="bg-white "
        onClick={() => {
          paginationRoles(1);
        }}
      >
        prev
      </button>
      <input type="text" id="" className="bg-white " />
      <div className="grid grid-rows-3 grid-cols-3 gap-3.5	 sm text-white	">
        {muscle.map((e: ExerciseType, i: number) => (
          <div key={i}>
            <Allexercices exercises={e} />
          </div>
        ))}
      </div>
    </div>
  );
}
