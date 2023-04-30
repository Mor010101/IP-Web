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

import { Alerta } from '../models/alerta';
import { AlertaDto } from '../models/alerta-dto';

@Injectable({
  providedIn: 'root',
})
export class AlertaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAlertaGet
   */
  static readonly ApiAlertaGetPath = '/api/Alerta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Alerta>>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Alerta>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<Alerta>> {

    return this.apiAlertaGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Alerta>>) => r.body as Array<Alerta>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Alerta>>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Alerta>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<Alerta>> {

    return this.apiAlertaGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Alerta>>) => r.body as Array<Alerta>)
    );
  }

  /**
   * Path part for operation apiAlertaPost
   */
  static readonly ApiAlertaPostPath = '/api/Alerta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaPost$Response(params?: {
    body?: AlertaDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAlertaPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaPost(params?: {
    body?: AlertaDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiAlertaPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAlertaIdGet
   */
  static readonly ApiAlertaIdGetPath = '/api/Alerta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Alerta>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaIdGetPath, 'get');
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
        return r as StrictHttpResponse<Alerta>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Alerta> {

    return this.apiAlertaIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Alerta>) => r.body as Alerta)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Alerta>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaIdGetPath, 'get');
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
        return r as StrictHttpResponse<Alerta>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Alerta> {

    return this.apiAlertaIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Alerta>) => r.body as Alerta)
    );
  }

  /**
   * Path part for operation apiAlertaIdPut
   */
  static readonly ApiAlertaIdPutPath = '/api/Alerta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaIdPut$Response(params: {
    id: string;
    body?: AlertaDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAlertaIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaIdPut(params: {
    id: string;
    body?: AlertaDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiAlertaIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAlertaIdDelete
   */
  static readonly ApiAlertaIdDeletePath = '/api/Alerta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaIdDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiAlertaIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaIdDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiAlertaIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAlertaForPacientIdGet
   */
  static readonly ApiAlertaForPacientIdGetPath = '/api/Alerta/ForPacient{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaForPacientIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaForPacientIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Alerta>>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaForPacientIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Alerta>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaForPacientIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaForPacientIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Array<Alerta>> {

    return this.apiAlertaForPacientIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Alerta>>) => r.body as Array<Alerta>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaForPacientIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaForPacientIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Alerta>>> {

    const rb = new RequestBuilder(this.rootUrl, AlertaService.ApiAlertaForPacientIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Alerta>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaForPacientIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaForPacientIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Array<Alerta>> {

    return this.apiAlertaForPacientIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Alerta>>) => r.body as Array<Alerta>)
    );
  }

}
