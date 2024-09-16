import { useEffect, useState } from "react";
import ResponsiveAppBar from "../../components/AppBar/AppBar"

interface DataItem {
    id: number;
    companyName: string;
    ideas: number;
}

const Home = () => {
    const [data, setData] = useState<DataItem[]>([]);
    useEffect(()=>{
      fetch('http://localhost:3000/home')
      .then(res=>res.json())
      .then(data => console.log(setData(data))
      )
      .catch(err => console.log(err))
    },[])
  return (
    <>
        <ResponsiveAppBar/>
        <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Company:</strong> {item.companyName} - <strong>Ideas:</strong> {item.ideas}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home