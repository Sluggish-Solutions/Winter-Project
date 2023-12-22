<script>
import { AppBar } from '@skeletonlabs/skeleton';
import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><img src="images\dropicon.png" alt="Avatar"></svelte:fragment>
	Dall-E Dupe
	<svelte:fragment slot="trail"><img src="images\dropicon.png" alt="Menu"></svelte:fragment>
</AppBar>