/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SSOReady from "../../api/index";
import * as core from "../../core";

export const ScimUser: core.serialization.ObjectSchema<serializers.ScimUser.Raw, SSOReady.ScimUser> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        scimDirectoryId: core.serialization.string().optional(),
        email: core.serialization.string().optional(),
        deleted: core.serialization.boolean().optional(),
        attributes: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace ScimUser {
    interface Raw {
        id?: string | null;
        scimDirectoryId?: string | null;
        email?: string | null;
        deleted?: boolean | null;
        attributes?: Record<string, unknown> | null;
    }
}
