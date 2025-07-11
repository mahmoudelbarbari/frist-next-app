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
    <div className="m-auto">
      <h1>User Details</h1>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
