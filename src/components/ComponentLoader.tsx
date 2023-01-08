type Props = {};

const ComponentLoader = (props: Props) => {
  return (
    <div>
      {/* component loader */}
      <div>
        <div className="flex justify-center items-center h-screen fixed left-0 top-0 z-20 w-screen bg-[#ffffffb2] backdrop-blur-sm">
          <div className="animate-spin loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-4 border-t-indigo-600"></div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLoader;
