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

import { Recomandare } from '../models/recomandare';
import { RecomandareDto } from '../models/recomandare-dto';

@Injectable({
  providedIn: 'root',
})
export class RecomandareService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRecomandareGet
   */
  static readonly ApiRecomandareGetPath = '/api/Recomandare';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandareGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Recomandare>>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandareGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Recomandare>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRecomandareGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<Recomandare>> {

    return this.apiRecomandareGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Recomandare>>) => r.body as Array<Recomandare>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandareGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Recomandare>>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandareGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Recomandare>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRecomandareGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<Recomandare>> {

    return this.apiRecomandareGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Recomandare>>) => r.body as Array<Recomandare>)
    );
  }

  /**
   * Path part for operation apiRecomandarePost
   */
  static readonly ApiRecomandarePostPath = '/api/Recomandare';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandarePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRecomandarePost$Response(params?: {
    body?: RecomandareDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandarePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRecomandarePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRecomandarePost(params?: {
    body?: RecomandareDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiRecomandarePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRecomandareIdGet
   */
  static readonly ApiRecomandareIdGetPath = '/api/Recomandare/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandareIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Recomandare>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandareIdGetPath, 'get');
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
        return r as StrictHttpResponse<Recomandare>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRecomandareIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Recomandare> {

    return this.apiRecomandareIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Recomandare>) => r.body as Recomandare)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandareIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Recomandare>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandareIdGetPath, 'get');
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
        return r as StrictHttpResponse<Recomandare>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRecomandareIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Recomandare> {

    return this.apiRecomandareIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Recomandare>) => r.body as Recomandare)
    );
  }

  /**
   * Path part for operation apiRecomandareIdPut
   */
  static readonly ApiRecomandareIdPutPath = '/api/Recomandare/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandareIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRecomandareIdPut$Response(params: {
    id: string;
    body?: RecomandareDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandareIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiRecomandareIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRecomandareIdPut(params: {
    id: string;
    body?: RecomandareDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiRecomandareIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRecomandareIdDelete
   */
  static readonly ApiRecomandareIdDeletePath = '/api/Recomandare/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandareIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareIdDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandareIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiRecomandareIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareIdDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiRecomandareIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRecomandareForPacientIdGet
   */
  static readonly ApiRecomandareForPacientIdGetPath = '/api/Recomandare/ForPacient{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandareForPacientIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareForPacientIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Recomandare>>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandareForPacientIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Recomandare>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRecomandareForPacientIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareForPacientIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Array<Recomandare>> {

    return this.apiRecomandareForPacientIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Recomandare>>) => r.body as Array<Recomandare>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecomandareForPacientIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareForPacientIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Recomandare>>> {

    const rb = new RequestBuilder(this.rootUrl, RecomandareService.ApiRecomandareForPacientIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Recomandare>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRecomandareForPacientIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecomandareForPacientIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Array<Recomandare>> {

    return this.apiRecomandareForPacientIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Recomandare>>) => r.body as Array<Recomandare>)
    );
  }

}
