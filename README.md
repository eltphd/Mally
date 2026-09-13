# Mally
Measurement Ally Web

## Brand

Illuminated Field Journal, the ecosystem chassis, on the Measurement Ally pair
(ivory ground `#F6F1E7`, dusk signal `#3D5A6C`). `app/tokens.css` is a
byte-identical copy of the canonical file in `eltphd/atlas-academy` at
`brand/tokens.css`; do not edit it here. `app/globals.css` aliases the legacy
variable names the component modules use (`--navy`, `--gold`, `--cream`, and so
on) onto the chassis, and dark bands re-point `--gold` to a dusk tint so accent
text holds contrast on ink. Newsreader, Archivo, and IBM Plex Mono are
self-hosted through `next/font`. No green/amber/red status colors: the Work
page chips use the signal at two strengths and the label carries the meaning.
