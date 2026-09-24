import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold">Profile</h1>

      <div className="mt-8 rounded-xl bg-white p-8 shadow">
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">Name</p>

            <p className="font-medium">{user.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>

            <p className="font-medium">{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>

            <p className="font-medium capitalize text-blue-600">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
