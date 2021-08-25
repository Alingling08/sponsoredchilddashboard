import logo from './logo.svg';
import { useState, useEffect } from 'react'
import Header from './Components/Header';
import ChildInfo from './Components/ChildInfo';


const App = () => {
  const [childinfo, setChildInfo] = useState([])

  useEffect(() => {
    const getChildInfo = async () => {
      const childInfoFromServer = await fetchChildInfo()
      setChildInfo(childInfoFromServer)
    }
    getChildInfo()
  }, [])

  const fetchChildInfo = async () => {
    const res = await fetch('https://stg-svc.worldvision.ca/donorservice/api/profile/7ef79d2ac8c64a239f92527261ab333b/donor/children/en/NamedPrivate?svc=464424')
    const data = await res.json()
    return data.sponsoredChildrenDisplay
  }

  console.log(childinfo);
  return (
    <div>
      <Header title="Sponsored Child Dashboard" />
      <ChildInfo children={childinfo} />
    </div>
  );
}

export default App;
