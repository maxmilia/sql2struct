import { kv } from '../../lib/type.d'

export declare interface OptionProps {
  isShow: boolean
  specialIdentifiers?: Array<string>
  fieldMaps?: kv
  onConfirm?: (specialIdentifiers, fieldMaps) => void
  onCancel?: () => void
}
