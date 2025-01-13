<script setup lang="ts">
import { reactive, ref } from 'vue'
import { createState, State } from './state'
import FieldRow from './FieldRow.vue'
import {
  insurance_package,
  insurance_type,
  persons,
  period_end,
  period_start,
  additional_charges,
} from './fields'

const state = reactive<State>(createState())
const addRate = ref(0)
const pkgRate = ref(0)
const finalResult = ref(0)

function calculate() {
  if (state.insurance_package && state.insurance_type && state.persons && state.period_start) {
    if ((state.period_end && state.insurance_type === 1) || state.insurance_type === 2) {
      const dateFrom = new Date(state.period_start)
      const dateTo = new Date(state.period_end)
      const days = Math.floor((dateTo - dateFrom) / (1000 * 60 * 60 * 24)) + 1
      const additional = setCharges(state.additional_charges, state.insurance_type)
      const rate = setRates(state.insurance_package, state.insurance_type)
      const result =
        (state.insurance_type === 1 ? days : 1) * pkgRate.value * addRate.value * state.persons
      finalResult.value = result
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
  additional_charges.options.forEach((option) => {
    if (charge === option.id) {
      if (type === 1) addRate.value = option.day_rate
      if (type === 2) addRate.value = option.annual_rate
    }
  })
}

function setRates(pkg: number, type: number) {
  insurance_package.options.forEach((option) => {
    if (pkg === option.id) {
      if (type === 1) pkgRate.value = option.day_rate
      if (type === 2) pkgRate.value = option.annual_rate
    }
  })
}
</script>

<template>
  <div class="container">
    <div class="calculator">
      <div class="fieldRow">
        <div class="fieldName">
          <label>{{
            insurance_type.required ? '* ' + insurance_type.name : insurance_type.name
          }}</label>
        </div>
        <div class="field">
          <select v-model="state.insurance_type">
            <option v-for="option in insurance_type.options" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="fieldRow">
        <div class="fieldName">
          <label>{{ period_start.required ? '* ' + period_start.name : period_start.name }}</label>
        </div>
        <div class="field">
          <input type="date" v-model="state.period_start" />
        </div>
      </div>

      <div class="fieldRow">
        <div class="fieldName">
          <label>{{ state.insurance_type === 1 ? '* ' + period_end.name : period_end.name }}</label>
        </div>
        <div class="field">
          <input type="date" v-model="state.period_end" />
        </div>
      </div>

      <div class="fieldRow">
        <div class="fieldName">
          <label>{{
            insurance_package.required ? '* ' + insurance_package.name : insurance_package.name
          }}</label>
        </div>
        <div class="field">
          <select v-model="state.insurance_package">
            <option v-for="option in insurance_package.options" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="fieldRow">
        <div class="fieldName">
          <label>{{
            additional_charges.required ? '* ' + additional_charges.name : additional_charges.name
          }}</label>
        </div>
        <div class="field">
          <select v-model="state.additional_charges">
            <option
              v-for="option in additional_charges.options"
              :value="option.id"
              :key="option.id"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="fieldRow">
        <div class="fieldName">
          <label>{{ persons.required ? '* ' + persons.name : persons.name }}</label>
        </div>
        <div class="field">
          <select v-model="state.persons">
            <option v-for="option in persons.options" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="fieldRow">
        <div class="fieldName">
          <button class="submitBtn" @click="calculate">Calculate</button>
        </div>
        <div class="field result">
          {{ finalResult.toFixed(2) + '€' }}
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
