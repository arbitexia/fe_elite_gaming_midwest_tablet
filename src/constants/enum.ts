export enum ActivityType {
  CHECKIN = 'CHECKIN',
  SIGNUP = 'SIGNUP',
  LOGIN = 'LOGIN',
  GET = 'GET',
  VIEW = 'VIEW',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum ActivityModel {
  USER = 'USER',
  REWARD = 'REWARD',
  PRODUCT = 'PRODUCT',
  ASSET = 'ASSET',
  POINT = 'POINT',
  LOCATION = 'LOCATION',
  GALLERY = 'GALLERY',
}

export enum ProductStatus {
  AVAILABLE = 'AVAILABLE',
  DISABLED = 'DISABLED',
  OUTOFSTOCK = 'OUTOFSTOCK',
}

export enum RequestStatus {
  ACCEPTED = 'Accepted',
  DECLINED = 'Declined',
  WAITING = 'Waiting',
}

export enum ResponseStatus {
  PENDING = 'pending',
  FAILED = 'failed',
  SUCCESS = 'success',
}

export enum LocationStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export enum TransactionStatus {
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  WAITING = 'WAITING',
}
