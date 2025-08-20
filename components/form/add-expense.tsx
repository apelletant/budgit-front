
"use client"

import { container } from "@/container/dependencies"
import { useExpenses } from "@/hooks/use-expense"
import { useI18n } from "../i18n-provider"
import { Component, useState } from "react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Card } from "../ui/card"
import { Frequency } from "./inner/frequency"
import { Weekly } from "./inner/weekly"
import { RecurrenceType } from "@/utils/frequency"
import { Monthly } from "./inner/monthly"
import { Yearly } from "./inner/yearly"
import { Label } from "recharts"

export function AddExpense() {
  const { t } = useI18n()
  const { error, isAdding, addExpense } = useExpenses(container.expenseService)

  const [frequency, setFrequency] = useState(RecurrenceType.Weekly);
  const handleFrequencyChange = (value: RecurrenceType) => {
    setFrequency(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const data = {
      serviceName: formData.get('serviceName'),
      date: formData.get('date'),
      price: formData.get('price'),
      frequency: formData.get('frequency')
    }

    console.log(data)

    //addExpense(req)
  }

  if (isAdding) {
    return (
      <div>
        Loading
      </div>
    )
  }


  if (error) {
    // TODO use tast
  }


  const FreComponent = () => {
    const components = {
      [RecurrenceType.Weekly]: Weekly,
      [RecurrenceType.Monthly]: Monthly,
      [RecurrenceType.Yearly]: Yearly,
    };
    return components[frequency] || null;
  };
  const RecurrenceComponent = FreComponent();

  return (
    <Card className="w-1/3 p-8">
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            required
            type="text"
            name="serviceName"
            placeholder="Service name"
            className="w-full p-2 border rounded"
          />
          <Frequency
            selectedFrequency={frequency}
            onFrequencyChangeAction={handleFrequencyChange}
          />
          <Input
            required
            type="number"
            name="price"
            placeholder="Price"
            step="0.01"
            className="w-full p-2 border rounded"
          />
          <h2>Recurrence Settings</h2>
          {RecurrenceComponent ? <RecurrenceComponent /> : <p>Please select a recurrence type</p>}
          <Button type="submit">Submit Form</Button>
        </form>
      </div>
    </Card>
  )
}
