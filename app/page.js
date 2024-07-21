import Image from "next/image";
import Filterbox from "./components/filter";

const data = [{
  "salary": 25000,
  "reduction": 5000,
  "how":[
    {
      "Funds" : {type:"Funds",name:"name"},
      "Funds" : {type:"Funds",name:"name"},
      "Funds" : {type:"Funds",name:"name"},
    }
  ],
}]
export default function Home() {
  return (
    <main className="">
        <Filterbox/>
        {}
    </main>
  );
}
