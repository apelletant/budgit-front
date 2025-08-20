"use client"

import { Input } from "@/components/ui/input"

export function Monthly() {
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded">
      <h3 className="text-lg font-semibold text-green-800 mb-2">Monthly Recurrence</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          Day of month:
          <Input type="number" min="1" max="30" name="day-of-month" className="mr-2" />
        </label>
      </div>
    </div>
  )
}
