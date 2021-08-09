import Women from '../../../components/website/Women/Women'
import Clock from '../../../components/website/Clock/Clock'
import Men from '../../../components/website/Men/Men'
import Banner from '../../../components/website/Banner/Banner'
import TopProduct from '../../../components/website/TopProduct/TopProduct'
import Blogs from '../../../components/website/Blogs/Blogs'
import useProduct from '../../../utils/hooks/useProduct'

const Home = (props) => {
    const { products } = useProduct()

    return (
        <div>
            <Banner />
            <Women {...props} womenProducts={products.filter(p => (p.typeId === 2))} />
            <Clock />
            <Men menProducts={products.filter(p => (p.typeId === 1))} />
            <TopProduct />
            <Blogs />
        </div>
    )
}

export default Home
