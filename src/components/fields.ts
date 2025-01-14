export const fields = [
  {
    id: 1,
    name: 'Insurance type',
    stateName: 'insurance_type',
    fieldType: 'select',
    required: 1,
    options: [
      { id: 1, name: 'short term insurance' },
      { id: 2, name: 'annual insurance' },
    ],
  },

  {
    id: 2,
    name: 'Period start',
    stateName: 'period_start',
    fieldType: 'date',
    required: 1,
  },

  {
    id: 3,
    name: 'Period end',
    stateName: 'period_end',
    fieldType: 'date',
    required: 1,
  },
  {
    id: 4,
    name: 'Insurance package',
    stateName: 'insurance_package',
    fieldType: 'select',
    required: 1,
    options: [
      { id: 1, name: 'basic', day_rate: 1.2, annual_rate: 39 },
      { id: 2, name: 'extended', day_rate: 1.8, annual_rate: 49 },
      { id: 3, name: 'extra', day_rate: 2.4, annual_rate: 59 },
    ],
  },
  {
    id: 5,
    name: 'Additional charges',
    stateName: 'additional_charges',
    fieldType: 'select',
    required: 0,
    options: [
      { id: 0, name: 'no charges', day_rate: 1, annual_rate: 1 },
      { id: 1, name: 'cancellation', day_rate: 1.5, annual_rate: 1.2 },
      { id: 2, name: 'sport activities', day_rate: 1.3, annual_rate: 1.1 },
    ],
  },
  {
    id: 6,
    name: 'Persons',
    stateName: 'persons',
    fieldType: 'select',
    required: 1,
    options: [
      { id: 1, name: '1 Person' },
      { id: 2, name: '2 Persons' },
      { id: 3, name: '3 Persons' },
    ],
  },
]
