<script lang="ts">
  import { animation } from "$lib/actions/animation";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="box" use:animation></div>

<style>
  .box{
    width: 400px;
    height: 400px;
    background-color: black;
  }
</style>