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

import { Test } from '../models/test';

@Injectable({
  providedIn: 'root',
})
export class TestService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTestGet
   */
  static readonly ApiTestGetPath = '/api/Test';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTestGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Test>>> {

    const rb = new RequestBuilder(this.rootUrl, TestService.ApiTestGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Test>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTestGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<Test>> {

    return this.apiTestGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Test>>) => r.body as Array<Test>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTestGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Test>>> {

    const rb = new RequestBuilder(this.rootUrl, TestService.ApiTestGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Test>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTestGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<Test>> {

    return this.apiTestGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Test>>) => r.body as Array<Test>)
    );
  }

}
