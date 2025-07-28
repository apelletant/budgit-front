"use client"

export function ColorPaletteDemo() {
  const colorGroups = [
    {
      name: "Primary",
      colors: [
        { name: "primary-50", class: "bg-primary-50" },
        { name: "primary-100", class: "bg-primary-100" },
        { name: "primary-200", class: "bg-primary-200" },
        { name: "primary-300", class: "bg-primary-300" },
        { name: "primary-400", class: "bg-primary-400" },
        { name: "primary-500", class: "bg-primary-500" },
        { name: "primary-600", class: "bg-primary-600" },
        { name: "primary-700", class: "bg-primary-700" },
        { name: "primary-800", class: "bg-primary-800" },
        { name: "primary-900", class: "bg-primary-900" },
      ],
    },
    {
      name: "Secondary",
      colors: [
        { name: "secondary-300", class: "bg-secondary-300" },
        { name: "secondary-400", class: "bg-secondary-400" },
        { name: "secondary-500", class: "bg-secondary-500" },
        { name: "secondary-600", class: "bg-secondary-600" },
        { name: "secondary-700", class: "bg-secondary-700" },
      ],
    },
    {
      name: "Accent",
      colors: [
        { name: "accent-300", class: "bg-accent-300" },
        { name: "accent-400", class: "bg-accent-400" },
        { name: "accent-500", class: "bg-accent-500" },
        { name: "accent-600", class: "bg-accent-600" },
        { name: "accent-700", class: "bg-accent-700" },
      ],
    },
    {
      name: "Status Colors",
      colors: [
        { name: "success-500", class: "bg-success-500" },
        { name: "warning-500", class: "bg-warning-500" },
        { name: "error-500", class: "bg-error-500" },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gradient-primary mb-2">Color Palette</h2>
      </div>

      {colorGroups.map((group) => (
        <div key={group.name} className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-800">{group.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {group.colors.map((color) => (
              <div key={color.name} className="text-center">
                <div className={`${color.class} w-full h-16 rounded-lg shadow-soft mb-2 border border-neutral-200`} />
                <p className="text-xs text-neutral-600 font-mono">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-800">Custom Components</h3>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
          <button className="btn-accent">Accent Button</button>
          <button className="btn-outline">Outline Button</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h4 className="text-lg font-semibold mb-2">Regular Card</h4>
          <p className="text-neutral-600">This is a card using our custom SCSS mixins.</p>
        </div>
        <div className="card-hover">
          <h4 className="text-lg font-semibold mb-2">Hover Card</h4>
          <p className="text-neutral-600">This card has hover effects built-in.</p>
        </div>
      </div>
    </div>
  )
}
