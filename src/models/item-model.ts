import type { ButtonType } from '@/types/section-button-types'

type ItemModelType = {
  id: number
  parentId: number
  name: string
  fields: {
    active: string
    slug: string
    routeName: string
    type: string | ''
    customType: string
    nav: ButtonType | undefined
    pageLink?: number
    platform?: string | undefined
    image?: any
  }
  sectionCollection: number
}

class ItemModel implements ItemModelType {
  private _id: number | 0
  private _parentId: number | 0
  private _name: string
  private _fields: {
    active: string
    slug: string
    routeName: string
    type: string | ''
    customType: string
    nav: ButtonType | undefined
    pageLink?: number
    platform?: string | undefined
    image?: any
  }
  private _sectionCollection: number | 0

  constructor(data: ItemModelType) {
    this._id = data.id
    this._parentId = data.parentId
    this._name = data.name
    this._fields = data.fields
    this._sectionCollection = data.sectionCollection
  }

  get id(): number {
    return this._id
  }

  get parentId(): number {
    return this._parentId
  }

  get name(): string {
    return this._name
  }

  get fields(): {
    active: string
    slug: string
    routeName: string
    type: string
    customType: string
    nav: ButtonType | undefined
    pageLink?: number
    platform?: string | undefined
    image?: any
  } {
    return this._fields
  }

  get sectionCollection(): number | 0 {
    return this._sectionCollection
  }

  get slug(): string {
    if (this._fields?.slug) {
      return this._fields.slug.toLowerCase().replace(/ /g, '-')
    }

    if (this._fields?.routeName) {
      return this._fields.routeName.toLowerCase().replace(/ /g, '-')
    }

    return this._name.toLowerCase().replace(/ /g, '-')
  }

  get sectionType(): string | '' {
    if (!this._fields.customType && !this._fields.type) {
      return ''
    }

    if (this._fields?.customType) {
      return this.formatComponentName(this._fields.customType)
    }

    return this.formatComponentName(this._fields.type)
  }

  public formatComponentName(name: string) {
    const splitName = name.split(/\W+/)

    splitName.map((arr, index) => {
      return (splitName[index] = arr.charAt(0).toUpperCase() + arr.slice(1))
    })

    return `${splitName.join('').replaceAll('[^A-Za-z0-9]', '')}`
  }
}

export default ItemModel
