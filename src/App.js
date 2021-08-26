import logo from './logo.svg';
import { useState, useEffect } from 'react'
import Header from './Components/Header';
import ChildInfo from './Components/ChildInfo';
import LoadingPage from './Components/LoadingPage';



const App = () => {
  const [childinfo, setChildInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getChildInfo = async () => {
      const childInfoFromServer = await fetchChildInfo()
      setChildInfo(childInfoFromServer)
      setLoading(true);
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
      <div className="wrapper-flex">
        {loading ? <ChildInfo children={childinfo} /> : <LoadingPage />}
      </div>
    </div>
  );
}

export default App;
