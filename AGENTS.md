<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Hammet Marketing Domain — Agent Instructions

## 1. Purpose

These instructions govern frontend work within Hammet's marketing domain.

The marketing domain represents Hammet to prospective learners, schools, partners, and other visitors. Its responsibility is to communicate the product, explain its value, and guide visitors towards relevant actions.

The marketing experience must remain consistent with Hammet's brand identity and design system.

## 2. Brand Identity

Use the existing Hammet brand palette.

| Token | Hex | Intended Use |
|---|---|---|
| Purple Dark | `#3B0764` | Strong brand surfaces, dark headers |
| Purple | `#5B21B6` | Primary buttons, active states |
| Purple Mid | `#6D28D9` | Hover states and emphasis |
| Purple Light | `#EDE9FE` | Soft backgrounds, badges |
| Cyan | `#06B6D4` | Action accents, highlights |
| Cyan Dark | `#0E7490` | Cyan text on light backgrounds |

These are the established brand colors. Do not invent replacement colors or introduce a competing palette.

### Color Usage

- Use purple as the primary brand color.
- Use cyan as a supporting accent for important actions and highlights.
- Use light purple for subtle backgrounds and supporting visual elements.
- Use appropriate foreground colors to maintain readable contrast.
- Use existing semantic design tokens for success, warning, danger, borders, and other interface states.
- Do not use cyan for every button or highlight. Preserve a clear visual hierarchy.
- Do not use the brand palette as a reason to color every section of a page.

Use the existing CSS variables or Tailwind theme tokens when available. Inspect the implementation before introducing new tokens.

Do not hardcode hex values repeatedly when the project already provides a token for that color.

## 3. UI/UX and Interaction Design Principles

All frontend pages, components, animations, and interactive flows must follow these principles.

### 3.1 Usability and Cognitive Design

**Hick's Law**

Reduce unnecessary decision complexity by:

- Presenting the most relevant choices first.
- Grouping related options.
- Avoiding unnecessary simultaneous choices.
- Using progressive disclosure when appropriate.
- Providing clear primary actions.
- Removing redundant controls and competing calls to action.
- Keeping workflows focused on the user's immediate objective.

Do not interpret Hick's Law as a requirement to hide necessary functionality or add extra steps. Optimize the user's decision-making process, not merely the number of visible controls.

**Fitts's Law and Bigger Hit Areas**

- Make frequently used interactive elements easy to reach and interact with.
- Provide sufficiently large clickable and touch targets.
- Ensure spacing between interactive elements prevents accidental activation.
- Do not make important actions difficult to locate or operate.
- The visible size of an icon does not have to equal its interactive hit area.

**Miller's Law**

- Organize information into meaningful, manageable groups.
- Break complex information into sections with clear labels.
- Avoid overwhelming users with long, unstructured lists.
- Use visual grouping and hierarchy to make information easier to process.
- Do not force arbitrary limits on content or assume every user has the same memory capacity.

**Doherty Threshold**

- Keep interactions responsive and provide timely feedback.
- Avoid unnecessary delays between user actions and visible results.
- Use loading indicators, skeleton states, or progress feedback when an operation takes time.
- Optimize perceived performance as well as actual performance.

**Jakob's Law**

- Follow familiar interaction patterns and conventions where appropriate.
- Users should not have to relearn common navigation, forms, buttons, and other interface behaviors.
- Avoid unconventional interactions unless they provide a clear usability benefit.

**Postel's Law**

- Be forgiving of reasonable variations in user input.
- Validate and normalize input where appropriate.
- Provide clear, actionable feedback when input cannot be accepted.
- Do not silently accept invalid or unsafe data.
- Be predictable and consistent in the output and behavior of components.

**Frequency of Use**

- Prioritize frequently used features and actions in the interface.
- Make common tasks easy to discover and access.
- Less frequently used functionality can be placed in secondary navigation or progressive disclosure.
- Do not make essential but infrequently used functionality inaccessible.
- Use actual usage patterns where available rather than assumptions about user behavior.

### 3.2 Animation and Motion Principles

Animations must communicate meaning, guide attention, provide feedback, and improve the perceived quality of the interface. Motion should never exist merely for decoration.

**Squash and Stretch**

- Use subtle changes in scale to communicate weight, impact, flexibility, or interaction.
- Preserve the perceived volume and identity of the element.
- Avoid excessive distortion that makes interface elements feel unstable.

**Anticipation and Wind-up**

