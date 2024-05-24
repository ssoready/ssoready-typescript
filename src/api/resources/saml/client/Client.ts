/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SSOReady from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Saml {
    interface Options {
        environment?: core.Supplier<environments.SSOReadyEnvironment | string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Saml {
    constructor(protected readonly _options: Saml.Options = {}) {}

    /**
     * Exchange a SAML access code for details about a SAML login.
     *
     * @param {SSOReady.RedeemSamlAccessCodeRequest} request
     * @param {Saml.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await ssoReady.saml.redeemAccessCode({
     *         samlAccessCode: "saml_access_code_94d90b43a2027a9084bfc792"
     *     })
     */
    public async redeemAccessCode(
        request: SSOReady.RedeemSamlAccessCodeRequest = {},
        requestOptions?: Saml.RequestOptions
    ): Promise<SSOReady.RedeemSamlAccessCodeResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SSOReadyEnvironment.Default,
                "v1/saml/redeem"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.RedeemSamlAccessCodeRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.RedeemSamlAccessCodeResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SSOReadyError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SSOReadyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SSOReadyTimeoutError();
            case "unknown":
                throw new errors.SSOReadyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a URL to initiate a SAML login.
     *
     * @param {SSOReady.GetSamlRedirectUrlRequest} request
     * @param {Saml.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await ssoReady.saml.getRedirectUrl({
     *         samlConnectionId: "saml_conn_ac3bzzoqhaa88ozk29hhv12l",
     *         organizationId: "org_7cu5hsy9vrbi5d2k1qvbh19lj"
     *     })
     */
    public async getRedirectUrl(
        request: SSOReady.GetSamlRedirectUrlRequest = {},
        requestOptions?: Saml.RequestOptions
    ): Promise<SSOReady.GetSamlRedirectUrlResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SSOReadyEnvironment.Default,
                "v1/saml/redirect"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.GetSamlRedirectUrlRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.GetSamlRedirectUrlResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SSOReadyError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SSOReadyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SSOReadyTimeoutError();
            case "unknown":
                throw new errors.SSOReadyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["SSOREADY_API_KEY"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
