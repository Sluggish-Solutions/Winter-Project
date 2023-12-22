<script>
import { AppShell } from '@skeletonlabs/skeleton';
import { AppBar } from '@skeletonlabs/skeleton';
import { page } from '$app/stores';
import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><img src="static\images\dropicon.png" alt="avatar image"></svelte:fragment>
	Dall-E Dupe
	<svelte:fragment slot="trail"><img src="static\images\dropicon.png" alt="trail image"></svelte:fragment>
</AppBar>