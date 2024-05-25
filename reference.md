## Saml

<details><summary> <code>ssoReady.saml.<a href="./src/api/resources/saml/client/Client.ts">redeemSamlAccessCode</a>({ ...params }) -> SSOReady.RedeemSamlAccessCodeResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Exchange a SAML access code for details about a SAML login.

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

Get a URL to initiate a SAML login.

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
