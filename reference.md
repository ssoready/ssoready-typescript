## Saml

<details><summary> <code>ssoReady.saml.<a href="./src/api/resources/saml/client/Client.ts">redeemSamlAccessCode</a>({ ...params }) -> SSOReady.RedeemSamlAccessCodeResponse</code> </summary>

<dl>

<dd>

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

**id: `string`**

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

**id: `string`**

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
