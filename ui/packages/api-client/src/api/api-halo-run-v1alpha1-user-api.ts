/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap,
} from "../base";
// @ts-ignore
import { PasswordResetEmailRequest } from "../models";
// @ts-ignore
import { RegisterVerifyEmailRequest } from "../models";
// @ts-ignore
import { ResetPasswordRequest } from "../models";
// @ts-ignore
import { SignUpRequest } from "../models";
// @ts-ignore
import { User } from "../models";

/**
 * ApiHaloRunV1alpha1UserApi - axios parameter creator
 * @export
 */
export const ApiHaloRunV1alpha1UserApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Reset password by token
     * @param {string} name The name of the user
     * @param {ResetPasswordRequest} resetPasswordRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetPasswordByToken: async (
      name: string,
      resetPasswordRequest: ResetPasswordRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("resetPasswordByToken", "name", name);
      // verify required parameter 'resetPasswordRequest' is not null or undefined
      assertParamExists(
        "resetPasswordByToken",
        "resetPasswordRequest",
        resetPasswordRequest
      );
      const localVarPath =
        `/apis/api.halo.run/v1alpha1/users/{name}/reset-password`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        resetPasswordRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Send password reset email when forgot password
     * @param {PasswordResetEmailRequest} passwordResetEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendPasswordResetEmail: async (
      passwordResetEmailRequest: PasswordResetEmailRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'passwordResetEmailRequest' is not null or undefined
      assertParamExists(
        "sendPasswordResetEmail",
        "passwordResetEmailRequest",
        passwordResetEmailRequest
      );
      const localVarPath = `/apis/api.halo.run/v1alpha1/users/-/send-password-reset-email`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        passwordResetEmailRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Send registration verification email, which can be called when mustVerifyEmailOnRegistration in user settings is true
     * @param {RegisterVerifyEmailRequest} registerVerifyEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendRegisterVerifyEmail: async (
      registerVerifyEmailRequest: RegisterVerifyEmailRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'registerVerifyEmailRequest' is not null or undefined
      assertParamExists(
        "sendRegisterVerifyEmail",
        "registerVerifyEmailRequest",
        registerVerifyEmailRequest
      );
      const localVarPath = `/apis/api.halo.run/v1alpha1/users/-/send-register-verify-email`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        registerVerifyEmailRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Sign up a new user
     * @param {SignUpRequest} signUpRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signUp: async (
      signUpRequest: SignUpRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'signUpRequest' is not null or undefined
      assertParamExists("signUp", "signUpRequest", signUpRequest);
      const localVarPath = `/apis/api.halo.run/v1alpha1/users/-/signup`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        signUpRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ApiHaloRunV1alpha1UserApi - functional programming interface
 * @export
 */
export const ApiHaloRunV1alpha1UserApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    ApiHaloRunV1alpha1UserApiAxiosParamCreator(configuration);
  return {
    /**
     * Reset password by token
     * @param {string} name The name of the user
     * @param {ResetPasswordRequest} resetPasswordRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async resetPasswordByToken(
      name: string,
      resetPasswordRequest: ResetPasswordRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.resetPasswordByToken(
          name,
          resetPasswordRequest,
          options
        );
      const index = configuration?.serverIndex ?? 0;
      const operationBasePath =
        operationServerMap["ApiHaloRunV1alpha1UserApi.resetPasswordByToken"]?.[
          index
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, operationBasePath || basePath);
    },
    /**
     * Send password reset email when forgot password
     * @param {PasswordResetEmailRequest} passwordResetEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async sendPasswordResetEmail(
      passwordResetEmailRequest: PasswordResetEmailRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.sendPasswordResetEmail(
          passwordResetEmailRequest,
          options
        );
      const index = configuration?.serverIndex ?? 0;
      const operationBasePath =
        operationServerMap[
          "ApiHaloRunV1alpha1UserApi.sendPasswordResetEmail"
        ]?.[index]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, operationBasePath || basePath);
    },
    /**
     * Send registration verification email, which can be called when mustVerifyEmailOnRegistration in user settings is true
     * @param {RegisterVerifyEmailRequest} registerVerifyEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async sendRegisterVerifyEmail(
      registerVerifyEmailRequest: RegisterVerifyEmailRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.sendRegisterVerifyEmail(
          registerVerifyEmailRequest,
          options
        );
      const index = configuration?.serverIndex ?? 0;
      const operationBasePath =
        operationServerMap[
          "ApiHaloRunV1alpha1UserApi.sendRegisterVerifyEmail"
        ]?.[index]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, operationBasePath || basePath);
    },
    /**
     * Sign up a new user
     * @param {SignUpRequest} signUpRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async signUp(
      signUpRequest: SignUpRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.signUp(
        signUpRequest,
        options
      );
      const index = configuration?.serverIndex ?? 0;
      const operationBasePath =
        operationServerMap["ApiHaloRunV1alpha1UserApi.signUp"]?.[index]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, operationBasePath || basePath);
    },
  };
};

/**
 * ApiHaloRunV1alpha1UserApi - factory interface
 * @export
 */
export const ApiHaloRunV1alpha1UserApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ApiHaloRunV1alpha1UserApiFp(configuration);
  return {
    /**
     * Reset password by token
     * @param {ApiHaloRunV1alpha1UserApiResetPasswordByTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetPasswordByToken(
      requestParameters: ApiHaloRunV1alpha1UserApiResetPasswordByTokenRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .resetPasswordByToken(
          requestParameters.name,
          requestParameters.resetPasswordRequest,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Send password reset email when forgot password
     * @param {ApiHaloRunV1alpha1UserApiSendPasswordResetEmailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendPasswordResetEmail(
      requestParameters: ApiHaloRunV1alpha1UserApiSendPasswordResetEmailRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .sendPasswordResetEmail(
          requestParameters.passwordResetEmailRequest,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Send registration verification email, which can be called when mustVerifyEmailOnRegistration in user settings is true
     * @param {ApiHaloRunV1alpha1UserApiSendRegisterVerifyEmailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendRegisterVerifyEmail(
      requestParameters: ApiHaloRunV1alpha1UserApiSendRegisterVerifyEmailRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .sendRegisterVerifyEmail(
          requestParameters.registerVerifyEmailRequest,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Sign up a new user
     * @param {ApiHaloRunV1alpha1UserApiSignUpRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signUp(
      requestParameters: ApiHaloRunV1alpha1UserApiSignUpRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<User> {
      return localVarFp
        .signUp(requestParameters.signUpRequest, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for resetPasswordByToken operation in ApiHaloRunV1alpha1UserApi.
 * @export
 * @interface ApiHaloRunV1alpha1UserApiResetPasswordByTokenRequest
 */
export interface ApiHaloRunV1alpha1UserApiResetPasswordByTokenRequest {
  /**
   * The name of the user
   * @type {string}
   * @memberof ApiHaloRunV1alpha1UserApiResetPasswordByToken
   */
  readonly name: string;

  /**
   *
   * @type {ResetPasswordRequest}
   * @memberof ApiHaloRunV1alpha1UserApiResetPasswordByToken
   */
  readonly resetPasswordRequest: ResetPasswordRequest;
}

/**
 * Request parameters for sendPasswordResetEmail operation in ApiHaloRunV1alpha1UserApi.
 * @export
 * @interface ApiHaloRunV1alpha1UserApiSendPasswordResetEmailRequest
 */
export interface ApiHaloRunV1alpha1UserApiSendPasswordResetEmailRequest {
  /**
   *
   * @type {PasswordResetEmailRequest}
   * @memberof ApiHaloRunV1alpha1UserApiSendPasswordResetEmail
   */
  readonly passwordResetEmailRequest: PasswordResetEmailRequest;
}

/**
 * Request parameters for sendRegisterVerifyEmail operation in ApiHaloRunV1alpha1UserApi.
 * @export
 * @interface ApiHaloRunV1alpha1UserApiSendRegisterVerifyEmailRequest
 */
export interface ApiHaloRunV1alpha1UserApiSendRegisterVerifyEmailRequest {
  /**
   *
   * @type {RegisterVerifyEmailRequest}
   * @memberof ApiHaloRunV1alpha1UserApiSendRegisterVerifyEmail
   */
  readonly registerVerifyEmailRequest: RegisterVerifyEmailRequest;
}

/**
 * Request parameters for signUp operation in ApiHaloRunV1alpha1UserApi.
 * @export
 * @interface ApiHaloRunV1alpha1UserApiSignUpRequest
 */
export interface ApiHaloRunV1alpha1UserApiSignUpRequest {
  /**
   *
   * @type {SignUpRequest}
   * @memberof ApiHaloRunV1alpha1UserApiSignUp
   */
  readonly signUpRequest: SignUpRequest;
}

/**
 * ApiHaloRunV1alpha1UserApi - object-oriented interface
 * @export
 * @class ApiHaloRunV1alpha1UserApi
 * @extends {BaseAPI}
 */
export class ApiHaloRunV1alpha1UserApi extends BaseAPI {
  /**
   * Reset password by token
   * @param {ApiHaloRunV1alpha1UserApiResetPasswordByTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1UserApi
   */
  public resetPasswordByToken(
    requestParameters: ApiHaloRunV1alpha1UserApiResetPasswordByTokenRequest,
    options?: AxiosRequestConfig
  ) {
    return ApiHaloRunV1alpha1UserApiFp(this.configuration)
      .resetPasswordByToken(
        requestParameters.name,
        requestParameters.resetPasswordRequest,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Send password reset email when forgot password
   * @param {ApiHaloRunV1alpha1UserApiSendPasswordResetEmailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1UserApi
   */
  public sendPasswordResetEmail(
    requestParameters: ApiHaloRunV1alpha1UserApiSendPasswordResetEmailRequest,
    options?: AxiosRequestConfig
  ) {
    return ApiHaloRunV1alpha1UserApiFp(this.configuration)
      .sendPasswordResetEmail(
        requestParameters.passwordResetEmailRequest,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Send registration verification email, which can be called when mustVerifyEmailOnRegistration in user settings is true
   * @param {ApiHaloRunV1alpha1UserApiSendRegisterVerifyEmailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1UserApi
   */
  public sendRegisterVerifyEmail(
    requestParameters: ApiHaloRunV1alpha1UserApiSendRegisterVerifyEmailRequest,
    options?: AxiosRequestConfig
  ) {
    return ApiHaloRunV1alpha1UserApiFp(this.configuration)
      .sendRegisterVerifyEmail(
        requestParameters.registerVerifyEmailRequest,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Sign up a new user
   * @param {ApiHaloRunV1alpha1UserApiSignUpRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1UserApi
   */
  public signUp(
    requestParameters: ApiHaloRunV1alpha1UserApiSignUpRequest,
    options?: AxiosRequestConfig
  ) {
    return ApiHaloRunV1alpha1UserApiFp(this.configuration)
      .signUp(requestParameters.signUpRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
