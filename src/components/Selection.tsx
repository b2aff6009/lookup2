import { useState } from 'react'
import './Selection.css'
import ISheet from '../classes/ISheet'
import Checkbox from '@material-ui/core/Checkbox'

interface ISelection {
  sheets: ISheet[]
  setSelection: Function
}

interface ILabledCheckbox {
  sheet: ISheet
  onChange: Function
  label: string
}

const LabeledCheckbbox = (props: ILabledCheckbox) => {
  const [checked, setChecked] = useState(false)
  const changeHandle = () => {
    props.onChange(props.sheet, !checked)
    setChecked(!checked)
  }
  return (
    <div>
      <Checkbox checked={checked} onChange={changeHandle} />
      <>{props.label}</>
    </div>
  )
}

const Selection = (props: ISelection) => {
  const CheckboxFactory = (sheet: ISheet) => {
    return (
      <div>
        <LabeledCheckbbox
          label={sheet.name}
          sheet={sheet}
          onChange={props.setSelection}
        />
      </div>
    )
  }

  return <div className="selection">{props.sheets.map(CheckboxFactory)}</div>
}

export default Selection
