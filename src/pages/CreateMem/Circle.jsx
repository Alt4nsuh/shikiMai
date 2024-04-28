import { Link } from 'react-router-dom';

const Circle = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 flex justify-between items-center border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Manage Circle</h3>
        <button className="text-blue-500 hover:text-blue-700">CHANGE</button>
      </div>
      <div className="px-4 py-5">
        <p className="text-gray-700">Circle's Unique Code</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-gray-900">JUNXKB</span>
          <button className="text-blue-500 hover:text-blue-700">CHANGE</button>
        </div>
      </div>
      <div className="px-4 py-5 border-b border-gray-200">
        <p className="text-gray-700">Circle name</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-medium text-gray-900">Davaasambuu B.'s circle</span>
          <button className="text-blue-500 hover:text-blue-700">EDIT</button>
        </div>
      </div>
      <div className="px-4 py-5">
        <p className="text-gray-700">Circle Admin</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-medium text-gray-900">Davaasambuu B.</span>
          <button className="text-blue-500 hover:text-blue-700">EDIT</button>
        </div>
      </div>
      <div className="px-4 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-gray-700">Location Sharing</p>
          <div className="flex items-center">
            <toggle className="h-5 w-5 rounded-full bg-gray-200"></toggle>
            <span className="ml-2 text-gray-700 text-sm">Sharing location with this circle</span>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 flex justify-between">
        <button className="text-red-500 hover:text-red-700">Remove Members from circle</button>
        <div className="flex items-center space-x-2">
          <button className="text-red-500 hover:text-red-700">Leave Circle</button>
          <button className="text-red-500 hover:text-red-700">Delete circle</button>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <Link to="/Menu">
          <button className="px-4 py-2 text-sm font-medium text-center text-gray-500 hover:text-gray-700">
            DONE? (Tap to go back)
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Circle;
