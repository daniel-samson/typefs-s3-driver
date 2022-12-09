import { expect } from 'chai';
import { S3Factory } from '..';

describe('S3Driver factory', () => {
  it('makes S3Driver from factory', () => {
    const configuration = {
      driver: 's3',
      root: '/',
      jail: true,
      bucket: process.env.S3_BUCKET || 'my-s3-bucket',
      endPoint: process.env.S3_ENDPOINT || 's3.amazonaws.com',
      accessKey: process.env.S3_ACCESS_KEY || 'minio-access-key',
      secretKey: process.env.S3_SECRET_KEY || 'minio-secret-key',
    };

    const actual = () => S3Factory(configuration);
    expect(actual).not.throw();
  });
});
