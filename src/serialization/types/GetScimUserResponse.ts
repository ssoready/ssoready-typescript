/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SSOReady from "../../api/index";
import * as core from "../../core";
import { ScimUser } from "./ScimUser";

export const GetScimUserResponse: core.serialization.ObjectSchema<
    serializers.GetScimUserResponse.Raw,
    SSOReady.GetScimUserResponse
> = core.serialization.object({
    scimUser: ScimUser.optional(),
});

export declare namespace GetScimUserResponse {
    interface Raw {
        scimUser?: ScimUser.Raw | null;
    }
}