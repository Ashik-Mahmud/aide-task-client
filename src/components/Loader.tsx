type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="text-center py-8">
      <div className="animate-spin w-20 h-20 rounded-full border-8 border-t-8 border-t-indigo-600"></div>
    </div>
  );
};

export default Loader;
