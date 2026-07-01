import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";

const BackToDashboard = () => (
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
  >
    <ArrowLeft size={16} />
    Back to dashboard
  </Link>
);

const DetailItem = ({ label, value }) => (
  <div className="space-y-1 font-medium">
    <dt className="text-xs uppercase tracking-wide text-neutral-400">{label}</dt>
    <dd className="text-sm text-neutral-900">{value || "N/A"}</dd>
  </div>
);

const UserDetailsPage = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const user = users?.find((item) => String(item.id) === id);

  if (!user) {
    return (
      <div className="min-h-svh  px-6 py-8 text-neutral-900 bg-slate-50">
        <div className="mx-auto max-w-3xl">
          <BackToDashboard />
          <div className="text-center mt-10">
            <h1 className="text-2xl font-semibold">User not found</h1>
          </div>
        </div>
      </div>
    );
  }

  const address = user.address;
  const geo = address?.geo;
  const fullAddress = [
    address?.suite,
    address?.street,
    address?.city,
    address?.zipcode,
  ].filter(Boolean).join(", ");

  return (
    <div className="min-h-svh bg-slate-50 px-6 py-8 text-neutral-900">
      <main className=" mx-auto max-w-4xl">
        <BackToDashboard />

        <header className="mt-8 border-b border-neutral-200 pb-6">
          <h1 className="mt-1 text-3xl font-bold tracking-tight">{user.name}</h1>
          <p className="mt-2 text-sm text-neutral-500">{user.company?.name}</p>
        </header>

        <section className="grid gap-8 py-8 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold text-neutral-900">Contact</h2>
            <dl className="mt-4 grid gap-5 rounded-xl border bg-white border-neutral-200 p-5">
              <DetailItem label="Email" value={user.email?.toLowerCase()} />
              <DetailItem label="Phone" value={user.phone} />
              <DetailItem label="Website" value={user.website} />
              <DetailItem label="Company" value={user.company?.name} />
            </dl>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-semibold text-neutral-900">Address</h2>
            <dl className="grid gap-5 bg-white rounded-xl border border-neutral-200 p-5">
              <DetailItem label="Full address" value={fullAddress} />
              <DetailItem label="Street" value={address?.street} />
              <DetailItem label="Suite" value={address?.suite} />
              <DetailItem label="City" value={address?.city} />
              <DetailItem label="Zipcode" value={address?.zipcode} />
              <DetailItem label="Latitude" value={geo?.lat} />
              <DetailItem label="Longitude" value={geo?.lng} />
            </dl>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDetailsPage;
