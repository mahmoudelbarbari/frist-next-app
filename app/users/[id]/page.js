export function generateMetadata({ params }) {
  return {
    title: `User ${params.id}`,
  };
}

export default async function page({ params }) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return (
    <div className="text-center">
      <h2>{data.name}</h2>
    </div>
  );
}
