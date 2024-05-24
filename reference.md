## Saml

<details><summary> <code>ssoReady.saml.<a href="./src/api/resources/saml/client/Client.ts">redeemAccessCode</a>({ ...params }) -> SSOReady.RedeemSamlAccessCodeResponse</code> </summary>

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
await ssoReady.saml.redeemAccessCode({
    samlAccessCode: "saml_access_code_94d90b43a2027a9084bfc792",
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

<details><summary> <code>ssoReady.saml.<a href="./src/api/resources/saml/client/Client.ts">getRedirectUrl</a>({ ...params }) -> SSOReady.GetSamlRedirectUrlResponse</code> </summary>

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
await ssoReady.saml.getRedirectUrl({
    samlConnectionId: "saml_conn_ac3bzzoqhaa88ozk29hhv12l",
    organizationId: "org_7cu5hsy9vrbi5d2k1qvbh19lj",
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
