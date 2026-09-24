const Settings = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

        <p className="mt-1 text-gray-500">Manage your account settings.</p>
      </div>

      <div className="max-w-3xl rounded-xl bg-white p-6 shadow-sm">
        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="Prakash Tamang"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              defaultValue="prakash@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Role
            </label>

            <select
              defaultValue="admin"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="h-4 w-4" />

            <label className="text-sm text-gray-700">
              Receive email notifications
            </label>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
