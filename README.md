# grammark

`grammark` explores developer tools with a small JavaScript codebase and local fixtures. The technical goal is to validate EBNF fragments and compute FIRST-set diagnostics.

## Reason For The Project

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Grammark Review Notes

Start with `review cost` and `change width`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## What It Does

- `fixtures/domain_review.csv` adds cases for change width and diagnostic quality.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/grammark-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `review cost` and `change width`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## How It Is Put Together

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The JavaScript code keeps the review rule close to the tests.

## Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Check It

The check exercises the source code and the review fixture. `edge` is the high score at 183; `baseline` is the low score at 138.

## Boundaries

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
