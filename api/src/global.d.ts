export interface Env {
  [prop: string]: unknown;

  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Durable Objects. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  INFO: DurableObjectNamespace;
  PARTNERSHIPS: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
  //
  // Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
  // MY_SERVICE: Fetcher;
  //
  // Secret variables
  INDEXER_SECRET: string;
  FACTORY_PRIVATE_KEY: string;
  //
  // Environment variables
  NEAR_RPC_URL: string;
  FACTORY_ACCOUNT_ID: string;
}
