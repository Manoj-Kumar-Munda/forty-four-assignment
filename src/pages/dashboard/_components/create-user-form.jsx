import { useDispatch } from "react-redux";
import { addUser } from "../../../store/slice/users";
import { cn } from "../../../lib/utils";
import { useState } from "react";
import Button from "../../../components/button";
import Input from "../../../components/Input";


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
                <Input label="Name" id="name" name="name" type="text" />
                <Input label="Email" id="email" name="email" type="email" />
                <Input label="Phone" id="phone" name="phone" type="text" />
                <Input label="Company" id="company" name="company" type="text" />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    "w-full py-2 mt-6",
                    isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                )}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </form>
    );
};
export default CreateUserForm;