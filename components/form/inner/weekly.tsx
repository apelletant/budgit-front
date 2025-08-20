"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DayOfWeek, DayToString } from "@/utils/frequency";

export function Weekly() {
  const getWeekDays = (): DayOfWeek[] => {
    return Object.values(DayOfWeek).filter((v) => typeof v === "number") as DayOfWeek[];
  };

 return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Weekly Recurrence</h3>
      <div className="space-y-2">
        <RadioGroup>
        {
          getWeekDays().map((value) => (
            <div className="flex items-center space-x-2" key={value}>
              <RadioGroupItem
                value={value.toString()}
                id={`freq-${value}`}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
              />
              <label htmlFor={`freq-${value}`} className="text-sm font-medium text-gray-700">
                {DayToString(value as DayOfWeek)}
              </label>
            </div>
          ))
        }
        </RadioGroup>
      </div>
    </div>
  )
}
