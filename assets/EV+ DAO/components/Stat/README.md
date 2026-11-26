# Stat

A big number with a short label and a qualifier, shown in rows of two to four.

- `value` in `stat` size; at most one Stat per row uses `tone: 'signal'` (the outcome the reader cares about).
- `label` says what the number is, `note` says how it was measured.
- Use `tone: 'loss'` only for a negative outcome (drawdown, loss).
