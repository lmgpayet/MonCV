# Vidéo motion design — Laurence Payet

Vidéo d'intro motion design, ultra pop et dynamique, générée avec [Remotion](https://www.remotion.dev), reprenant l'identité visuelle du CV (`index.html`) : palette burnt orange / buttercup / frost blue, typo Outfit + Space Mono.

Format vertical 1080×1920, 30 fps, ~22s. Découpée en 7 scènes enchaînées par des transitions (wipe / slide / fade) : intro kinétique, chiffre choc "7 ans", stats en grille, expérience avec ticker de marques, 3 piliers de compétences, nuage d'outils, et un outro avec CTA de contact.

## Commandes

**Installer les dépendances**

```console
npm i
```

**Prévisualiser (Remotion Studio)**

```console
npm run dev
```

**Rendre la vidéo**

```console
npx remotion render LaurencePayet-Intro out/laurence-payet-intro.mp4
```

## Structure

- `src/Composition.tsx` — assemble les 7 scènes via `TransitionSeries`
- `src/scenes/` — une scène par fichier (`Scene1Intro.tsx` → `Scene7Outro.tsx`)
- `src/components/` — primitives d'animation réutilisables (`PopIn`, `SlideIn`, `KineticText`, `Marquee`, `Pill`, `Confetti`)
- `src/colors.ts`, `src/fonts.ts` — design tokens partagés avec le CV
- Polices auto-hébergées via `@fontsource` (aucun appel réseau nécessaire au rendu)

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).
