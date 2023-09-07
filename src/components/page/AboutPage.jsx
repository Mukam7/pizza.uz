import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AboutPage = () => {
  const { id } = useParams();
  const [pizzaData, setPizzaData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://64b59a37f3dbab5a95c7870b.mockapi.io/pizza/${id}`)
      .then((response) => {
        setPizzaData(response.data);
      })
      .catch((error) => {
        console.error("Malumotlarni olishda xato:", error);
      });
  }, [id]);

  if (!pizzaData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="about-pizza-box">
      <h1>About Pizza {pizzaData.name}</h1>
      <div className="container">
        <div className="about-pizza-cards">
          <div>
            <img src={pizzaData.img} alt={pizzaData.name} />
          </div>
          <div>
            <h1>{pizzaData.name}</h1>
            <p>{pizzaData.description}</p>
            <h3>Narxi: {pizzaData.price} UZS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
