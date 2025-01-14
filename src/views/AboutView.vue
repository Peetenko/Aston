<template>
  <div class="about">
    <table>
      <thead>
        <tr>
          <th>Form field/label</th>
          <th>Possible values (enumeration)</th>
          <th>Required?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Insurance type</td>
          <td>short term insurance, annual insurance</td>
          <td>yes</td>
        </tr>
        <tr>
          <td>Period start</td>
          <td></td>
          <td>yes</td>
        </tr>
        <tr>
          <td>Period end</td>
          <td></td>
          <td>yes for short term insurance</td>
        </tr>
        <tr>
          <td>Package</td>
          <td>basic, extended, extra</td>
          <td>yes</td>
        </tr>
        <tr>
          <td>Additional charges</td>
          <td>cancellation, sport activities</td>
          <td>no</td>
        </tr>
        <tr>
          <td>No. of persons</td>
          <td>1 - 3</td>
          <td>yes</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Rates</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>short term insurance</td>
          <td>annual insurance</td>
        </tr>
        <tr>
          <td>basic package</td>
          <td>1,2 € / day</td>
          <td>39 €</td>
        </tr>
        <tr>
          <td>extended package</td>
          <td>1,8 € / day</td>
          <td>49 €</td>
        </tr>
        <tr>
          <td>extra package</td>
          <td>2,4 € / day</td>
          <td>59 €</td>
        </tr>
        <tr>
          <td>cancellation</td>
          <td>50 % additional charge</td>
          <td>20 % additional charge</td>
        </tr>
        <tr>
          <td>sport activities</td>
          <td>30 % additional charge</td>
          <td>10 % additional charge</td>
        </tr>
        <tr>
          <td></td>
          <td>Price of insurance should be the result of calculation.</td>
          <td>10 % additional charge</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>Price of insurance should be the result of calculation.</td>
          <td>
            Short term insurance for three days for two persons, extended package with additional
            charge for sport activities costs 14,04 € (3 * 1,8 * 1,3 * 2)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.about {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

table {
  padding: 5px;
  border: solid 1px var(--green-color);
  border-radius: 5px;
}
td {
  padding: 5px;
}
th {
  background-color: var(--green-color);
  color: black;
  border-radius: 5px;
  padding: 5px;
}
h2 {
  text-align: center;
}
</style>
