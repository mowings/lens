/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import type { Dirent } from "fs";
import fsInjectable from "./fs.injectable";

export interface ReadDirectory {
  (
    path: string,
    options: "buffer" | { encoding: "buffer"; withFileTypes?: false | undefined }
  ): Promise<Buffer[]>;
  (
    path: string,
    options?:
      | { encoding: BufferEncoding | string | null; withFileTypes?: false | undefined }
      | BufferEncoding
      | string
      | null,
  ): Promise<string[]>;
  (
    path: string,
    options?: { encoding?: BufferEncoding | string | null | undefined; withFileTypes?: false | undefined },
  ): Promise<string[] | Buffer[]>;
  (
    path: string,
    options: { encoding?: BufferEncoding | string | null | undefined; withFileTypes: true },
  ): Promise<Dirent[]>;
}

const readDirectoryInjectable = getInjectable({
  id: "read-directory",
  instantiate: (di): ReadDirectory => di.inject(fsInjectable).readdir,
});

export default readDirectoryInjectable;
