<script setup lang="ts">
import { reactive } from 'vue'
import { createState, State } from './state'
import { fields } from './fields'

const state = reactive<State>(createState())

function calculate() {
  if (state.insurance_package && state.insurance_type && state.persons && state.period_start) {
    if ((state.period_end && state.insurance_type === 1) || state.insurance_type === 2) {
      const dateFrom = new Date(state.period_start)
      const dateTo = new Date(state.period_end)
      const days = Math.floor((dateTo - dateFrom) / (1000 * 60 * 60 * 24)) + 1
      const additional = setCharges(state.additional_charges, state.insurance_type)
      const rate = setRates(state.insurance_package, state.insurance_type)
      state.final_result =
        (state.insurance_type === 1 ? days : 1) * state.pkg_rate * state.add_rate * state.persons
    } else {
      alert('Please fill out Periond end when using Short term insurance')
      return false
    }
  } else {
    alert('Please fill out all required fields')
    return false
  }
}

function setCharges(charge: number, type: number) {
  fields.forEach((field) => {
    if (field.id === 5) {
      field.options.forEach((option) => {
        if (charge === option.id) {
          if (type === 1) state.add_rate = option.day_rate
          if (type === 2) state.add_rate = option.annual_rate
        }
      })
    }
  })
}

function setRates(pkg: number, type: number) {
  fields.forEach((field) => {
    if (field.id === 4) {
      field.options.forEach((option) => {
        if (pkg === option.id) {
          if (type === 1) state.pkg_rate = option.day_rate
          if (type === 2) state.pkg_rate = option.annual_rate
        }
      })
    }
  })
}
</script>

<template>
  <div class="container">
    <div class="calculator">
      <div class="fieldRow" v-for="field in fields" :key="field.id">
        <div class="fieldName">
          <label>{{ field.required ? '* ' + field.name : field.name }}</label>
        </div>
        <div class="field" v-if="field.fieldType === 'select'">
          <select v-model="state[field.stateName]">
            <option v-for="option in field.options" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="field" v-else-if="field.fieldType === 'date'">
          <input type="date" v-model="state[field.stateName]" />
        </div>
      </div>

      <div class="fieldRow">
        <div class="fieldName">
          <button class="submitBtn" @click="calculate">Calculate</button>
        </div>
        <div class="field result">
          {{ state.final_result.toFixed(2) + '€' }}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
:root {
  --green-color: hsla(160, 100%, 37%, 1);
}
.container {
  display: flex;
  width: 100%;
  justify-content: center;
}
.calculator {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: solid 1px var(--green-color);
  border-radius: 10px;
  margin-top: 20px;
  justify-content: center;
  box-shadow:
    0 4px 8px 0 var(--green-color),
    0 6px 20px 0 var(--green-color);
}
.result {
  color: var(--green-color);
  font-weight: bold;
  text-align: center;
}
.fieldRow {
  display: inline-flex;
  width: 100%;
  padding: 10px;
  max-width: 500px;
}
.field {
  width: 50%;
  padding-left: 10px;
}
.fieldName {
  width: 50%;
  display: flex;
  align-items: center;
}
.submitBtn {
  padding: 10px;
  background-color: var(--green-color);
  border-radius: 10px;
  border: 0px;
  color: white;
  font-weight: bold;
}
input,
select {
  width: 100%;
  border: 1px solid var(--green-color);
  border-radius: 10px;
  padding: 10px;
  background: var(--color-background);
  color: var(--color-text);
}
</style>
