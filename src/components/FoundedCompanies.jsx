export default function FoundedCompanies() {
  return (
    <div className="bg-[#111] rounded-lg p-5 py-6 border border-gray-800 flex flex-col gap-4 text-white text-sm min-h-[200px]">
      <h3 className="font-semibold">Founded Companies</h3>
      <h1 className="text-3xl font-bold">02</h1>

      <div className="flex justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-white rounded" />
            <span className="font-medium">Vertx</span>
            <span className="bg-green-600 text-[11px] px-1.5 py-0.5 rounded">CEO</span>
          </div>
          <p className="text-sm text-gray-400">
            Founded in 2025 in <span className="font-semibold">Fintech</span>.
          </p>
        </div>
        <button className="text-xs text-gray-400 hover:underline self-start">
          View Profile
        </button>
      </div>

      <div className="flex justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-white rounded" />
            <span className="font-medium">Company</span>
            <span className="bg-blue-600 text-[11px] px-1.5 py-0.5 rounded">PROPRIETOR</span>
          </div>
          <p className="text-sm text-gray-400 leading-tight">
            Details/information<br />like acquired / exit / m&a
          </p>
        </div>
        <button className="text-xs text-gray-400 hover:underline self-start">
          View Profile
        </button>
      </div>
    </div>
  );
}
