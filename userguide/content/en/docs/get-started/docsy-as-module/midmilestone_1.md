Expanding on the concept of Middle of milestone check-in:

The way we try to grasp how well we are doing according to the scheduled and committed set of Deliverables is simply trying to calculate the level of completeness of all of them.

We do this by tallying up:

<dl class="dl-horizontal">
  <dt>Closed/Verification/Awaiting Security</dt>
  <dd>100% done</dd>

  <dt>In review</dt>
  <dd>80% done</dd>

  <dt>In dev</dt>
  <dd>40% done</dd>

  <dt>Unstarted</dt>
  <dd>0% done</dd>
</dl>

We then compile a small report like this:

<pre>
Done + Verification:         1     w1     2.27%
In review:                 6     w15     34.09%
In dev:                 6     w20     45.45%
Unstarted:                 3     w8     18.18%
Progress:                         47.73%
Conclusion: ...
</pre>

Progress is calculated with:

<pre>(100% * 2.27) + (80% * 34.09) + (40% * 45.45) + (0% * 18.18)</pre>

In the conclusion we write an interpretation of what this means and what we'll be doing to correct course, if needed.
