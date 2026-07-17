import { Audio, Composition, Sequence, staticFile } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { fade } from "@remotion/transitions/fade";

import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2Hook } from "./scenes/Scene2Hook";
import { Scene3Stats } from "./scenes/Scene3Stats";
import { Scene4Experience } from "./scenes/Scene4Experience";
import { Scene5Skills } from "./scenes/Scene5Skills";
import { Scene6Tools } from "./scenes/Scene6Tools";
import { Scene7Outro } from "./scenes/Scene7Outro";
import { sfxCues } from "./audioCues";

const SFX_FILES = {
  pop: "audio/pop.wav",
  "pop-low": "audio/pop-low.wav",
  whoosh: "audio/whoosh.wav",
  impact: "audio/impact.wav",
};

const TRANSITION_DURATION = 15;
const timing = () =>
  springTiming({
    config: { damping: 200, mass: 0.5, stiffness: 150 },
    durationInFrames: TRANSITION_DURATION,
  });

const SCENE_DURATIONS = [75, 90, 120, 120, 120, 100, 130];
const NUM_TRANSITIONS = SCENE_DURATIONS.length - 1;
const TOTAL_DURATION =
  SCENE_DURATIONS.reduce((a, b) => a + b, 0) -
  NUM_TRANSITIONS * TRANSITION_DURATION;

const Scenes: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS[0]}>
        <Scene1Intro />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-right" })}
        timing={timing()}
      />

      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS[1]}>
        <Scene2Hook />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={timing()}
      />

      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS[2]}>
        <Scene3Stats />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-left" })}
        timing={timing()}
      />

      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS[3]}>
        <Scene4Experience />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({ direction: "from-top" })}
        timing={timing()}
      />

      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS[4]}>
        <Scene5Skills />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom-right" })}
        timing={timing()}
      />

      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS[5]}>
        <Scene6Tools />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={springTiming({
          config: { damping: 200 },
          durationInFrames: TRANSITION_DURATION,
        })}
      />

      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS[6]}>
        <Scene7Outro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export const CvIntroVideo: React.FC = () => {
  return (
    <>
      <Scenes />

      <Audio src={staticFile("audio/background-beat.wav")} volume={() => 0.55} />

      {sfxCues.map((cue, i) => (
        <Sequence key={i} from={cue.frame} durationInFrames={20} layout="none">
          <Audio
            src={staticFile(SFX_FILES[cue.src])}
            volume={() => cue.volume}
          />
        </Sequence>
      ))}
    </>
  );
};

export const CvIntroComposition = () => {
  return (
    <Composition
      id="LaurencePayet-Intro"
      component={CvIntroVideo}
      durationInFrames={TOTAL_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
