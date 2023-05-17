/* tslint:disable */
/* eslint-disable */
import { TimeSpan } from './time-span';
export interface UserTokens {
  expiredTime?: string;
  guidId?: string;
  refreshToken?: null | string;
  token?: null | string;
  userEmail?: null | string;
  userId?: null | string;
  validity?: TimeSpan;
}
