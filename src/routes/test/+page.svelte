<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

console.log(data)
</script>


<main>

{#if data.base64}
<img src="data:image/png;base64,{data.base64}" alt="generated img"/>
{/if}

</main>