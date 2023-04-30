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

import { Admin } from '../models/admin';
import { AdminDto } from '../models/admin-dto';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminGet
   */
  static readonly ApiAdminGetPath = '/api/Admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Admin>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Admin>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<Admin>> {

    return this.apiAdminGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Admin>>) => r.body as Array<Admin>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Admin>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Admin>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<Admin>> {

    return this.apiAdminGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Admin>>) => r.body as Array<Admin>)
    );
  }

  /**
   * Path part for operation apiAdminPost
   */
  static readonly ApiAdminPostPath = '/api/Admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminPost$Response(params?: {
    body?: AdminDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAdminPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminPost(params?: {
    body?: AdminDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiAdminPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminIdGet
   */
  static readonly ApiAdminIdGetPath = '/api/Admin/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Admin>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminIdGetPath, 'get');
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
        return r as StrictHttpResponse<Admin>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Admin> {

    return this.apiAdminIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Admin>) => r.body as Admin)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Admin>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminIdGetPath, 'get');
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
        return r as StrictHttpResponse<Admin>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Admin> {

    return this.apiAdminIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Admin>) => r.body as Admin)
    );
  }

  /**
   * Path part for operation apiAdminIdPut
   */
  static readonly ApiAdminIdPutPath = '/api/Admin/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminIdPut$Response(params: {
    id: string;
    body?: AdminDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAdminIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminIdPut(params: {
    id: string;
    body?: AdminDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiAdminIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminIdDelete
   */
  static readonly ApiAdminIdDeletePath = '/api/Admin/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminIdDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiAdminIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminIdDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiAdminIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
