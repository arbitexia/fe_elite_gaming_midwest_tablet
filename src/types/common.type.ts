export enum ResponseStatus {
  PENDING = 'pending',
  FAILED = 'failed',
  SUCCESS = 'success',
}

export enum AuthCallbackStatus {
  TABLET = 'tablet',
  CUSTOMER = 'customer',
  REGISTER = 'register',
  VERIFY = 'verify',
}

export type i18translateType = {
  t: (
    key: string | TemplateStringsArray | (string | TemplateStringsArray)[],
    options?: string | undefined
  ) => string;
};

export declare namespace CommonType {
  export type Message = {
    message: string;
  };

  export type Address = {
    address1?: string;
    address2?: string;
    city: string;
    state: string;
    zipcode: string;
    country?: string;
  };
  export type PageInfo = {
    page: number;
    size: number;
    total: number;
  };
  export type Pagination<T> = {
    data: T[];
    pageInfo: PageInfo;
  };
}
