import { useEffect, useState, Fragment } from "react";
import Modal from "../modal/Modal";
import { request } from "../server/data";
import logoPizza from "../../assets/logo-pizza.svg";

const HomePage = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPizzaData, setFilteredPizzaData] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    request
      .get("/pizza")
      .then((response) => {
        setPizzaData(response.data);
        setFilteredPizzaData(response.data);
      })
      .catch((error) => {
        console.error("Malumotlarni olishda xato:", error);
      });
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(total);
  }, [cart]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredData = pizzaData.filter((pizza) =>
      pizza.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPizzaData(filteredData);
  };

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
  };

  const closeModal = () => {
    setSelectedPizza(null);
  };

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <Fragment>
      <header>
        <div className="container">
          <nav>
            <div className="nav-link-left">
              <img src={logoPizza} alt="logo" />
              <h3>
                Pitsa <span>.uz</span>
              </h3>
            </div>
            <div className="nav-link-center">
              <input
                type="text"
                placeholder="Pitsalarni qidirish"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="nav-link-right">
              <button>
                <h4>
                  <span>{cartTotal}</span> <br />
                  UZS
                </h4>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{cart.length}</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="pizza-box-card">
            <div className="pizza-cards">
              {filteredPizzaData.length === 0 ? (
                <h3 className="empty">
                  Bunaqa pitsa yoq !!! <br /> 😉
                </h3>
              ) : (
                filteredPizzaData.map((pizza) => (
                  <div
                    className="pizza-card"
                    key={pizza.id}
                    onClick={() => openModal(pizza)}
                  >
                    <img src={pizza.img} alt={pizza.name} />
                    <h3>{pizza.name}</h3>
                    <p>{pizza.description}</p>
                    <button>Narxi: {pizza.price} UZS</button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      {selectedPizza && (
        <Modal
          pizza={selectedPizza}
          closeModal={closeModal}
          addToCart={addToCart}
        />
      )}
    </Fragment>
  );
};

export default HomePage;
