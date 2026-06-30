import { Link } from "react-router";

function getInitials(name) {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
const UserCard = ({ user }) => {
    const initials = getInitials(user.name);
    return (
        <Link
            to={`/user/${user.id}`}
            className="group border border-neutral-200 rounded-xl p-5 text-inherit cursor-pointer transition-all duration-200 hover:border-neutral-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
            <div className="flex items-center gap-3.5 mb-4">
                <div className="size-10 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-neutral-800">
                    {initials}
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-xs text-gray-400 mt-px">@{user.username.toLowerCase()}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500">{user.email.toLowerCase()}</span>
                <span className="text-sm text-gray-500">{user.phone.split(" ")[0]}</span>
                <span className="text-sm text-gray-500">{user.company.name}</span>
            </div>
        </Link>
    );
}
export default UserCard