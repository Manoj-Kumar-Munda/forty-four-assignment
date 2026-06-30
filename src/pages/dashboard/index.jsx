import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { setUsers } from "../../store/slice/users";
import { USERS_API_URL } from "../../constants/endpoints";
import UserCard from "./_components/user-card";


const DashboardPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(USERS_API_URL);
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  return (
    <div className="min-h-screen py-8 px-6 mx-auto bg-white text-neutral-900">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Dashboard</h1>
        <p className="mt-1.5 text-sm text-neutral-500">Welcome to your dashboard</p>
      </header>

      {loading && <p className="text-sm text-neutral-400">Loading...</p>}

      {error && (
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <h2 className="text-base font-semibold text-neutral-900">Something went wrong</h2>
          <p className="text-sm text-neutral-500">{error.message}</p>
        </div>
      )}

      {users && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-5">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
