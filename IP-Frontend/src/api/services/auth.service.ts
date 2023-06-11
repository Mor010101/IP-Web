/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserLoginDto } from '../models/user-login-dto';
import { UserTokens } from '../models/user-tokens';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuthPost
   */
  static readonly ApiAuthPostPath = '/api/Auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Plain$Response(params?: {
    body?: UserLoginDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UserTokens>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserTokens>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Plain(params?: {
    body?: UserLoginDto
  },
  context?: HttpContext

): Observable<UserTokens> {

    return this.apiAuthPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<UserTokens>) => r.body as UserTokens)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Json$Response(params?: {
    body?: UserLoginDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UserTokens>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserTokens>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Json(params?: {
    body?: UserLoginDto
  },
  context?: HttpContext

): Observable<UserTokens> {

    return this.apiAuthPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<UserTokens>) => r.body as UserTokens)
    );
  }

}
