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

import { DateVitale } from '../models/date-vitale';
import { DateVitaleDto } from '../models/date-vitale-dto';

@Injectable({
  providedIn: 'root',
})
export class DateVitaleService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDateVitaleGet
   */
  static readonly ApiDateVitaleGetPath = '/api/DateVitale';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDateVitaleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DateVitale>>> {

    const rb = new RequestBuilder(this.rootUrl, DateVitaleService.ApiDateVitaleGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DateVitale>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDateVitaleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<DateVitale>> {

    return this.apiDateVitaleGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DateVitale>>) => r.body as Array<DateVitale>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDateVitaleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DateVitale>>> {

    const rb = new RequestBuilder(this.rootUrl, DateVitaleService.ApiDateVitaleGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DateVitale>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDateVitaleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<DateVitale>> {

    return this.apiDateVitaleGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DateVitale>>) => r.body as Array<DateVitale>)
    );
  }

  /**
   * Path part for operation apiDateVitalePost
   */
  static readonly ApiDateVitalePostPath = '/api/DateVitale';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDateVitalePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDateVitalePost$Response(params?: {
    body?: DateVitaleDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DateVitaleService.ApiDateVitalePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDateVitalePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDateVitalePost(params?: {
    body?: DateVitaleDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiDateVitalePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiDateVitaleIdGet
   */
  static readonly ApiDateVitaleIdGetPath = '/api/DateVitale/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDateVitaleIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DateVitale>> {

    const rb = new RequestBuilder(this.rootUrl, DateVitaleService.ApiDateVitaleIdGetPath, 'get');
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
        return r as StrictHttpResponse<DateVitale>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDateVitaleIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DateVitale> {

    return this.apiDateVitaleIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DateVitale>) => r.body as DateVitale)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDateVitaleIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DateVitale>> {

    const rb = new RequestBuilder(this.rootUrl, DateVitaleService.ApiDateVitaleIdGetPath, 'get');
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
        return r as StrictHttpResponse<DateVitale>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDateVitaleIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DateVitale> {

    return this.apiDateVitaleIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DateVitale>) => r.body as DateVitale)
    );
  }

  /**
   * Path part for operation apiDateVitaleIdPut
   */
  static readonly ApiDateVitaleIdPutPath = '/api/DateVitale/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDateVitaleIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDateVitaleIdPut$Response(params: {
    id: string;
    body?: DateVitaleDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DateVitaleService.ApiDateVitaleIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiDateVitaleIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDateVitaleIdPut(params: {
    id: string;
    body?: DateVitaleDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiDateVitaleIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiDateVitaleIdDelete
   */
  static readonly ApiDateVitaleIdDeletePath = '/api/DateVitale/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDateVitaleIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleIdDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DateVitaleService.ApiDateVitaleIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiDateVitaleIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDateVitaleIdDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiDateVitaleIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
