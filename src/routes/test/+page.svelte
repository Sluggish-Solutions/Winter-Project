<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;


</script>


<main>

{#if data.url}
<img src={data.url} alt="generated img"/>
{/if}

</main>