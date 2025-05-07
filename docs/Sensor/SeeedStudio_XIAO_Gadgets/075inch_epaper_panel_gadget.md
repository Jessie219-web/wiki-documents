### Function

Before we get started developing a sketch, let's look at the available functions of the library.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Function</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
		<tr>
			<td><code>begin()</code></td>
			<td>Initialize the display</td>
			<td><pre><code>lcd.begin();</code></pre></td>
		</tr>
		<tr>
			<td><code>clear()</code></td>
			<td>Clear the display</td>
			<td><pre><code>lcd.clear();</code></pre></td>
		</tr>
		<tr>
			<td><code>setTextSize()</code></td>
			<td>Set the text size</td>
			<td><pre><code>lcd.setTextSize(2);</code></pre></td>
		</tr>
		<tr>
			<td><code>Required Libraries</code></td>
			<td>Include necessary libraries</td>
			<td><pre><code>#include &lt;lvgl.h&gt;
#include &lt;TFT_eSPI.h&gt;
#include &lt;ui.h&gt;
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"</code></pre></td>
		</tr>
	</table>
</div> 