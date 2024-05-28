import "./cart-item.styles.css";

const CartItem = (props) => {
  return (
    <div className="cart-item-container">
      <img src={props.cartItem.image} alt={`${props.cartItem.title}`} />
      <div className="item-details">
        <span className="name">{props.cartItem.title}</span>
        <br />
        <span className="price">
          {props.cartItem.quantity} x ${props.cartItem.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
