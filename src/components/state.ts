export interface State {
  insurance_type: number
  period_start: Date | null
  period_end: Date | null
  insurance_package: number
  additional_charges: number
  persons: number
  add_rate: number
  pkg_rate: number
  final_result: number
}

export function createState(): State {
  return {
    insurance_type: 1,
    period_start: null,
    period_end: null,
    insurance_package: 0,
    additional_charges: 0,
    persons: 0,
    add_rate: 0,
    pkg_rate: 0,
    final_result: 0,
  }
}
