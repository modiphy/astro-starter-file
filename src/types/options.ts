import type { ApiOptions } from '@/types/api-types'

const schemaOptions: ApiOptions = {
  fields: 'id,name,parentId',
  loadChildCollections: false
}

export {
  schemaOptions
}