<script>
	import Header from './Header.svelte'

	let imgPrompt = ''

	const handleSubmit = () => {
		// send to dalle to create image
		console.log(`Submitted: ${imgPrompt}`)
	}
</script>

<main class="flex flex-col justify-center items-center p-3 sm:p-10">
	<!-- Image Placeholder-->
	<img src="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
	
	<!-- Form for Image Prompt -->
	<form on:submit|preventDefault={handleSubmit} class="flex flex-col w-full my-3">
		<label class="label">
			<span>Image Prompt</span>
			<textarea
				class="textarea resize-none"
				rows="4"
				placeholder="Superman's cat lying on the moon."
				bind:value={imgPrompt}
			/>
		</label>

		<button type="submit" class="btn variant-filled">Submit</button>
	</form>
</main>
