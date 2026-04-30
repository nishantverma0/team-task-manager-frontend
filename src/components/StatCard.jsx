export default function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl shadow transition">
      <h3 className="text-sm opacity-70">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
