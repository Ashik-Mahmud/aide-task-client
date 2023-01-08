import Head from "next/head";
import { useAppSelector } from "../../app/hooks";
import CartCard from "../../src/components/CartCard";

type Props = {};

const Carts = (props: Props) => {
  const { carts, count } = useAppSelector((state) => state.product);

  console.log(carts, count);

  return (
    <div>
      <Head>
        <title>Carts</title>
      </Head>
      <div className="container mx-auto my-5">
        <div className="title my-3 font-bold font-poppins">
          <h1 className="text-2xl">Carts</h1>
          <div className="divider w-32 h-1 bg-indigo-600 my-1"></div>
        </div>

        {/* carts area */}

        <div className="carts-area">
          <div className="carts ">
            <div className="carts-header flex items-start justify-between">
              <div className="carts-header-left mb-4">
                <div className="carts-header-left-title">
                  <h1>Shopping Cart</h1>
                </div>
                <div className="carts-header-left-subtitle">
                  <p>{carts?.length} items</p>
                </div>
              </div>
            </div>
            <div className="carts-body grid grid-cols-6 items-start gap-5">
              {carts?.length > 0 ? (
                <>
                  <div className="carts-body-left flex flex-col gap-3 col-span-4">
                    {carts?.map((cart: any) => (
                      <CartCard key={cart?._id} cart={cart} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-3 text-center">NO CARTS FOUND.</div>
              )}

              {/* total dashboard */}
              <div className="carts-total-dashboard  col-span-2 p-5 bg-gray-50">
                <div className="carts-total-dashboard-header flex justify-between items-center p-4 shadow rounded bg-white">
                  <div className="carts-total-dashboard-header-left">
                    <h1 className="text-xl">Subtotal</h1>
                  </div>
                  <div className="carts-total-dashboard-header-right">
                    <p className="text-xl">₹ 3,89,700</p>
                  </div>
                </div>

                <div className="carts-total-dashboard-body flex justify-between items-center p-4 shadow border-t rounded bg-white">
                  <div className="carts-total-dashboard-body-left">
                    <h1 className="text-xl">Tax %</h1>
                  </div>
                  <div className="carts-total-dashboard-body-right">
                    <p className="text-xl">₹ 100</p>
                  </div>
                </div>
                <div className="carts-total-dashboard-body flex justify-between items-center p-4 shadow rounded bg-white border-t">
                  <div className="carts-total-dashboard-body-left">
                    <h1 className="text-xl">Total</h1>
                  </div>
                  <div className="carts-total-dashboard-body-right">
                    <p className="text-xl">₹ 3,89,700</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
