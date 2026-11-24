// Entry for make.fun bounty: u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
// Writes a single weird job title to /output/entry.txt — nothing else.
// The guards below mirror the bounty gate (1-60 chars, single line) so an
// invalid entry fails loudly here instead of failing silently on the server.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Senior Curator of Unread Group Chat Announcements";

if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line with no newline characters.");
}
if (ENTRY.length < 1 || ENTRY.length > 60) {
  throw new Error(`Entry must be 1-60 characters, got ${ENTRY.length}.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
