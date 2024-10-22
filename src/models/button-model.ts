import type { ButtonType } from '@/types/section-button-types'
import type { ApiOptions } from '@/types/api-types'

import ItemModel from '@/models/item-model'
import CollectionModel from '@/models/collection-model'

import { collection_schema } from '@/constants/page-section'

import { getCollection } from '@/api/flux-collection'

class ButtonModel implements ButtonType {
  private _text: string
  private _url: string
  private _target: string
  private _buttonPageLink?: number

  constructor(data: ButtonType) {
    this._text = data.text || ''
    this._url = data.url || ''
    this._target = data.target || ''
    this._buttonPageLink = data.buttonPageLink || undefined
  }

  async getNavitems(buttonPageLink: number): Promise<any> {
    const schemaOptions: ApiOptions = {
      fields: 'id,name,parentId',
      loadChildCollections: false
    }

    const schema = await getCollection(schemaOptions)

    const navSchema = schema.find((item: any) => item.name === collection_schema.NAVIGATION)

    const options: ApiOptions = {
      id: navSchema.id,
      model: CollectionModel,
      fields: 'id,parentId,name,type,items{id,parentId,name,sectionCollection,fields',
      loadChildCollections: false
    }

    const navCollection = await getCollection(options)
    const { items } = navCollection
    let data = items?.find((nav: any) => nav.id === buttonPageLink)

    if (data) {
      if (data.fields?.pageLink) {
        data = items?.find((nav: any) => nav.id === data.fields.pageLink)
      }

      const item = new ItemModel(data)

      if (data.fields?.nav) {
        return {
          ...data.fields?.nav,
          text: data.fields?.nav.text ? data?.fields?.nav.text : item.name
        }
      }

      let slug = `/${item.slug}`

      if (item.parentId !== 0) {
        const parent = new ItemModel(items.find((i: ItemModel) => i.id === item.parentId))
        slug = `/${parent.slug}${slug}`

        if (parent.parentId !== 0) {
          const grandParent = new ItemModel(items.find((i: ItemModel) => i.id === parent.parentId))
          slug = `/${grandParent.slug}${slug}`
        }
      }

      return {
        text: item.name,
        url: slug,
        target: '_self'
      }
    }

    return {
      text: '',
      url: '',
      target: '_self'
    }
  }

  async getUrl(): Promise<string | undefined> {
    if (this._buttonPageLink) {
      const nav = await this.getNavitems(this._buttonPageLink)

      return nav.url
    }

    return this._url
  }

  get text(): string | '' {
    return this._text
  }

  get url(): string | '' {
    return this._url
  }

  get target(): string | '' {
    return this._target
  }

  get buttonPageLink(): number | undefined {
    return this._buttonPageLink
  }

  get phoneHref(): string | '' {
    if (this._text !== undefined) {
      const formattedPhone = this._text?.replace(/[^0-9]/g, '')
      return formattedPhone ? `tel:${formattedPhone}` : ''
    }

    return ''
  }
}

export default ButtonModel
