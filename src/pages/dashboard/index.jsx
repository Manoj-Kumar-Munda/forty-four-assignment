import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { setUsers } from "../../store/slice/users";
import { USERS_API_URL } from "../../constants/endpoints";
import UserCard from "./_components/user-card";
import { cn } from "../../lib/utils";
import Button from "../../components/button";
import CreateUserForm from "./_components/create-user-form";
import Input from "../../components/Input";
import { Search } from "lucide-react";


const DashboardPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(USERS_API_URL);
  const users = useSelector((state) => state.users.data);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  return (
    <div className="bg-slate-50">

      <div className="min-h-svh py-8 px-6 mx-auto max-w-7xl text-neutral-900">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-heading">Dashboard</h1>
          <p className="mt-1.5 text-sm text-subheading">Welcome to your dashboard</p>
        </header>

        {loading && !users && <p className="text-sm text-muted">Loading...</p>}

        {error && (
          <div className="flex flex-col items-center justify-center text-center gap-3">
            <h2 className="text-base font-semibold text-heading">Something went wrong</h2>
            <p className="text-sm text-muted">{error.message}</p>
          </div>
        )}

        {users && (
          <>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
                <Button
                  className="bg-neutral-800 order-1 sm:order-2 self-end sm:self-auto shrink-0 hover:bg-neutral-700"
                  onClick={() => setShowAddUserForm(true)}
                >
                  Add user
                </Button>
                <div className="order-2 sm:order-1">
                  <Input
                    className={"placeholder:text-sm w-full sm:w-64"}
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    icon={<Search size={14} />}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))
                ) : (
                  <p className="text-sm text-muted">No users match your search.</p>
                )}
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
              <h2 className="text-lg font-semibold text-heading">Add User</h2>
              <Button
                onClick={() => setShowAddUserForm(false)}
                className="text-muted hover:text-heading text-2xl leading-none"
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
    </div>
  );
};

export default DashboardPage;
