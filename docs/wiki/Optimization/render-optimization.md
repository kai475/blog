# Render Optimization

## Img Lazy-Load

## Responsive Image

- use <picture>, set different source
- use CSS @media

## Replace Simple Image with CSS3

## Reduce Reflow and Repaint

Browser pixel pips: JavaScript -> Style -> Layout -> Paint -> Composite

- When use JavaScript to switch styles, use CSS Class instead of directly alteration.
- When a series of DOM opeartions, make DOM out of HTML normal flow (use display: none or DocumentFragment).
- Use transform and opacity, which will not trigger reflow and repaint, to deliver animation.

## Event Delegation

- Use addEventListener at parentNode instead of childNode, to reduce browser memory cost.
- Use events.stopPropagation() to stop event bubbling.

## setInterval/setTimeout vs. requestAnimationFrame

- setInterval perform callback in a constant period regardless of interval-body, while setTimeout only perform callback after the previous timeout-body ended.
- setInterval/setTimeout, force update, custom period, can cost frame drop due to the period may not be the same page with screen refresh rate.
- requestAnimationFrame don't need a period, it performs on every reflow or repaint.
- requestAnimationFrame guarantee that callback only perform once between each screen refresh, therefore guarantee no frame drop.
- requestAnimationFrame suspend callback perform when browser page is not active.

## Use Native DOM WebAPIs
