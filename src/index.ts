/**
 * @amlplugins/mistral-files
 *
 * Thin namespaced re-export of the native @mistralai/mistralai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Mistral Files — upload, retrieve, delete files used by Fine-tuning, Batch, and Agents libraries.
 */

import * as _sdk from "@mistralai/mistralai";
export * from "@mistralai/mistralai";
export { _sdk as sdk };
export default _sdk;
