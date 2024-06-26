/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SSOReady from "../../api/index";
import * as core from "../../core";

export const GetSamlRedirectUrlResponse: core.serialization.ObjectSchema<
    serializers.GetSamlRedirectUrlResponse.Raw,
    SSOReady.GetSamlRedirectUrlResponse
> = core.serialization.object({
    redirectUrl: core.serialization.string().optional(),
});

export declare namespace GetSamlRedirectUrlResponse {
    interface Raw {
        redirectUrl?: string | null;
    }
}
