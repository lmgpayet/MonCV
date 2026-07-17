// One-shot sound effects, timed to match the pop-in / slide-in beats of
// each scene. `frame` is the global frame in the final composed timeline
// (scene offset + the scene's local animation delay).
export type SfxCue = {
  frame: number;
  src: "pop" | "pop-low" | "whoosh" | "impact";
  volume: number;
};

const SCENE_OFFSET = {
  intro: 0,
  hook: 60,
  stats: 135,
  experience: 240,
  skills: 345,
  tools: 450,
  outro: 535,
};

export const sfxCues: SfxCue[] = [
  // Scene 1 — Intro
  { frame: SCENE_OFFSET.intro + 2, src: "pop-low", volume: 0.35 },
  { frame: SCENE_OFFSET.intro + 8, src: "pop", volume: 0.5 },
  { frame: SCENE_OFFSET.intro + 26, src: "pop-low", volume: 0.3 },
  { frame: 55, src: "whoosh", volume: 0.4 },

  // Scene 2 — Hook ("7 ans")
  { frame: SCENE_OFFSET.hook + 40, src: "pop-low", volume: 0.25 },
  { frame: 130, src: "whoosh", volume: 0.4 },

  // Scene 3 — Stats
  { frame: SCENE_OFFSET.stats + 14, src: "pop", volume: 0.45 },
  { frame: SCENE_OFFSET.stats + 24, src: "pop-low", volume: 0.4 },
  { frame: SCENE_OFFSET.stats + 34, src: "pop", volume: 0.45 },
  { frame: SCENE_OFFSET.stats + 44, src: "pop-low", volume: 0.4 },
  { frame: 235, src: "whoosh", volume: 0.4 },

  // Scene 4 — Experience
  { frame: SCENE_OFFSET.experience + 8, src: "pop", volume: 0.4 },
  { frame: SCENE_OFFSET.experience + 16, src: "pop-low", volume: 0.35 },
  { frame: 340, src: "whoosh", volume: 0.4 },

  // Scene 5 — Skills
  { frame: SCENE_OFFSET.skills + 10, src: "pop", volume: 0.4 },
  { frame: SCENE_OFFSET.skills + 26, src: "pop-low", volume: 0.38 },
  { frame: SCENE_OFFSET.skills + 42, src: "pop", volume: 0.4 },
  { frame: 445, src: "whoosh", volume: 0.4 },

  // Scene 6 — Tools (bubbly cluster of pops, alternating pitch)
  { frame: SCENE_OFFSET.tools + 4, src: "pop", volume: 0.3 },
  { frame: SCENE_OFFSET.tools + 10, src: "pop-low", volume: 0.28 },
  { frame: SCENE_OFFSET.tools + 16, src: "pop", volume: 0.3 },
  { frame: SCENE_OFFSET.tools + 22, src: "pop-low", volume: 0.28 },
  { frame: SCENE_OFFSET.tools + 28, src: "pop", volume: 0.3 },
  { frame: SCENE_OFFSET.tools + 34, src: "pop-low", volume: 0.28 },
  { frame: SCENE_OFFSET.tools + 40, src: "pop", volume: 0.3 },
  { frame: SCENE_OFFSET.tools + 46, src: "pop-low", volume: 0.28 },
  { frame: SCENE_OFFSET.tools + 52, src: "pop", volume: 0.3 },
  { frame: SCENE_OFFSET.tools + 58, src: "pop-low", volume: 0.28 },
  { frame: 530, src: "whoosh", volume: 0.45 },

  // Scene 7 — Outro
  { frame: SCENE_OFFSET.outro + 16, src: "pop", volume: 0.5 },
  { frame: SCENE_OFFSET.outro + 28, src: "pop-low", volume: 0.4 },
];
