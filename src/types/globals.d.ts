declare namespace NodeJS {
  interface ProcessEnv {
    AWS_REGION: string;
    AWS_SES_REGION: string;
    JWT_SECRET: string;
    S3_BUCKET: string;
    NODE_ENV: 'development' | 'production' | 'test';
    TYPEORM_URL: string;
    GRAPHQL_SCHEMA_PATH: string;
  }
}
