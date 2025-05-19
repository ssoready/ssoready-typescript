## Saml

<details><summary> <code>ssoReady.saml.<a href="./src/api/resources/saml/client/Client.ts">redeemSamlAccessCode</a>({ ...params }) -> SSOReady.RedeemSamlAccessCodeResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Exchanges a SAML access code for details about your user's SAML login details.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.saml.redeemSamlAccessCode({
    samlAccessCode: "saml_access_code_...",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.RedeemSamlAccessCodeRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Saml.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.saml.<a href="./src/api/resources/saml/client/Client.ts">getSamlRedirectUrl</a>({ ...params }) -> SSOReady.GetSamlRedirectUrlResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a SAML initiation URL to redirect your users to.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.saml.getSamlRedirectUrl({
    organizationExternalId: "my_custom_external_id",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.GetSamlRedirectUrlRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Saml.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Scim

<details><summary> <code>ssoReady.scim.<a href="./src/api/resources/scim/client/Client.ts">listScimGroups</a>({ ...params }) -> SSOReady.ListScimGroupsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a list of SCIM groups in a SCIM directory.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.scim.listScimGroups({
    organizationExternalId: "my_custom_external_id",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.ScimListScimGroupsRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Scim.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.scim.<a href="./src/api/resources/scim/client/Client.ts">getScimGroup</a>(id) -> SSOReady.GetScimGroupResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a SCIM group in a SCIM directory.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.scim.getScimGroup("scim_group_...");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — ID of the SCIM group to get.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Scim.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.scim.<a href="./src/api/resources/scim/client/Client.ts">listScimUsers</a>({ ...params }) -> SSOReady.ListScimUsersResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a list of SCIM users in a SCIM directory.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.scim.listScimUsers({
    organizationExternalId: "my_custom_external_id",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.ScimListScimUsersRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Scim.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.scim.<a href="./src/api/resources/scim/client/Client.ts">getScimUser</a>(id) -> SSOReady.GetScimUserResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a SCIM user.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.scim.getScimUser("scim_user_...");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — ID of the SCIM user to get.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Scim.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Management Organizations

<details><summary> <code>ssoReady.management.organizations.<a href="./src/api/resources/management/resources/organizations/client/Client.ts">listOrganizations</a>({ ...params }) -> SSOReady.ListOrganizationsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a list of organizations.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.organizations.listOrganizations();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.management.OrganizationsListOrganizationsRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Organizations.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.organizations.<a href="./src/api/resources/management/resources/organizations/client/Client.ts">createOrganization</a>({ ...params }) -> SSOReady.CreateOrganizationResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates an organization.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.organizations.createOrganization({});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.Organization`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Organizations.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.organizations.<a href="./src/api/resources/management/resources/organizations/client/Client.ts">getOrganization</a>(id) -> SSOReady.GetOrganizationResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets an organization.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.organizations.getOrganization("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — ID of the organization to get.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Organizations.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.organizations.<a href="./src/api/resources/management/resources/organizations/client/Client.ts">updateOrganization</a>(id, { ...params }) -> SSOReady.UpdateOrganizationResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Updates an organization.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.organizations.updateOrganization("id", {});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — ID of the organization to update.

</dd>

</dl>

<dl>

<dd>

**request: `SSOReady.Organization`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Organizations.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Management SamlConnections

<details><summary> <code>ssoReady.management.samlConnections.<a href="./src/api/resources/management/resources/samlConnections/client/Client.ts">listSamlConnections</a>({ ...params }) -> SSOReady.ListSamlConnectionsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Lists SAML connections in an organization.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.samlConnections.listSamlConnections();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.management.SamlConnectionsListSamlConnectionsRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `SamlConnections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.samlConnections.<a href="./src/api/resources/management/resources/samlConnections/client/Client.ts">createSamlConnection</a>({ ...params }) -> SSOReady.CreateSamlConnectionResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates a SAML connection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.samlConnections.createSamlConnection({});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.SamlConnection`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `SamlConnections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.samlConnections.<a href="./src/api/resources/management/resources/samlConnections/client/Client.ts">getSamlConnection</a>(id) -> SSOReady.GetSamlConnectionResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a SAML connection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.samlConnections.getSamlConnection("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — ID of the SAML connection to get.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `SamlConnections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.samlConnections.<a href="./src/api/resources/management/resources/samlConnections/client/Client.ts">updateSamlConnection</a>(id, { ...params }) -> SSOReady.UpdateSamlConnectionResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Updates a SAML connection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.samlConnections.updateSamlConnection("id", {});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — The ID of the SAML connection to update.

</dd>

</dl>

<dl>

<dd>

**request: `SSOReady.SamlConnection`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `SamlConnections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Management ScimDirectories

<details><summary> <code>ssoReady.management.scimDirectories.<a href="./src/api/resources/management/resources/scimDirectories/client/Client.ts">listScimDirectories</a>({ ...params }) -> SSOReady.ListScimDirectoriesResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a list of SCIM directories in an organization.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.scimDirectories.listScimDirectories();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.management.ScimDirectoriesListScimDirectoriesRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `ScimDirectories.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.scimDirectories.<a href="./src/api/resources/management/resources/scimDirectories/client/Client.ts">createScimDirectory</a>({ ...params }) -> SSOReady.CreateScimDirectoryResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates a SCIM directory.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.scimDirectories.createScimDirectory({});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.ScimDirectory`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `ScimDirectories.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.scimDirectories.<a href="./src/api/resources/management/resources/scimDirectories/client/Client.ts">getScimDirectory</a>(id) -> SSOReady.GetScimDirectoryResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Gets a SCIM directory.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.scimDirectories.getScimDirectory("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — The ID of the SCIM directory.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `ScimDirectories.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.scimDirectories.<a href="./src/api/resources/management/resources/scimDirectories/client/Client.ts">updateScimDirectory</a>(id, { ...params }) -> SSOReady.UpdateScimDirectoryResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Updates a SCIM directory.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.scimDirectories.updateScimDirectory("id", {});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — The ID of the SCIM directory to update.

</dd>

</dl>

<dl>

<dd>

**request: `SSOReady.ScimDirectory`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `ScimDirectories.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>ssoReady.management.scimDirectories.<a href="./src/api/resources/management/resources/scimDirectories/client/Client.ts">rotateScimDirectoryBearerToken</a>(id) -> SSOReady.RotateScimDirectoryBearerTokenResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Rotates a SCIM directory's bearer token.

Every SCIM directory has a bearer token that SSOReady uses to authenticate requests sent from your customer's
Identity Provider. These bearer tokens are assigned by SSOReady, and are secret. Newly-created SCIM directories do
not have any bearer token at all; you must use this endpoint to get an initial value.

Rotating a SCIM directory bearer token immediately invalidates the previous bearer token, if any. Your customer
will need to update their SCIM configuration with the new value to make SCIM syncing work again.

SSOReady only stores the hash of these bearer tokens. If your customer has lost their copy, you must use this
endpoint to generate a new one.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.scimDirectories.rotateScimDirectoryBearerToken("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`** — The ID of the SCIM directory whose bearer token to rotate.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `ScimDirectories.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Management SetupUrls

<details><summary> <code>ssoReady.management.setupUrls.<a href="./src/api/resources/management/resources/setupUrls/client/Client.ts">createSetupUrl</a>({ ...params }) -> SSOReady.CreateSetupUrlResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates a short-lived self-serve setup URL that you can send to your customer.

Setup URLs let your customer configure their SAML settings, SCIM settings, or both.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await ssoReady.management.setupUrls.createSetupUrl();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `SSOReady.management.CreateSetupUrlRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `SetupUrls.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
