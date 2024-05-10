import Info from './Shop/Info'
import './App.css'

function App() {
  
  return (
    <>
    <h1>FEATURED PRODUCTS</h1><hr />
    <div className='main'>
      <Info img = "https://demo.htmlcodex.com/1479/online-shop-website-template/img/product-1.jpg" price="$ 120.00" />
      <Info img = "https://demo.htmlcodex.com/1479/online-shop-website-template/img/product-2.jpg" price="$ 118.00" />
      <Info img="https://demo.htmlcodex.com/1479/online-shop-website-template/img/product-3.jpg" price="$ 103.00" />
      <Info img="https://demo.htmlcodex.com/1479/online-shop-website-template/img/product-4.jpg" price="$ 113.00" />
      <Info img="https://demo.htmlcodex.com/1479/online-shop-website-template/img/product-5.jpg" price="$ 101.00" />
      <Info img="https://demo.htmlcodex.com/1479/online-shop-website-template/img/product-6.jpg" price="$ 108.00" />
      <Info img="https://demo.htmlcodex.com/1479/online-shop-website-template/img/product-7.jpg" price="$ 110.00" />
      <Info img="https://demo.htmlcodex.com/1479/online-shop-website-template/img/product-8.jpg" price="$ 100.00" />
    </div>
    </>
  )
}

export default App
