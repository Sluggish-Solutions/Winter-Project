<script>
  export let imgPrompt = '';

  function handleSubmit() {
    // send to dalle to create image
    console.log(`Submitted: ${imgPrompt}`);
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
  <label for="name" class="h3">Image Prompt</label>
  <input id="email" bind:value={imgPrompt} type="email" required class="mb-4 h-32" />

  <button type="submit" class=" variant-filled-primary">Submit</button>
</form>