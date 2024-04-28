import { Link } from 'react-router-dom';

const Circle = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 flex justify-between items-center border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Өрөө</h3>
        <button className="text-white-500 hover:text-white-700">Солих</button>
      </div>
      <div className="px-4 py-5">
        <p className="text-gray-700">Өрөөний код</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-gray-900">JUNXKB</span>
          <button className="text-white-500 hover:text-blue-700">Солих</button>
        </div>
      </div>
      <div className="px-4 py-5 border-b border-gray-200">
        <p className="text-white-700">Өрөөний нэр</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-medium text-gray-900">Davaasambuu B.'-гийн өрөө</span>
          <button className="text-white-500 hover:text-blue-700">Засах</button>
        </div>
      </div>
      <div className="px-4 py-5">
        <p className="text-gray-700">Өрөөний Админ</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-medium text-white-900">Davaasambuu B.</span>
          <button className="text-white-500 hover:text-blue-700">Засах</button>
        </div>
      </div>
      <div className="px-4 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-gray-700">Байршил хуаалцах</p>
          <div className="flex items-center">
            <toggle className="h-5 w-5 rounded-full bg-gray-200"></toggle>
            <span className="ml-2 text-gray-700 text-sm">Sharing location with this circle</span>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 flex justify-between">
        <button className="text-red-500 hover:text-red-700">Өрөөнөөс хүн гаргах</button>
        <div className="flex items-center space-x-2">
          <button className="text-red-500 hover:text-red-700">Өрөөнөөс гарах</button>
          <button className="text-red-500 hover:text-red-700">Өрөө устгах</button>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <Link to="/Menu">
          <button className="px-4 py-2 text-sm font-medium text-center text-white-300 hover:text-gray-700">
            Болсон? 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Circle;
