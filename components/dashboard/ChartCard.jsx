export default function ChartCard({ title, children }) {
  return (
    <div className="p-6 bg-blue-300 rounded-xl shadow-sm  border">
      <h2 className="text-lg font-bold mb-4 text-black">{title}</h2>
      {children}
    </div>
  );
}