- Use subtle preparatory motion before significant transitions or actions.
- Help users understand that an interaction is about to happen.
- Keep anticipation short and purposeful.
- Never delay critical actions unnecessarily.

**Staging the Focus**

- Use motion, contrast, positioning, and visual hierarchy to direct attention toward the most important element.
- Ensure that only the relevant elements compete for attention.
- Avoid simultaneous animations that distract from the primary action.

**Pose to Pose**

- Define clear starting and ending states for animations.
- Use intentional intermediate states to maintain consistency and predictable transitions.
- Prefer controlled, repeatable animations over arbitrary motion.

**Follow Through**

- Allow elements to settle naturally after a transition or interaction.
- Use subtle continuation or settling motion where appropriate.
- Avoid abrupt stops when a smoother transition improves clarity.

**Slow In and Slow Out**

- Use appropriate easing to make motion feel natural.
- Avoid unnecessarily linear or mechanical transitions where easing would improve the experience.
- Keep transitions consistent with the established design system.

**Moving in Arcs**

- Use curved movement paths where they improve the natural feel of transitions.
- Avoid arbitrary movement paths that make interface elements difficult to track.
- Maintain spatial clarity during movement.

**Secondary Action**

- Use supporting motion to reinforce the primary interaction.
- Ensure secondary animations do not compete with or distract from the main action.
- Keep supporting effects subtle.

**Snappy Timing**

- Keep interface animations short and purposeful.
- Avoid unnecessarily slow transitions.
- Prioritize responsiveness over elaborate animation sequences.
- Match animation duration to the significance and complexity of the interaction.

**Exaggerated Feedback**

- Make important interaction feedback noticeable enough to be understood.
- Use appropriate visual changes for success, errors, selection, and other meaningful states.
- Keep exaggeration proportional to the action.
- Avoid excessive bouncing, scaling, flashing, or movement.

**Solid Drawing in 3D**

- Maintain spatial consistency, proportions, depth, and perspective when working with 3D elements.
- Ensure that objects remain visually coherent during movement and transformation.
- Avoid introducing 3D effects that reduce readability or interfere with interaction.

**Overall Appeal**

- Maintain a polished, coherent, and visually engaging interface.
- Ensure that animations, illustrations, and components contribute to the overall visual identity.
- Prioritize clarity and usability over visual spectacle.
- Motion should feel intentional and consistent across the product.

### 3.3 Visual Design and Rendering Principles

Visual styling must remain consistent, intentional, and technically coherent. Use the following principles when creating or modifying frontend interfaces.

**Concentric Radius**

- Maintain consistent relationships between the border radii of nested elements.
- Inner elements should visually align with the curvature of their parent containers.
- Avoid arbitrary radius combinations that make nested cards, panels, and controls look disconnected.
- Reuse established radius tokens wherever available.

**Alpha Borders**

- Use subtle transparency in borders to establish separation without introducing unnecessarily heavy outlines.
- Ensure borders remain visible against their backgrounds in both light and dark themes.
- Use consistent opacity values across related components.
- Avoid relying on alpha borders alone when stronger visual separation is required for accessibility.

**OKLCH Palettes**

- Use OKLCH when defining or extending color palettes where supported.
- Maintain consistent perceptual lightness, chroma, and hue relationships across color variations.
- Ensure sufficient contrast between text, backgrounds, borders, and interactive states.
- Prefer existing brand tokens over introducing unrelated colors.

**OKLCH Gradients**

- Use OKLCH color interpolation for gradients where appropriate.
- Maintain smooth and visually consistent transitions between colors.
- Avoid muddy or unexpected color transitions.
- Ensure gradients support the visual hierarchy rather than competing with content.

**Matched Icon Weights**

- Maintain consistent stroke weights and visual styles across icons used together.
- Prefer icons from the established icon library.
- Avoid mixing filled, outlined, thin, and heavy icon styles without a deliberate design reason.
- Ensure icons remain visually balanced alongside text and other interface elements.

**Masked Edges**

- Use masks, fades, and clipping effects to control how content enters, exits, or visually interacts with container boundaries.
- Apply masked edges only when they improve hierarchy, depth, or visual continuity.
- Preserve content readability and avoid obscuring important information or controls.

**Blurred Icon Swaps**

- Use subtle blur and transition effects when swapping icons or changing icon states.
- Ensure the transition communicates a state change without making the interface feel sluggish.
- Avoid excessive blur or motion that reduces icon clarity.
- Respect reduced-motion preferences.

