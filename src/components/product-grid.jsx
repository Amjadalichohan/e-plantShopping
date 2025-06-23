import plantsArray from './plantsArray'; // adjust the path if the file is in a different folder

<div className="product-grid">
  <div className="product-list">
    {plantsArray.map((category, idx) =>
      category.plants.map((plant, i) => (
        <div className="product-card" key={`${idx}-${i}`}>
          <img className="product-image" src={plant.image} alt={plant.name} />
          <h3 className="product-title">{plant.name}</h3>
          <p>{plant.description}</p>
          <p className="product-price">{plant.cost}</p>
          <button className="product-button">Add to Cart</button>
        </div>
      ))
    )}
  </div>
</div>
const plantsArray = [
  {
    id: 1,
    name: 'Aloe Vera',
    price: 8.99,
    image: 'https://example.com/aloe.jpg',
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 12.5,
    image: 'https://example.com/snake.jpg',
  },
  // more plants...
];

export default plantsArray;