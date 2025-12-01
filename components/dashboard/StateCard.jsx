export default function StateCard({ title, value }) {
  return (
    <div className="p-6 bg-white/60 rounded-xl shadow-sm border">
      <p className="font-bold text-gray-900">{title}</p>
      <p className="text-3xl text-black font-bold mt-2">{value}</p>
    </div>
  );
}
