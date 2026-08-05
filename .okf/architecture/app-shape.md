---
type: Architecture
title: Desktop and browser application shape
description: Reference layout for a shared Clojure/ClojureScript application.
tags: [architecture, clj, cljs, cljc, desktop, browser]
---

# Runtime model

```text
JVM host:      input -> command -> cljc core -> state/events -> render/audio/storage
Browser host:  input -> command -> cljc core -> state/events -> DOM/canvas/audio/storage
```

The core is shared. Hosts are replaceable delivery details.

# Suggested source tree

```text
src/project/
  core.cljc
  domain/*.cljc
  policy/*.cljc
  input.cljc
  world.cljc
  desktop/main.clj
  desktop/input.clj
  desktop/render.clj
  desktop/audio.clj
  desktop/persist.clj
  browser/main.cljs
  browser/input.cljs
  browser/render.cljs
  browser/audio.cljs
  browser/storage.cljs
test/project/
features/
qa/procedures/
qa/scripts/
```

# Public core facade

Prefer a small stable facade such as:

```clojure
(new-state options)
(handle state command)
(tick state elapsed-seconds)
(resize state width height)
```

The exact API is project-specific. The facade should return values and events,
not perform host effects. Testing-only staging helpers belong in a clearly
named testing namespace and must not leak into the host contract.

# Desktop host

The desktop host owns process arguments, window creation, the frame loop, input
mapping, drawing, audio, and local persistence. It may use Quil or another
library, but no drawing callback should become a second rules engine.

# Browser host

The browser host owns bundling, DOM/canvas setup, browser event conversion,
browser storage, and rendering. Keep CLJS interop in host namespaces. Avoid
making core functions conditional on browser globals when a value or event can
be passed explicitly.

# Resize and coordinate policy

Define whether the application uses full native resolution or a logical
coordinate space before implementing host rendering. Put layout calculations in
pure code and test multiple aspect ratios. Hosts should call the same resize
policy rather than applying undocumented scaling.
