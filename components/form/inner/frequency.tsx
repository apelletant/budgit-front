"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { RecurrenceType } from "@/utils/frequency";
import { RecurrencetoString } from "@/utils/frequency";

export function Frequency({
  selectedFrequency,
  onFrequencyChangeAction,
}: {
  selectedFrequency: RecurrenceType;
  onFrequencyChangeAction: (value: RecurrenceType) => void;
}) {
    const getRecurrenceTypeValues = (): RecurrenceType[] => {
      return Object.values(RecurrenceType).filter((v) => typeof v === "number") as RecurrenceType[];
    };

  return (
    <div className="space-y-2 p-4 bg-gray-50 rounded-lg shadow-sm">
      <Label className="text-sm font-medium leading-none text-gray-700">
        Frequency:
      </Label>
      <RadioGroup
        name="frequency"
        defaultValue={RecurrenceType.Weekly.toString()}
        className="space-y-2"
        value={selectedFrequency.toString()}
        onValueChange={(value) => onFrequencyChangeAction(Number(value) as RecurrenceType)}
      >
          {
              getRecurrenceTypeValues().map((value) => (
                <div className="flex items-center space-x-2" key={value}>
                  <RadioGroupItem
                    value={value.toString()}
                    id={`freq-${value}`}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                  />
                  <label htmlFor={`freq-${value}`} className="text-sm font-medium text-gray-700">
                    {RecurrencetoString(value as RecurrenceType)}
                  </label>
                </div>
              ))
          }
      </RadioGroup>
    </div>
  )
}
