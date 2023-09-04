const Modal = ({ pizza, closeModal, addToCart }) => {
  if (!pizza) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1 className="close" onClick={closeModal}>
          &times;
        </h1>
        <img src={pizza.img} alt={pizza.name} />
        <h2>{pizza.name}</h2> <br />
        <div className="basket-add">
          <button className="price-modal">Narxi: {pizza.price} UZS</button>
          <button
            className="basket-add-modal"
            onClick={() => {
              addToCart(pizza);
              closeModal();
            }}
          >
            Savatga qoshish <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
