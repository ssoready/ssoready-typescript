/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SSOReady from "../../api/index";
import * as core from "../../core";
import { Organization } from "./Organization";

export const UpdateOrganizationResponse: core.serialization.ObjectSchema<
    serializers.UpdateOrganizationResponse.Raw,
    SSOReady.UpdateOrganizationResponse
> = core.serialization.object({
    organization: Organization.optional(),
});

export declare namespace UpdateOrganizationResponse {
    interface Raw {
        organization?: Organization.Raw | null;
    }
}