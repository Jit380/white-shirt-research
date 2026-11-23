# EKO storefront decision

**November 23, 2026.** How much technology does EKO need for a visitor on a phone to understand the shirt concept, choose a demo size and see it in the bag? Keep the VitePress research hub and the existing HTML, CSS and JavaScript storefront. The experiment needs one product, native size controls, an explanation beside them and a bag that resets on refresh.

## What the product pages show

| Original page checked November 23 | Observation | Implication for EKO |
| --- | --- | --- |
| [ASKET white T-shirt](https://www.asket.com/en-us/mens-t-shirt-white) | Its table gives garment dimensions and explains how to measure a shirt laid flat. | A credible size chart would require measurements from EKO's own shirt. |
| [True Classic white crew neck](https://www.trueclassictees.com/products/white-crew-neck-tee) | The seller describes the fit it intends to achieve and also presents membership and discount offers. | Explain what the visitor can try before asking them to take action. |
| [Fresh Clean Tees white crew neck](https://freshcleantees.com/products/white-crew-neck) | Length is a separate choice alongside letter size, with short, regular and tall options. | A letter alone tells a visitor little about fit. |

The broader [competitive analysis](./research/competitive-analysis) compares two possible positions. A first-time buyer seeking fit guidance can try a small information change now. A repeat buyer seeking durability evidence would need wash and wear results from an actual garment. Both audiences are hypotheses. EKO's existing visual identity and story are documented in the [brand specification](https://github.com/Jit380/is117-brand-studio/blob/feature/brand-001-first-branded-storefront/SPEC.md).

## From observation to feature

A visitor who has seen garment charts elsewhere may interpret S/M/L/XL as a fit recommendation. EKO has no measured sample. Put a sentence about that limit **beside the choices** and identify them as demo sizes. On a narrow screen, keep both the meaning and product links reachable so visitors can move directly from the story to trying a size.

## Which tools earn their place?

| Option | Value for this task | Decision and trigger to revisit |
| --- | --- | --- |
| Current static storefront | Native radio buttons and a few lines of browser state already support selecting, adding and clearing. GitHub Pages serves the files. | Keep it. Refreshing clears the bag, which fits a classroom demo. |
| [Vue 3](https://vuejs.org/guide/introduction.html) or [React with JSX](https://react.dev/learn/writing-markup-with-jsx) | Components help when controls and state recur across views. JSX expresses markup within JavaScript and requires transformation in a typical React build. | A rewrite would duplicate a working flow. Revisit if multiple product views need shared behavior. |
| [Next.js](https://nextjs.org/docs) and [Shopify headless commerce](https://shopify.dev/docs/storefronts/headless/overview) | A custom React storefront can use Shopify catalog and cart services. Server-side functions introduce a runtime beyond static Pages. | Compare a Shopify theme with a custom Next.js frontend if a real merchant supplies inventory and needs checkout. Choose custom development only for a demonstrated requirement. |
| [Stripe Checkout](https://docs.stripe.com/payments/checkout) | Hosted checkout could serve a future standalone store taking payments. | EKO places no orders. Payment accounts, card entry and checkout sessions serve no current task. |
| Analytics and privacy | A reviewer can describe exactly where they became confused during a short task. | Use voluntary, anonymous task notes. Before adding tracking, identify the decision it would inform, data collected, retention and applicable consent requirements. |

## How to verify the decision

1. **Engineering check.** At 320, 375, 768 and 1280 CSS pixels, verify both header links, horizontal overflow, size guidance, missing-size feedback and the bag count. Include keyboard focus and reduced motion. [Reflow reference](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) · [EKO implementation and recorded checks](https://github.com/Jit380/is117-brand-studio/issues/3).
2. **Peer check, pending.** Give a classmate the storefront on a phone and ask, “Find the shirt and try adding a size. How would you figure out whether it fits? What happens to the order?” Give no hint about the note. Record what they did, what they understood about sizing and ordering, and where they hesitated.
3. **Decision rule.** Keep the copy and placement if they find the controls and independently explain both limits. If they miss either limit, record their words, revise the wording or placement and repeat the task. Automated checks cannot answer this question.

[Research issue and review history](https://github.com/Jit380/white-shirt-research/issues/1) · [EKO storefront](https://jit380.github.io/is117-brand-studio/) · [EKO repository](https://github.com/Jit380/is117-brand-studio)
