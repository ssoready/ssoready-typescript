/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Organizations } from "../resources/organizations/client/Client";
import { SamlConnections } from "../resources/samlConnections/client/Client";
import { ScimDirectories } from "../resources/scimDirectories/client/Client";
import { SetupUrls } from "../resources/setupUrls/client/Client";

export declare namespace Management {
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

export class Management {
    constructor(protected readonly _options: Management.Options = {}) {}

    protected _organizations: Organizations | undefined;

    public get organizations(): Organizations {
        return (this._organizations ??= new Organizations(this._options));
    }

    protected _samlConnections: SamlConnections | undefined;

    public get samlConnections(): SamlConnections {
        return (this._samlConnections ??= new SamlConnections(this._options));
    }

    protected _scimDirectories: ScimDirectories | undefined;

    public get scimDirectories(): ScimDirectories {
        return (this._scimDirectories ??= new ScimDirectories(this._options));
    }

    protected _setupUrls: SetupUrls | undefined;

    public get setupUrls(): SetupUrls {
        return (this._setupUrls ??= new SetupUrls(this._options));
    }
}
