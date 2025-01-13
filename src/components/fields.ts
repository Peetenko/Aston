export const insurance_type = {
  name: 'Insurance type',
  fieldType: 'select',
  required: 1,
  options: [
    { id: 1, name: 'short term insurance' },
    { id: 2, name: 'annual insurance' },
  ],
}

export const period_start = {
  name: 'Period start',
  fieldType: 'date',
  required: 1,
}

export const period_end = {
  name: 'Period end',
  fieldType: 'date',
  required: 1,
}
export const insurance_package = {
  name: 'Insurance package',
  fieldType: 'select',
  required: 1,
  options: [
    { id: 1, name: 'basic', day_rate: 1.2, annual_rate: 39 },
    { id: 2, name: 'extended', day_rate: 1.8, annual_rate: 49 },
    { id: 3, name: 'extra', day_rate: 2.4, annual_rate: 59 },
  ],
}
export const additional_charges = {
  name: 'Additional charges',
  fieldType: 'select',
  required: 0,
  options: [
    { id: 0, name: 'no charges', day_rate: 1, annual_rate: 1 },
    { id: 1, name: 'cancellation', day_rate: 1.5, annual_rate: 1.2 },
    { id: 2, name: 'sport activities', day_rate: 1.3, annual_rate: 1.1 },
  ],
}
export const persons = {
  name: 'Persons',
  fieldType: 'select',
  required: 1,
  options: [
    { id: 1, name: '1 Person' },
    { id: 2, name: '2 Persons' },
    { id: 3, name: '3 Persons' },
  ],
}
