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

import { LimitParam } from '../models/limit-param';
import { LimitParamDto } from '../models/limit-param-dto';

@Injectable({
  providedIn: 'root',
})
export class LimitParamService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLimitParamGet
   */
  static readonly ApiLimitParamGetPath = '/api/LimitParam';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LimitParam>>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitParam>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<LimitParam>> {

    return this.apiLimitParamGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LimitParam>>) => r.body as Array<LimitParam>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LimitParam>>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitParam>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<LimitParam>> {

    return this.apiLimitParamGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LimitParam>>) => r.body as Array<LimitParam>)
    );
  }

  /**
   * Path part for operation apiLimitParamPost
   */
  static readonly ApiLimitParamPostPath = '/api/LimitParam';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLimitParamPost$Response(params?: {
    body?: LimitParamDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLimitParamPost(params?: {
    body?: LimitParamDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiLimitParamPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLimitParamIdGet
   */
  static readonly ApiLimitParamIdGetPath = '/api/LimitParam/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LimitParam>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LimitParam>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<LimitParam> {

    return this.apiLimitParamIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<LimitParam>) => r.body as LimitParam)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LimitParam>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LimitParam>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<LimitParam> {

    return this.apiLimitParamIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<LimitParam>) => r.body as LimitParam)
    );
  }

  /**
   * Path part for operation apiLimitParamIdPut
   */
  static readonly ApiLimitParamIdPutPath = '/api/LimitParam/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLimitParamIdPut$Response(params: {
    id: string;
    body?: LimitParamDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLimitParamIdPut(params: {
    id: string;
    body?: LimitParamDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiLimitParamIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLimitParamIdDelete
   */
  static readonly ApiLimitParamIdDeletePath = '/api/LimitParam/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamIdDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamIdDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiLimitParamIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLimitParamForAlertaIdGet
   */
  static readonly ApiLimitParamForAlertaIdGetPath = '/api/LimitParam/ForAlerta{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamForAlertaIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamForAlertaIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LimitParam>>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamForAlertaIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitParam>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamForAlertaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamForAlertaIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Array<LimitParam>> {

    return this.apiLimitParamForAlertaIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LimitParam>>) => r.body as Array<LimitParam>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLimitParamForAlertaIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamForAlertaIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LimitParam>>> {

    const rb = new RequestBuilder(this.rootUrl, LimitParamService.ApiLimitParamForAlertaIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitParam>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLimitParamForAlertaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLimitParamForAlertaIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Array<LimitParam>> {

    return this.apiLimitParamForAlertaIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LimitParam>>) => r.body as Array<LimitParam>)
    );
  }

}
