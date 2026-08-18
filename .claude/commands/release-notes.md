Generate customer-facing release notes for the app named in the arguments. Base the notes on the repository's git commit history, but describe each change as the app's users experience it, not as a code or documentation change. Export the content as a single MDX file called release-notes.mdx to the directory named in the arguments.

Ensure that the following YAML front matter is included at the top of the MDX document:

```yaml
---
title: Release Notes
---
```

## Output Format

Open with one sentence stating what the page covers. Then add one `##` section per release, newest first. Name each section with the version number and release date. Use git tags for version numbers when they exist; otherwise group commits by date and number the releases sequentially. Within each release, group items under these subheadings, omitting any subheading with no items:

### What's New
[Features users can try for the first time]

### Improvements
[Existing features that work better]

### Fixed
[Problems users no longer encounter]

## Guidelines

- Address readers directly and lead with what they can now do, not with what was changed
- Translate every commit into the difference a user would notice; omit commits with no user-visible effect
- Use plain language; avoid engineering jargon
- No em-dashes
- Each item should be one sentence
- If several commits revise the same feature, describe only the final result
- For a first release, open with a short welcome line before the feature list

## App and Destination

$ARGUMENTS
