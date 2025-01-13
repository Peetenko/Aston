export interface State {
  insurance_type: number
  period_start: Date | null
  period_end: Date | null
  insurance_package: number
  additional_charges: number
  persons: number
  darkMode: boolean
}

export function createState(): State {
  return {
    insurance_type: 1,
    period_start: null,
    period_end: null,
    insurance_package: 0,
    additional_charges: 0,
    persons: 0,
    darkMode: true,
  }
}
