<script lang="ts">
	export let form
</script>

<main class="flex flex-col justify-center items-center p-3 sm:p-10">
	{#if form?.b64}
		<h1>here is your image</h1>

		<img src="data:image/png;base64,{form.b64}" alt="generated img" />
		<h1>{form.prompt}</h1>
	{:else}
	<!-- Image Placeholder-->
		<img
			src="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt=""
		/>
	{/if}
	<form method="POST" action="?/generateImage">
		<label class="label">
			<span>Image Prompt</span>
			<textarea
				class="textarea resize-none"
				rows="4"
				placeholder="Superman's cat lying on the moon."
				name="imgPrompt"
			/>
		</label>

		<button type="submit" class="btn variant-filled">Submit</button>
	</form>
</main>
