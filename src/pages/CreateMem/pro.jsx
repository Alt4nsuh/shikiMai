import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <h1 className="text-xl font-medium text-gray-800">Profile</h1>
        <button className="text-blue-500 hover:text-blue-700">Change Photo</button>
      </div>
      <div className="flex flex-col items-center px-4 py-4 space-y-2">
        <img
          className="h-16 w-16 rounded-full mx-auto object-cover"
          src="https://picsum.photos/200"
          alt="Profile"
        />
        <div className="text-center">
          <p className="text-lg font-medium text-gray-800">Davaasambuu B.</p>
          <button className="text-sm text-blue-500 hover:text-blue-700">EDIT</button>
        </div>
      </div>
      <div className="px-4 py-4 border-b border-gray-200">
        <p className="text-gray-700 font-medium">Email</p>
        <p className="text-gray-500 pt-2">bdavaasambuu011@gmail.com</p>
      </div>
      <div className="px-4 py-4 border-b border-gray-200">
        <p className="text-gray-700 font-medium">Contact Number</p>
        <p className="text-gray-500 pt-2">NA</p>
        <button className="text-sm text-blue-500 hover:text-blue-700 pt-2">EDIT</button>
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

export default Profile;
