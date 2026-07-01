import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { setUsers } from "../../store/slice/users";
import { USERS_API_URL } from "../../constants/endpoints";
import UserCard from "./_components/user-card";
import { cn } from "../../lib/utils";
import Button from "../../components/button";
import CreateUserForm from "./_components/create-user-form";


const DashboardPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(USERS_API_URL);
  const users = useSelector((state) => state.users.data);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  return (
    <div className="min-h-svh py-8 px-6 mx-auto max-w-7xl bg-slate-50 text-neutral-900">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Dashboard</h1>
        <p className="mt-1.5 text-sm text-neutral-500">Welcome to your dashboard</p>
      </header>

      {loading && !users && <p className="text-sm text-neutral-400">Loading...</p>}

      {error && (
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <h2 className="text-base font-semibold text-neutral-900">Something went wrong</h2>
          <p className="text-sm text-neutral-500">{error.message}</p>
        </div>
      )}

      {users && (
        <>
          <div className="space-y-4">
            <div className="flex justify-end">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowAddUserForm(true)}
              >
                Add user
              </Button>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-5">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        </>
      )}

      <div
        className={cn("fixed inset-0 z-50 transition-all duration-300 ease-in-out", showAddUserForm ? "visible opacity-100" : "invisible opacity-0")}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setShowAddUserForm(false)}
        />

        <div
          className={cn("absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out", showAddUserForm ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900">Add User</h2>
            <Button
              onClick={() => setShowAddUserForm(false)}
              className="text-neutral-400 hover:text-neutral-700 text-2xl leading-none"
            >
              &times;
            </Button>
          </div>

          <div className="px-6 py-6">
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
