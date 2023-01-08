import { BiX } from "react-icons/bi";

type Props = {};

const CartCard = (props: Props) => {
  return (
    <div className="carts-body-left-item flex gap-4 shadow p-4 rounded justify-between items-center bg-gray-50">
      <div className="flex items-start gap-5 ">
        <div className="carts-body-left-item-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="carts-body-left-item-info">
          <div className="carts-body-left-item-info-title">
            <h1 className="text-xl">
              Apple iPhone 12 Pro Max (128GB) - Pacific Blue
            </h1>
          </div>
          <div className="carts-body-left-item-info-subtitle">
            <p>Delivery in 3 - 5 days | Free</p>
          </div>

          <div className="quantity">
            <div className="quantity-action ">
              <div className="carts-body-left-item-info-price">
                <p>₹ 1,29,900</p>
              </div>
              <div className="carts-body-left-item-info-stock-in flex items-center gap-3 bg-green-50 text-green-500 p-1 w-40 rounded text-center my-`">
                Stock in -<p> 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carts-body-left-item-action flex items-center gap-5">
        <div className="flex items-center my-1 bg-white p-2">
          <button className="w-10 h-10 bg-gray-50 text-xl">-</button>
          <span className="w-10 h-10 bg-gray-50 text-lg grid place-items-center">
            1
          </span>
          <button className="w-10 h-10 bg-gray-50 text-xl">+</button>
        </div>
        <div className="carts-body-left-item-action-delete">
          <button className="text-red-500  p-2 text-2xl">
            <BiX />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
