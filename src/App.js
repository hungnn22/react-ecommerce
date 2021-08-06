import { useEffect, useState } from "react";
import Routes from "./routes";
import base from './utils/api/base'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProcucts = async () => {
      const { data } = await base.getAll('/products')
      setProducts(data)
    }
    fetchProcucts()
  }, [])

  return (
    <Routes 
      products={products}
    />
  );
}

export default App;