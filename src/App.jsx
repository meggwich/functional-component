import './App.css';
import PropTypes from 'prop-types';

class ShopItem {
  constructor(brand, title, description, descriptionFull, price, currency) {
    this.brand = brand;
    this.title = title;
    this.description = description;
    this.descriptionFull = descriptionFull;
    this.price = price;
    this.currency = currency;
  }
}

function ShopItemFunc({ item }) {

  const formattedPrice = `${ item.currency }${ item.price.toFixed(2) }`;

  return (
    <div className="main-content">
      <h2>{ item.brand }</h2>
      <h1>{ item.title }</h1>
      <h3>{ item.description }</h3>
      <div className="description">
        { item.descriptionFull }
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{ formattedPrice }</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

// Добавление валидации пропсов
ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

const item = new ShopItem(
  'Tiger of Sweden',
  'Leonard coat',
  'Minimalistic coat in cotton-blend',
  "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  399,
  '£'
)

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={ item } />
      </div>
    </div>
  )
}

export default App
