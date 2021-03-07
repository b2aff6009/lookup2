import IEntry from './IEntry'

export interface ISheet{
  name : string
  version : number
  active? : boolean
  entries? : IEntry[]
  source? : string
}

export default ISheet