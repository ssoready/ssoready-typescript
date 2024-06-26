/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SSOReady from "../../api/index";
import * as core from "../../core";

export const GoogleProtobufAny: core.serialization.ObjectSchema<
    serializers.GoogleProtobufAny.Raw,
    SSOReady.GoogleProtobufAny
> = core.serialization.object({
    type: core.serialization.property("@type", core.serialization.string().optional()),
});

export declare namespace GoogleProtobufAny {
    interface Raw {
        "@type"?: string | null;
    }
}
