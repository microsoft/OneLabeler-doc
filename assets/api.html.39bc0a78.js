import{_ as t,r as p,o,c,a as s,b as l,w as r,F as i,d as a,e as n}from"./app.5b213ca8.js";const u={},b=a(`<h1 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference" aria-hidden="true">#</a> API Reference</h1><h2 id="states" tabindex="-1"><a class="header-anchor" href="#states" aria-hidden="true">#</a> States</h2><h3 id="data-objects" tabindex="-1"><a class="header-anchor" href="#data-objects" aria-hidden="true">#</a> Data Objects</h3><p>The list of entities to be labeled.</p><p>The &quot;data objects&quot; state follows the <code>DataObjects</code> data structure as below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">DataObject</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The universal unique id of the data object. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The content of the data object. */</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">DataObjects</span> <span class="token operator">=</span> DataObject<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="labels" tabindex="-1"><a class="header-anchor" href="#labels" aria-hidden="true">#</a> Labels</h3><p>The list of annotations assigned to entities.</p><p>The &quot;labels&quot; state follows the <code>Labels</code> data structure as below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The label status types. */</span>
<span class="token keyword">enum</span> StatusType <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The data object is not viewed and not labeled. */</span>
  New <span class="token operator">=</span> <span class="token string">&#39;New&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** The data object is viewed but not yet labeled. */</span>
  Viewed <span class="token operator">=</span> <span class="token string">&#39;Viewed&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** The data object is viewed but skipped. */</span>
  Skipped <span class="token operator">=</span> <span class="token string">&#39;Skipped&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** The data object is labeled. */</span>
  Labeled <span class="token operator">=</span> <span class="token string">&#39;Labeled&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Label</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The universal unique id of the data object that owns the label. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The label status. */</span>
  status<span class="token operator">:</span> StatusType<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The content of the label for each label task. */</span>
  <span class="token punctuation">[</span>content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Labels</span> <span class="token operator">=</span> Label<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>Note that the key of <code>Label</code> is dynamic and depends on the label tasks. For example, for a classification task, the <code>Label</code> data structure will be:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The label data structure for classification. */</span>
<span class="token keyword">type</span> <span class="token class-name">Label</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The universal unique id of the data object that owns the label. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The label status. */</span>
  status<span class="token operator">:</span> StatusType<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The classification category. */</span>
  category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>As another example, for a named entity detection task, the <code>Label</code> data structure will be:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** A named entity in a text data object. */</span>
<span class="token keyword">type</span> <span class="token class-name">Span</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The string of the entity. */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The index of the entity&#39;s first character in the original text. */</span>
  start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The index of the entity&#39;s first character after the original text. */</span>
  end<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The category of the entity. */</span>
  category<span class="token operator">:</span> Category<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The uuid of the named entity. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The label data structure for named entity detection. */</span>
<span class="token keyword">type</span> <span class="token class-name">Label</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The universal unique id of the data object that owns the label. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The label status. */</span>
  status<span class="token operator">:</span> StatusType<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The named entities. */</span>
  spans<span class="token operator">:</span> Span<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>When <strong>multiple label tasks</strong> are enabled, the <code>Label</code> data structure will store the label for each task in a separate key. For example, for a hybrid task of classification <strong>and</strong> named entity detection, the <code>Label</code> data structure will be:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The label data structure for named entity detection. */</span>
<span class="token keyword">type</span> <span class="token class-name">Label</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The universal unique id of the data object that owns the label. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The label status. */</span>
  status<span class="token operator">:</span> StatusType<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The classification category. */</span>
  category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The named entities. */</span>
  spans<span class="token operator">:</span> Span<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="built-in-label-types" tabindex="-1"><a class="header-anchor" href="#built-in-label-types" aria-hidden="true">#</a> Built-in Label Types</h4><p>Below lists the data structure of labels created with built-in label tasks.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The label for classification. */</span>
<span class="token keyword">const</span> category<span class="token operator">:</span> Category<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The label for multi-label classification. */</span>
<span class="token keyword">const</span> categories<span class="token operator">:</span> Category<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The label for freeform-text annotation. */</span>
<span class="token keyword">const</span> text<span class="token operator">:</span> <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> ShapeType <span class="token punctuation">{</span>
  Polygon <span class="token operator">=</span> <span class="token string">&#39;Polygon&#39;</span><span class="token punctuation">,</span>
  Rect <span class="token operator">=</span> <span class="token string">&#39;Rect&#39;</span><span class="token punctuation">,</span>
  Point <span class="token operator">=</span> <span class="token string">&#39;Point&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">LabelShape</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  category<span class="token operator">:</span> Category<span class="token punctuation">;</span>
  shape<span class="token operator">:</span> ShapeType<span class="token punctuation">;</span>
  contour<span class="token operator">:</span> Point<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> Point<span class="token punctuation">;</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The label for geometric object annotation. */</span>
<span class="token keyword">const</span> shapes<span class="token operator">:</span> LabelShape<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The label for pixel-level segmentation. */</span>
<span class="token keyword">const</span> mask<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The mask content as base64 string. */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The color encoding of the stored mask image. */</span>
  label2color<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The width of the mask. */</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The height of the mask. */</span>
  height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The interface of the named entity label of a text data object. */</span>
<span class="token keyword">type</span> <span class="token class-name">LabelTextSpan</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The string of the entity. */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The index of the entity&#39;s first character in the original text. */</span>
  start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The index of the entity&#39;s first character after the original text. */</span>
  end<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The category of the entity. */</span>
  category<span class="token operator">:</span> Category<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The uuid for differentiating spans with the same content. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The label for named-entity recognition. */</span>
<span class="token keyword">const</span> textSpans<span class="token operator">:</span> LabelTextSpan<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The interface of the temporal span of a video/audio data object. */</span>
<span class="token keyword">type</span> <span class="token class-name">LabelTimeSpan</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The timestamp of the first frame. */</span>
  start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The timestamp of the final frame. */</span>
  end<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The category of the span. */</span>
  category<span class="token operator">:</span> Category<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The uuid for differentiating spans with the same content. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The label for temporal segmentation. */</span>
<span class="token keyword">const</span> timeSpans<span class="token operator">:</span> LabelTimeSpan<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The interface of the relation between two annotations. */</span>
<span class="token keyword">type</span> <span class="token class-name">LabelRelation</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The uuid of the source annotation. */</span>
  sourceUuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The uuid of the target annotation. */</span>
  targetUuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The uuid of the annotation itself. */</span>
  uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The label for text/time span relation annotation. */</span>
<span class="token keyword">const</span> relations<span class="token operator">:</span> LabelRelation<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The label for 3d segmentation. */</span>
<span class="token keyword">const</span> pointLabels<span class="token operator">:</span> Category<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><p>The list of feature representations of entities.</p><p>The &quot;features&quot; state follows the <code>Features</code> data structure as below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Features</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="samples" tabindex="-1"><a class="header-anchor" href="#samples" aria-hidden="true">#</a> Samples</h3><p>An entity subset annotators work with a time.</p><p>The &quot;samples&quot; state follows the <code>QueryUuids</code> data structure as below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** Store the samples with the uuids of the sampled data objects. */</span>
<span class="token keyword">type</span> <span class="token class-name">QueryUuids</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="categories" tabindex="-1"><a class="header-anchor" href="#categories" aria-hidden="true">#</a> Categories</h3><p>The list of valid label categories.</p><p>The &quot;categories&quot; state follows the <code>Categories</code> data structure as below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * The names of label categories that can be used by label tasks
 * that use categories in the label data structure
 * (e.g., classification task, named entity detection task).
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Categories</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> Stop</h3><p>Whether the data labeling process is finished and should stop.</p><p>The &quot;stop&quot; state follows the <code>Stop</code> data structure as below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Stop</span> <span class="token operator">=</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module</h2><h3 id="computation-control" tabindex="-1"><a class="header-anchor" href="#computation-control" aria-hidden="true">#</a> Computation &amp; Control</h3>`,45),m=n("The "),k=n("eight type of computation modules"),d=n(" in OneLabeler, no matter they are interface modules or algorithm modules, implement the "),h=s("code",null,"ComputationModule",-1),g=n(" data structure as below."),y=a(`<p>Besides, behind the scene, the <strong>logic controls</strong> (initialization, conditional branching, and exit) of the flowchart <strong>are also implemented as modules</strong> following the <code>ControlModule</code> data structure as below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** The types of states. */</span>
<span class="token keyword">enum</span> StateType <span class="token punctuation">{</span>
  DataObjects<span class="token punctuation">,</span>
  Labels<span class="token punctuation">,</span>
  Features<span class="token punctuation">,</span>
  Model<span class="token punctuation">,</span>
  Samples<span class="token punctuation">,</span>
  Categories<span class="token punctuation">,</span>
  Stop<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The valid module types. */</span>
<span class="token keyword">enum</span> ComputationType <span class="token punctuation">{</span>
  InteractiveLabeling<span class="token punctuation">,</span>
  DataObjectSelection<span class="token punctuation">,</span>
  ModelTraining<span class="token punctuation">,</span>
  FeatureExtraction<span class="token punctuation">,</span>
  DefaultLabeling<span class="token punctuation">,</span>
  QualityAssurance<span class="token punctuation">,</span>
  StoppageAnalysis<span class="token punctuation">,</span>
  LabelIdeation<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The computation module API. */</span>
<span class="token keyword">type</span> <span class="token class-name">ComputationModule<span class="token operator">&lt;</span><span class="token constant">I</span><span class="token punctuation">,</span> <span class="token constant">O</span> <span class="token keyword">extends</span> StateType<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Inputs to the module. */</span>
  inputs<span class="token operator">:</span> <span class="token constant">I</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Outputs of the module (typically one). */</span>
  outputs<span class="token operator">:</span> <span class="token constant">O</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The type of the module for indexing it in OneLabeler interface. */</span>
  type<span class="token operator">:</span> ComputationType<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The name of the module displayed in OneLabeler interface. */</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Whether the execution of the module is blocking or not. */</span>
  blocking<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The interface module implementation. */</span>
  render<span class="token operator">?</span><span class="token operator">:</span> Vue<span class="token punctuation">.</span>VueConstructor<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The algorithm module implementation. */</span>
  run<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>inputs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token constant">I</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token constant">O</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The three types of control nodes in a flowchart (start, decision, exit) */</span>
<span class="token keyword">enum</span> ControlType <span class="token punctuation">{</span>
  Initialization<span class="token punctuation">,</span>
  Decision<span class="token punctuation">,</span>
  Exit<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** The control module API. */</span>
<span class="token keyword">type</span> <span class="token class-name">ControlModule<span class="token operator">&lt;</span><span class="token constant">I</span><span class="token punctuation">,</span> <span class="token constant">O</span> <span class="token keyword">extends</span> StateType<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Inputs to the module. */</span>
  inputs<span class="token operator">:</span> <span class="token constant">I</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Outputs of the module. */</span>
  outputs<span class="token operator">:</span> <span class="token constant">O</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The type of the module for indexing it in OneLabeler interface. */</span>
  type<span class="token operator">:</span> ControlType<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The name of the module displayed in OneLabeler interface. */</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><p>Asides, OneLabeler has a more fine grid API for the interactive labeling module. For the interactive labeling module, OneLabeler internally uses an API for <a href="#data-type">data type declaration</a> and an API for <a href="#label-task-type">label task type declaration</a> as below.</p><h3 id="data-type" tabindex="-1"><a class="header-anchor" href="#data-type" aria-hidden="true">#</a> Data Type</h3><p>In OneLabeler, to support the annotation of a data type (e.g., image/text/video), a declaration of the data type as the following <code>DataTypeSetup</code> data structure is needed.</p><p>The declaration specifies:</p><ul><li>how a single data object should be rendered in the interface</li><li>how to parse file(s) storing the data objects</li><li>how to export the data object labels</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">DataTypeSetup<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> DataObject<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The name of the data type displayed in OneLabeler interface. */</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The types of tasks that can be composed with the data type. */</span>
  tasks<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The interface component for displaying a single instance of the data type. */</span>
  display<span class="token operator">:</span> Vue<span class="token punctuation">.</span>VueConstructor<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The handler for parsing import file(s) into data objects. */</span>
  <span class="token function-variable function">handleImport</span><span class="token operator">:</span> <span class="token punctuation">(</span>input<span class="token operator">:</span> File <span class="token operator">|</span> FileList<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">D</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The handler for label export. */</span>
  <span class="token function-variable function">handleExport</span><span class="token operator">:</span> <span class="token punctuation">(</span>dataObjects<span class="token operator">:</span> <span class="token constant">D</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> labels<span class="token operator">:</span> Labels<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="label-task-type" tabindex="-1"><a class="header-anchor" href="#label-task-type" aria-hidden="true">#</a> Label Task Type</h3><p>In OneLabeler, to support the annotation of a label task (e.g., classification/segmentation), a declaration of the label task type as the following <code>LabelTaskTypeSetup</code> data structure is needed.</p><p>The declaration specifies the UI widgets for conducting the label task.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LabelTaskTypeSetup</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The name of the label task displayed in OneLabeler interface. */</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The toolbar UI widget for single object labeling. */</span>
  singleTool<span class="token operator">?</span><span class="token operator">:</span> Vue<span class="token punctuation">.</span>VueConstructor<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The toolbar UI widget for batch labeling. */</span>
  batchTool<span class="token operator">?</span><span class="token operator">:</span> Vue<span class="token punctuation">.</span>VueConstructor<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The UI widget for displaying single object label in a dedicated panel. */</span>
  panel<span class="token operator">?</span><span class="token operator">:</span> Vue<span class="token punctuation">.</span>VueConstructor<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The UI widget for overlaying single object label and interaction trigger. */</span>
  overlay<span class="token operator">?</span><span class="token operator">:</span> Vue<span class="token punctuation">.</span>VueConstructor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="template" tabindex="-1"><a class="header-anchor" href="#template" aria-hidden="true">#</a> Template</h2><p>Each implementation of a data labeling tool template implements the <code>WorkflowGraph</code> data structure as below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WorkflowNode</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The id of the node. */</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The name of the node as appear in the interface. */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  type<span class="token operator">?</span><span class="token operator">:</span> ComputationType <span class="token operator">|</span> ControlType<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The chosen implementation (null when not chosen). */</span>
  value<span class="token operator">:</span> IModule <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * The layout specifying where the node should
   * be rendered and the size of the node.
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** The position of the top left corner of the node. */</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** The size of the node. */</span>
    width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * The type of relative position (as discrete state) of the port
 * in the node containing the port.
 */</span>
<span class="token keyword">enum</span> PortDirection <span class="token punctuation">{</span>
  Top <span class="token operator">=</span> <span class="token string">&#39;Top&#39;</span><span class="token punctuation">,</span>
  Left <span class="token operator">=</span> <span class="token string">&#39;Left&#39;</span><span class="token punctuation">,</span>
  Bottom <span class="token operator">=</span> <span class="token string">&#39;Bottom&#39;</span><span class="token punctuation">,</span>
  Right <span class="token operator">=</span> <span class="token string">&#39;Right&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">WorkflowEdge</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** The id of the source node. */</span>
  source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The id of the target node. */</span>
  target<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The id of the edge itself. */</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The condition bound to the edge for outward edges of conditional branching. */</span>
  condition<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The layout specifying where the edge should be rendered in the interface. */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    source<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/**
       * The relative position (as discrete state) of the port
       * in the node containing the port.
       */</span>
      direction<span class="token operator">:</span> PortDirection<span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
       * The relative position (in pixels) of the port
       * to the top left corner of the node containing the port.
       */</span>
      dx<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      dy<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    target<span class="token operator">:</span> <span class="token punctuation">{</span>
      direction<span class="token operator">:</span> PortDirection<span class="token punctuation">,</span>
      dx<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      dy<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">WorkflowGraph</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  nodes<span class="token operator">:</span> WorkflowNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  edges<span class="token operator">:</span> WorkflowEdge<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** The name of the workflow as appear in the menu. */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div>`,15);function f(T,w){const e=p("RouterLink");return o(),c(i,null,[b,s("p",null,[m,l(e,{to:"/#states-and-modules"},{default:r(()=>[k]),_:1}),d,h,g]),y],64)}var x=t(u,[["render",f]]);export{x as default};
