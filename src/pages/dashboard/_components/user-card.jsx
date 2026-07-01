import { Link } from "react-router";
import { Mail, Phone, Building2 } from "lucide-react";

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
            className="group border bg-white border-neutral-200 rounded-xl p-5 text-inherit cursor-pointer transition-all duration-200 hover:border-neutral-300 hover:shadow-md hover:-translate-y-0.5"
        >
            <div className="flex items-center gap-3.5 mb-4">
                <div className="size-10 rounded-full flex items-center justify-center text-sm font-semibold text-neutral-800 bg-slate-300">
                    {initials}
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-xs text-gray-400 mt-px">@{user.username.toLowerCase()}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-sm text-gray-500">
                    <Mail size={12} className="shrink-0 text-gray-400" />
                    {user.email.toLowerCase()}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500">
                    <Phone size={12} className="shrink-0 text-gray-400" />
                    {user.phone.split(" ")[0]}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500">
                    <Building2 size={12} className="shrink-0 text-gray-400" />
                    {user.company.name}
                </span>
            </div>
        </Link>
    );
}
export default UserCard