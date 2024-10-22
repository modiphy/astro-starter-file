import type { ApiOptions } from '@/types/api-types'

const url = import.meta.env.FLUX_API

const getGeneralInfo = async () => {
  try {
    const info = await (
      await fetch(
        `${url}?fields=id,disabled,name,url,cleanUrl,devUrl,organizationName,organizationLegal,analyticsId,facebookId,defaultMetaTitle`
      )
    ).json()

    return info
  } catch (error) {
    return {}
  }
}

const getCollection = async (options: ApiOptions) => {
  try {
    if (!options.id) {
      const { collections } = await (
        await fetch(`${url}?fields=collections{${options.fields}}}`)
      ).json()

      return collections
    }

    const ids = Array.isArray(options.id) ? options.id.join(',') : options.id

    const { collections } = await (
      await fetch(`${url}?collection=${ids}&fields=collections{${options.fields}}}`)
    ).json()

    if (!Array.isArray(options.id)) {
      return options?.model ? new options.model(collections[0]) : collections[0]
    }

    return collections?.map((collection: any) =>
      options?.model ? new options.model(collection) : collection
    )
  } catch (error) {
    return []
  }
}

export { getCollection, getGeneralInfo }
