import formatDistance from "date-fns/formatDistance";
import Image from "next/image";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/ProductSlice/ProductSlice";

type Props = {
  item: any;
};

const Card = ({ item }: Props) => {
  var timeDistance = formatDistance(new Date(), new Date(item?.createdAt), {
    includeSeconds: true,
  });
  const dispatch = useAppDispatch();

  /* handle add to cart */
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="">
      <div className="mx-2  lg:mb-0 mb-8">
        <div>
          <Image
            src={item?.image?.url || "/Bitmap.png"}
            className="w-full  border-b h-52"
            width={300}
            height={200}
            alt={item?.name || "iphone XS"}
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bookmark"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-yellow-500">Featured</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">{item?.name}</h2>
              <p className="text-xs text-gray-600 pl-5">{timeDistance}</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {item?.description?.slice(0, 100)}
            </p>
            <div className="flex mt-4">
              <div>
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2 className="text-indigo-700 text-xs font-semibold">Price</h2>
              <h3 className="text-indigo-700 text-xl font-semibold">
                ${item?.price}
              </h3>
            </div>
            <div className="my-2">
              <button
                className="bg-indigo-700 text-white w-full py-2 rounded-md"
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
