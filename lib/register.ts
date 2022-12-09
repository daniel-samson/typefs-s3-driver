import { DiskConfiguration, S3Disk } from 'typefs-registry';
import { S3Driver } from './drivers';

/**
 * Makes a S3Driver from configuration
 *
 * Example:
 *
 * ```typescript
 * import {S3Factory} from 'typefs-s3-driver';
 * Storage.registerDriver('s3', S3Factory);
 * ```
 */
export function S3Factory(configuration: DiskConfiguration): S3Driver {
  return new S3Driver(configuration as S3Disk);
}
