/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         organizationExternalId: "my_custom_external_id"
 *     }
 */
export interface ScimListScimUsersRequest {
    scimDirectoryId?: string;
    organizationId?: string;
    organizationExternalId?: string;
    scimGroupId?: string;
    pageToken?: string;
}