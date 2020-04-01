import React, { Component } from "react";
import style from "./content.module.css";
import item from './data.js'

import { Dropdown,DatePickerInput,DatePicker } from "carbon-components-react";
class HomeContent extends Component {
  state = {};
  render() {
    console.log({...item})
    let temp=[
       "option-1",   
       "option-2",
   "Option 2"
    ]
    return (
      <div className={style['dropdown__row']}>
        <div style={{ width: "200px" }}>
          <Dropdown
            id="carbon-dropdown"
            items={temp}
            onChange={function noRefCheck() {}}
            label="hello"
          />
        </div>
        <div style={{ width: "200px" }}>
          <Dropdown
            id="carbon-dropdown1"
            items={temp}
            onChange={function noRefCheck() {}}
            label="hello"
          />
        </div>
        <div style={{ width: "200px" }}>
          <Dropdown
            id="carbon-dropdown2"
            items={temp}
            onChange={function noRefCheck() {}}
            label="hello"
          />
        </div>
        <p>Filter</p>
        <div>
        
        <DatePicker
  dateFormat="m/d/Y"
  datePickerType="single"
  id="date-picker"
  light={false}
  locale="en"
  onChange={function noRefCheck(){}}
  onClose={function noRefCheck(){}}
  short={false}
>
  <DatePickerInput
    className="some-class"
    disabled={false}
    iconDescription="Icon description"
    id="date-picker-input-id"
    invalid={false}
    invalidText="A valid value is required"
    onChange={function noRefCheck(){}}
    onClick={function noRefCheck(){}}
    pattern="d{1,2}/d{4}"
    placeholder="mm/dd/yyyy"
    type="text"
  />
</DatePicker>
</div>
      </div>
    );
  }
}

export default HomeContent;
