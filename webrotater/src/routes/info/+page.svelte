<script lang="ts" type="module">
	const breakFrameHref: svelte.JSX.MouseEventHandler<HTMLAnchorElement> = (event) => {
		const href = event.currentTarget.getAttribute('href') || '/';
		if (!top) {
			throw 'Why is there no TOP?!';
		}
		top.location = href;
	};
</script>

<h1>Help</h1>

<h3>Params</h3>
<p>url: string = A url to a json file that contains a list of URLs</p>
<p>delay: int = Number of seconds between URL switches</p>

<h3>Examples</h3>
<p>
	<a
		href="/?url=https://gist.githubusercontent.com/georgyo/8e45d1c370aab949b412f99ecbbaea02/raw/urls.json"
		on:click={breakFrameHref}
	>
		/?url=https://gist.githubusercontent.com/georgyo/8e45d1c370aab949b412f99ecbbaea02/raw/urls.json
	</a>
</p>
<p>
	<a
		href="https://gist.githubusercontent.com/georgyo/8e45d1c370aab949b412f99ecbbaea02/raw/urls.json"
		on:click={breakFrameHref}
	>
		https://gist.githubusercontent.com/georgyo/8e45d1c370aab949b412f99ecbbaea02/raw/urls.json
	</a>
</p>
