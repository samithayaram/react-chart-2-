export default function Experience() {
  return (
    <div className="bg-[#111] rounded-lg p-5 py-6 border border-gray-800 flex flex-col gap-4 text-white text-sm min-h-[200px]">
      <h3 className="font-semibold">Experience</h3>
      <h1 className="text-3xl font-bold">03</h1>

      {["Company 1", "Company 2", "Company 3"].map((company, i) => (
        <div key={i} className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded" />
            <span>{company}</span>
          </div>
          <button className="text-xs text-gray-400 hover:underline">
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
}
