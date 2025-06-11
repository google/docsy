Estimating bugs is inherently difficult. The majority of the effort in fixing
bugs is finding the cause, and then a bug be
accurately estimated. Additionally, velocity is used to measure the amount of
new product output, and bug fixes are typically fixes on a feature that has been
tracked and had a weight attached to it previously.

Because of this, we do not weigh bugs during ~"workflow::planning breakdown". If
an engineer picks up a bug and determines that there will be a significant level
of effort in fixing it (for example, a large migration is needed, or we need to
switch state management to Vuex on the frontend), we then will want to
prioritize it against feature deliverables. Ping the product manager with this
information so they can determine when the work should be scheduled.
