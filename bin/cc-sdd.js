#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runCli } from '../tools/cc-sdd/dist/index.js';

const here = fileURLToPath(new URL('.', import.meta.url));
const repoRoot = path.resolve(here, '..');
const templatesRoot = path.join(repoRoot, 'tools', 'cc-sdd');
const argv = process.argv.slice(2);

const exitCode = await runCli(
  argv,
  { platform: process.platform, env: process.env },
  undefined,
  {},
  { templatesRoot },
);

if (Number.isInteger(exitCode)) {
  process.exit(exitCode);
}
