type CollectionModelType = {
  id: number
  partendId: number
  name: string
  type: string
  items: []
}

class CollectionModel implements CollectionModelType {
  private _id: number
  private _partendId: number
  private _name: string
  private _type: string
  private _items: []

  constructor(data: CollectionModelType) {
    this._id = data.id
    this._partendId = data.partendId
    this._name = data.name
    this._type = data.type
    this._items = data.items
  }

  get id(): number {
    return this._id
  }

  get partendId(): number {
    return this._partendId
  }

  get name(): string {
    return this._name
  }

  get type(): string {
    return this._type
  }

  get items(): [] {
    return this._items
  }
}

export default CollectionModel
