import { Link } from 'react-router-dom';

const CreateMem = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h1 className="text-xl font-medium text-gray-800">Davaasambuu B's circle</h1>
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 15a5 5 0 0 0 5-5H5a5 5 0 0 0 5 5zm0-6a1 1 0 1 0-2 0v1h2zm-5 3a1 1 0 0 1-1-1H3a1 1 0 0 1 1-1h2v2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-500">41%</span>
          </div>
        </div>
        <div className="px-4 py-4 text-gray-700">
          <p>Family360 is better with friends and family, invite them to your Circle.</p>
          <p>Just send them this code written below, and ask them to enter it when they install the app and choose to join a Circle</p>
        </div>
        <div className="px-4 py-2 text-center font-medium text-xl text-blue-500 border-t border-gray-200">
          <span>Share this code to invite people in your circle</span>
        </div>
        <div className="text-center px-4 py-4">
          <span className="text-3xl font-bold text-blue-500">JUNXKB</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center py-4 space-y-2 md:space-y-0 md:space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700">
            Show QR Code
          </button>
          <button className="px-4 py-2 text-sm font-medium text-center text-gray-500 hover:text-gray-700">
            Share invite link
          </button>
        </div>
        <div className="flex items-center justify-center py-4">
          <Link to="/Menu">
            <button className="px-4 py-2 text-sm font-medium text-center text-gray-500 hover:text-gray-700">
              DONE? (Tap to go back)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateMem;
