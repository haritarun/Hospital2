import Header from '../HomePage/Header'
import Search from './Search'
import ShopImage from './ShopImage'
import SwiperCard from './SwiperCard'
import Footer from '../HomePage/Footer'
import Filter from './Filter'
import Cart from './Cart'


const Shop = () => {
  return (
    <div>
      
      <Header />
      <Search />
      <Cart />
      <ShopImage />
      <Filter />
      <SwiperCard />
      <SwiperCard />
      <hr />
      <Footer />
    </div>
  )
}

export default Shop
