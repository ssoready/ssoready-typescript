/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SSOReady from "../../api/index";
import * as core from "../../core";
import { ScimDirectory } from "./ScimDirectory";

export const GetScimDirectoryResponse: core.serialization.ObjectSchema<
    serializers.GetScimDirectoryResponse.Raw,
    SSOReady.GetScimDirectoryResponse
> = core.serialization.object({
    scimDirectory: ScimDirectory.optional(),
});

export declare namespace GetScimDirectoryResponse {
    interface Raw {
        scimDirectory?: ScimDirectory.Raw | null;
    }
}