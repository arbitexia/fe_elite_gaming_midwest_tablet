export enum TransactionStatus {
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  WAITING = 'WAITING',
}

export declare namespace TransactionType {
  type Body = {
    input: {
      userId: number;
      rewardId: number;
      locationId: number;
      pointId: number;
      status: TransactionStatus;
      type: string;
      amount: number;
      balance: number;
      userCouponCodes?: string[];
    };
  };
  type CouponBody = {
    input: {
      userCouponId: number;
      userId: number;
      status: TransactionStatus;
      type: string;
      amount: number;
      metadata: any;
    };
  };
}
