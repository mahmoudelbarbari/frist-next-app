export function generateMetadata({ params }) {
  return {
    title: `User ${params.id}`,
  };
}

export default async function UserPage({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Failed to fetch user</div>;
  }

  const user = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
        <div className=" mx-5 bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300">
          <p>
            <strong>ID:</strong> {user._id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
}
