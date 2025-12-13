<script>
	export let image = '';
	export let onSelect = (url) => (image = url);

	function openWidget() {
		const widget = cloudinary.createUploadWidget(
			{
				cloudName: 'diyagxbvl',
				uploadPreset: 'fabalos_auto'
			},
			(error, result) => {
				if (!error && result.event === 'success') {
					onSelect(result.info.secure_url);
				}
			}
		);

		widget.open();
	}
</script>

<button
	type="button"
	on:click={openWidget}
	class="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-500"
>
	Upload Image
</button>
