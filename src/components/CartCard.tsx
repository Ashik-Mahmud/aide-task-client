import Image from "next/image";
import { BiX } from "react-icons/bi";
import { useAppDispatch } from "../../app/hooks";
import { removeToCart } from "../../features/ProductSlice/ProductSlice";

type Props = {
  cart: any;
};

const CartCard = ({ cart }: Props) => {
  const dispatch = useAppDispatch();

  // remove to cart
  const handleRemoveToCart = () => {
    dispatch(removeToCart(cart?._id));
  };

  return (
    <div className="carts-body-left-item flex flex-col sm:flex-row gap-4 shadow p-4 rounded justify-between sm:items-center bg-gray-50 relative">
      <div className="flex items-start gap-5 flex-col sm:flex-row">
        <div className="carts-body-left-item-image">
          <Image
            src={
              cart?.image?.url ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU"
            }
            alt={cart?.name}
            width={100}
            height={100}
          />
        </div>
        <div className="carts-body-left-item-info">
          <div className="carts-body-left-item-info-title">
            <h1 className="text-xl">{cart?.name}</h1>
          </div>
          <div className="carts-body-left-item-info-subtitle">
            <p>Delivery in 3 - 5 days | Free</p>
          </div>

          <div className="quantity">
            <div className="quantity-action ">
              <div className="carts-body-left-item-info-price ">
                <p>₹ {cart?.price}</p>
                <p>In total - ₹{cart?.price * cart?.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carts-body-left-item-action flex items-center gap-2 sm:gap-5 flex-row sm:flex-row">
        <div className="carts-body-left-item-info-stock-in flex items-center gap-3 bg-green-50 text-green-500 p-1 w-40 rounded text-center my-`">
          Stock in -<p> {cart?.countInStock}</p>
        </div>
        <div className="flex items-center my-1 bg-white p-2">
          <button className="w-10 h-10 bg-gray-50 text-xl">-</button>
          <span className="w-10 h-10 bg-gray-50 text-lg grid place-items-center">
            {cart?.quantity}
          </span>
          <button className="w-10 h-10 bg-gray-50 text-xl">+</button>
        </div>
        <div className="carts-body-left-item-action-delete">
          <button
            className="text-red-500  p-2 text-2xl absolute right-5 top-2 sm:relative sm:right-0 sm:top-0"
            onClick={handleRemoveToCart}
          >
            <BiX />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
