"use client";

export function Yearly() { 
  return (
    <div className="p-4 bg-purple-50 border border-purple-200 rounded">
      <h3 className="text-lg font-semibold text-purple-800 mb-2">Yearly Recurrence</h3>
      <div className="space-y-2">
        <select className="w-full p-2 border rounded">
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
        </select>
        <input
          type="number"
          placeholder="Day of month"
          min="1"
          max="31"
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  )
}