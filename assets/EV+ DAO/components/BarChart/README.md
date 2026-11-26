# BarChart

Scenario or category bars with the value printed above each bar: the EV+ bear / base / bull chart.

- Exactly one bar has `highlight: true` (or `tone: 'signal'`): the case you consider most likely. The others are `signal-tint`.
- Every bar carries its `display` value: tint bars are decorative and must never be read by color alone.
- `tone: 'loss'` for a drawdown or the comparison series. Use `sub` for the assumption and `meta` (mono) for the unit price.
- For long time series (monthly volume), build a full chart with the same tokens; this component is for 2 to 6 bars.