**Dark Mode Depth**

- Establish visual hierarchy in dark mode through carefully differentiated surface tones, borders, shadows, and elevation.
- Avoid treating dark mode as a simple color inversion of light mode.
- Ensure elevated surfaces remain distinguishable from their backgrounds.
- Preserve readable text and accessible contrast.
- Avoid excessive shadows or glow effects.

**Dynamic Viewport**

- Use dynamic viewport units where appropriate to accommodate changing browser viewport dimensions, particularly on mobile devices.
- Account for mobile browser interface expansion and collapse.
- Avoid layouts that become clipped or unusable when the available viewport changes.
- Preserve scroll behavior and account for safe areas where necessary.

**Multiply Blending**

- Use multiply blending selectively for overlays, image treatments, textures, and decorative effects.
- Ensure blended elements retain sufficient contrast and do not obscure important content.
- Test blending behavior across light and dark backgrounds.
- Avoid using blend modes where they create unpredictable results or reduce accessibility.

### 3.4 Marketing Visual Direction

These guidelines apply specifically to marketing pages, landing pages, promotional sections, and campaign-oriented interfaces. They must not be treated as universal styling requirements for the entire application.

**Purple Gradient**

- Use the established Hammet purple palette for gradient treatments.
- Gradients should reinforce the brand identity rather than introduce unrelated colors.
- Avoid applying gradients indiscriminately to every section or component.

**Gradient Text**

- Use gradient text selectively to emphasize important headlines or short phrases.
- Maintain sufficient contrast and readability.
- Avoid applying gradient treatments to large amounts of body text.

**Glow**

- Use subtle glow effects to highlight important visual elements or create depth.
- Keep glow effects controlled and consistent with the brand palette.
- Avoid excessive neon effects or unnecessary visual noise.

**Glossy Blob**

- Use glossy, organic blob shapes as decorative visual elements where appropriate.
- They should add depth and visual interest without competing with the main content.
- Keep decorative elements subordinate to the message and primary action.

**Pill Above Headlines**

- Use a small pill-shaped label above major headlines where it provides useful context.
- Keep the label concise and relevant.
- Do not add decorative pills to every section.

**Remove Hype Words**

- Use clear, specific, and credible language.
- Avoid generic marketing hype, exaggerated promises, and meaningless superlatives.
- Communicate actual benefits, capabilities, and outcomes.
- Prefer concrete explanations over phrases that sound impressive but provide little information.

**Stop Centering Everything**

- Do not default to centered layouts for every section.
- Use left-aligned content, asymmetric compositions, and varied layouts where they improve readability and visual hierarchy.
- Center content only when it serves a clear design purpose.
- Maintain intentional alignment across related elements.

**One Main Button**

- Give each major marketing section one visually dominant primary action.
- Secondary actions should be visually subordinate.
- Avoid multiple competing primary buttons within the same section.
- Ensure the primary action clearly communicates what happens next.

**Pill Corners**

- Use pill-shaped corners for appropriate buttons, labels, and selected UI elements.
- Maintain consistency with the established design system.
- Do not force pill-shaped corners onto every card, container, or interface element.

**4-Point Grid**

- Use a consistent 4-point spacing scale for marketing layouts and components.
- Prefer spacing values that align with multiples of four.
- Maintain predictable relationships between padding, margins, gaps, and component dimensions.
- Reuse existing spacing tokens where available rather than introducing arbitrary values.

**Ditch Stat Banners**

- Avoid generic statistic banners that display numbers without meaningful context.
- Do not add metrics simply to make a page look more impressive.
- When statistics are genuinely useful, integrate them into the relevant content with clear context and credible sources.

**No Icon Boxes**

- Avoid placing every icon inside a colored square, circle, or decorative container.
- Use standalone icons where they communicate the intended meaning clearly.
- Introduce icon containers only when they serve a functional or meaningful visual purpose.

**No Tiny All Caps**

- Avoid excessively small uppercase labels and headings.
- Use readable typography and appropriate text sizing.
- Reserve uppercase styling for short labels where it improves hierarchy or recognition.
- Maintain legibility across screen sizes.

**One Bright Moment**

- Give each major marketing page or visual composition one prominent visual highlight.
- This may be a strong gradient, distinctive illustration, accent color, glow treatment, or other intentional focal element.
- Let surrounding elements support that focal point rather than competing with it.
- Avoid making every section visually loud.


