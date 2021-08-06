import Women from '../../../components/website/Women/Women'
import Clock from '../../../components/website/Clock/Clock'
import Men from '../../../components/website/Men/Men'

const Home = (props) => {
    const { products } = props

    return (
        <div>
            <Women womenProducts={products.filter(p => (p.typeId === 2))} />
            <Clock />
            <Men menProducts={products.filter(p => (p.typeId === 1))} />
        </div>
    )
}

export default Home
