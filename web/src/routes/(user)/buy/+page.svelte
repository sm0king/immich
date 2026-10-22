<script lang="ts">
  import { goto } from '$app/navigation';
  import { Route } from '$lib/route';
  import { onMount } from 'svelte';

  onMount(() => {
    goto(Route.photos(), { replaceState: true });
  });
</script>
