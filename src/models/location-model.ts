type Address = {
  address?: string
  address2?: string
  city?: string
  state?: string
  zip?: string
  country?: string
}

type LocationModelType = {
  telephone?: string
  tollFree?: string
  fax?: string
  email?: string
  hours?: string
  address?: Address
  googleMapUrl?: string | undefined
}

class LocationModel implements LocationModelType {
  private _telephone?: string
  private _tollFree?: string
  private _fax?: string
  private _email?: string
  private _hours?: string
  private _address?: Address
  private _googleMapUrl?: string | undefined

  constructor(fields: LocationModelType) {
    this._telephone = fields.telephone
    this._tollFree = fields.tollFree
    this._fax = fields.fax
    this._email = fields.email
    this._hours = fields.hours
    this._address = fields.address
    this._googleMapUrl = fields.googleMapUrl
  }

  // Add the missing properties
  get telephone(): string | undefined {
    return this._telephone
  }

  get tollFree(): string | undefined {
    return this._tollFree
  }

  get fax(): string | undefined {
    return this._fax
  }

  get email(): string | undefined {
    return this._email
  }

  get hours(): string | undefined {
    return this._hours
  }

  get address(): Address | undefined {
    return this._address
  }

  public get googleMapUrl(): string | undefined {
    return this._googleMapUrl
  }

  get phoneHref(): string | '' {
    if (this._telephone !== undefined) {
      const formattedPhone = this._telephone?.replace(/[^0-9]/g, '')
      return formattedPhone ? `tel:${formattedPhone}` : ''
    }

    return ''
  }

  get emailHref(): string | '' {
    return `mailto:${this._email}`
  }
}

export default LocationModel
