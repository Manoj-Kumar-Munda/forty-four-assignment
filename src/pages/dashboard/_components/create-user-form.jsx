import { useDispatch } from "react-redux";
import { addUser } from "../../../store/slice/users";
import { cn } from "../../../lib/utils";
import { useState } from "react";


const CreateUserForm = () => {
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const newUser = {
            id: Date.now(),
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            company: { name: formData.get("company") },
            username: formData.get("name").replace(" ", "").toLowerCase()
        };

        setTimeout(() => {
            dispatch(addUser(newUser));
            setIsSubmitting(false);
            e.target.reset();
        }, 1500);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-gray-500">Name</label>
                    <input type="text" id="name" name="name" className="border border-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-gray-500">Email</label>
                    <input type="email" id="email" name="email" className="border border-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm text-gray-500">Phone</label>
                    <input type="text" id="phone" name="phone" className="border border-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm text-gray-500">Company</label>
                    <input type="text" id="company" name="company" className="border border-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    "w-full text-white px-4 py-2 rounded-lg cursor-pointer transition-colors mt-6",
                    isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                )}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
};
export default CreateUserForm;