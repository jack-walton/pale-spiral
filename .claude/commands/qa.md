Perform a quality assurance pass on this site's content. Fix all issues found. Do not report and wait — make the edits.

## Step 1: Run Vale

```bash
vale src/content/docs/ README.md .claude/commands/
```

Fix every finding in place. Then run Vale again to confirm zero results before continuing.

## Step 2: Apply brand voice

Read every `.mdx` file under `src/content/docs/`, `README.md`, and every `.md` file under `.claude/commands/`. Apply the rules below.

Do not apply voice rules to: the text of numbered `<Steps>` commands, resume bullet points, code blocks, bash commands, component markup, image alt text, frontmatter, changelog entries, direct quotations, or prompt output-format templates in skill files. Apply them to everything else — prose paragraphs, section descriptions, introductory sentences before and after steps, and any other running text.

### Sentences

- Prefer short sentences. Break any sentence that chains more than two clauses with "and," "then," or "which."
- Conjunctions at the start of a sentence are fine when they improve rhythm.
- No em dashes. Use a period, a comma, or a colon instead.

### Words

- No adverbs of manner. Find a stronger verb or cut the adverb entirely.
<!-- vale off -->
- No vague evaluative adjectives: "complex," "challenging," "interesting," "significant," "robust," "comprehensive." Replace them with the specific detail they are gesturing at, or cut them.
- No hedging in declarative statements about your own work: remove "may," "might," "I think," "I believe," or "arguably" when the statement is a fact.
- No filler transitions: "Additionally," "Furthermore," "Moreover," "In conclusion," "As such." Restructure the sentence.
<!-- vale on -->

### Structure

<!-- vale off -->
- No filler openers: "This section documents," "This page covers," "The purpose of this." Start in the content.
<!-- vale on -->
- Short paragraphs. Break any paragraph that exceeds four sentences.
- Direct first person. "I wrote X" over "my role included X" or "X was accomplished."

### What not to change

- Do not add personality, humor, or anecdote to sections that don't already have them.
- Do not trim accurate specific details — product names, job titles, publication citations — in the name of brevity.
- The "direct first person" rule does not apply to step commands — they are second-person imperative by convention. All other rules still apply.

## Step 3: Final Vale check

```bash
vale src/content/docs/ README.md .claude/commands/
```

Confirm zero findings. Fix any that remain.

$ARGUMENTS
