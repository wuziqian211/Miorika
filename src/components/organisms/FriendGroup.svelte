<script lang="ts">
import Chips from '@components/atoms/action/Chips.svelte';
import Card from '@components/atoms/display/Card.svelte';
import Icon from '@components/atoms/display/Icon.svelte';
import LoadingIndicator from '@components/atoms/feedback/LoadingIndicator.svelte';
import TextField from '@components/atoms/input/TextField.svelte';
import FriendCard from '@components/molecules/FriendCard.svelte';
import I18nKey from '@i18n/i18nKey';
import { i18n } from '@i18n/translation';
import { onMount } from 'svelte';
import type { FriendItem } from '../../../shirones/config/data/friends';

let {
  id,
  title,
  subtitle,
  icon,
  friends,
  countUnit,
  inactiveTag,
  inactiveLabel,
}: {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  friends: FriendItem[];
  countUnit: string;
  inactiveTag: string;
  inactiveLabel: string;
} = $props();

let query = $state('');
let selectedTag = $state('');
let initialized = $state(false);
let phase = $state<'idle' | 'loading' | 'out'>('idle');
let phaseTimers: ReturnType<typeof setTimeout>[] = [];

const queryKey = $derived(`${id}-q`);
const tagKey = $derived(`${id}-tag`);
const tagItems = $derived(
  Array.from(new Set(friends.flatMap(friend => friend.tags)))
    .sort((a, b) => a.localeCompare(b))
    .map(tag => ({ value: tag, label: tag })),
);
const filtered = $derived.by(() => {
  const normalizedQuery = query.trim().toLowerCase();
  return friends.filter(friend => {
    if (selectedTag && !friend.tags.includes(selectedTag)) return false;
    if (!normalizedQuery) return true;
    let host = friend.siteurl;
    try {
      host = new URL(friend.siteurl).hostname;
    } catch {
      // Search the original URL if a link cannot be parsed.
    }
    return [friend.title, friend.desc, host, ...friend.tags]
      .some(value => value.toLowerCase().includes(normalizedQuery));
  });
});
const activeFriends = $derived(filtered.filter(friend => !friend.tags.includes(inactiveTag)));
const inactiveFriends = $derived(filtered.filter(friend => friend.tags.includes(inactiveTag)));
const hasFilter = $derived(Boolean(query.trim() || selectedTag));

function onTagChange() {
  phaseTimers.forEach(clearTimeout);
  phase = 'loading';
  phaseTimers = [
    setTimeout(() => (phase = 'out'), 300),
    setTimeout(() => (phase = 'idle'), 450),
  ];
}

// Only update this group's keys; preserve the other group and application anchors.
$effect(() => {
  const q = query;
  const tag = selectedTag;
  if (!initialized) return;
  const url = new URL(window.location.href);
  url.searchParams.delete(queryKey);
  url.searchParams.delete(tagKey);
  if (q) url.searchParams.set(queryKey, q);
  if (tag) url.searchParams.set(tagKey, tag);
  window.history.replaceState(window.history.state, '', url);
});

onMount(() => {
  const restoreFilters = () => {
    const params = new URLSearchParams(window.location.search);
    query = params.get(queryKey) || '';
    const tag = params.get(tagKey) || '';
    selectedTag = tagItems.some(item => item.value === tag) ? tag : '';
  };
  restoreFilters();
  initialized = true;
  window.addEventListener('popstate', restoreFilters);
  return () => {
    window.removeEventListener('popstate', restoreFilters);
    phaseTimers.forEach(clearTimeout);
  };
});
</script>

<section {id} aria-labelledby={`${id}-title`}>
  <Card color="var(--card-bg)" radius="l" class="friend-group p-6 md:p-8">
    <header class="friend-group__header">
      <h2 id={`${id}-title`}>
        <span aria-hidden="true"><Icon {icon} /></span>
        {title}
      </h2>
      <p>{subtitle}</p>
    </header>

    <div class="friend-group__tools">
      <div class="friend-group__search">
        <TextField
          id={`${id}-search`}
          type="search"
          bind:value={query}
          placeholder={`搜索${title}`}
          label={`搜索${title}`}
          hideLabel
          variant="outlined"
          class="!rounded-(--shape-corner-l)"
        >
          <Icon slot="leading" icon="material-symbols:search-rounded" aria-hidden="true" />
        </TextField>
        {#if query}
          <button
            type="button"
            class="friend-group__search-clear"
            aria-label={`清除${title}搜索`}
            onclick={() => (query = '')}
          >
            <Icon icon="material-symbols:close-rounded" />
          </button>
        {/if}
      </div>
      {#if tagItems.length > 0}
        <div role="group" aria-label={`${title}标签筛选`}>
          <Chips items={tagItems} variant="filter" bind:value={selectedTag} onchange={onTagChange} />
        </div>
      {/if}
      <p class="friend-group__count" role="status">{filtered.length} {countUnit}</p>
    </div>

    {#if phase !== 'idle'}
      <div class="friend-group__loading" class:friend-group__loading--out={phase === 'out'}>
        <LoadingIndicator contained size={64} />
      </div>
    {:else if filtered.length > 0}
      {#key `${query}|${selectedTag}`}
        {#if activeFriends.length > 0}
          <div class="friend-group__list">
            {#each activeFriends as friend (friend.id)}
              <FriendCard {friend} />
            {/each}
          </div>
        {/if}
        {#if inactiveFriends.length > 0}
          <details class="friend-group__inactive" open={hasFilter}>
            <summary>{inactiveLabel}（{inactiveFriends.length}）</summary>
            <div class="friend-group__list">
              {#each inactiveFriends as friend (friend.id)}
                <FriendCard {friend} />
              {/each}
            </div>
          </details>
        {/if}
      {/key}
    {:else}
      <div class="friend-group__empty">
        <Icon icon="material-symbols:search-off-outline-rounded" aria-hidden="true" />
        <span>{i18n(I18nKey.friendsNoResults)}</span>
      </div>
    {/if}
  </Card>
</section>

<style>
  section { min-width: 0; scroll-margin-top: 5rem; }
  .friend-group__header { margin-bottom: 1.5rem; }
  .friend-group__header h2 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0;
    color: var(--on-surface);
    font: var(--m3e-type-headline-medium);
    font-weight: 700;
  }
  .friend-group__header h2 span { display: inline-flex; flex: none; color: var(--primary); }
  .friend-group__header h2 :global(svg) { width: 2rem; height: 2rem; }
  .friend-group__header p { margin: 0.375rem 0 0; color: var(--on-surface-variant); font: var(--m3e-type-body-medium); }
  .friend-group__tools { display: flex; flex-direction: column; gap: 0.875rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--outline-variant); }
  .friend-group__search { position: relative; width: 100%; max-width: 32rem; }
  .friend-group__search:has(.friend-group__search-clear) :global(input) { padding-right: 2rem; }
  .friend-group__search-clear {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: var(--shape-corner-full);
    background: transparent;
    color: var(--on-surface-variant);
    cursor: pointer;
  }
  .friend-group__search-clear :global(svg) { width: 1.25rem; height: 1.25rem; }
  .friend-group__search-clear:hover { background: color-mix(in oklab, var(--on-surface-variant) 8%, transparent); }
  .friend-group__count { margin: 0; color: var(--on-surface-variant); font: var(--m3e-type-body-small); }
  .friend-group__list { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; padding-top: 1.5rem; animation: friend-group-reveal var(--m3e-duration-medium) var(--m3e-easing-standard); }
  .friend-group__inactive { margin-top: 1.5rem; }
  .friend-group__inactive summary { cursor: pointer; color: var(--on-surface-variant); font: var(--m3e-type-label-large); }
  .friend-group__loading, .friend-group__empty { display: flex; align-items: center; justify-content: center; min-height: 11rem; padding-top: 1.5rem; }
  .friend-group__loading--out { animation: friend-group-loading-out var(--m3e-duration-short) var(--m3e-easing-emphasized-accelerate) both; }
  .friend-group__empty { flex-direction: column; gap: 0.75rem; color: var(--on-surface-variant); font: var(--m3e-type-body-large); }
  .friend-group__empty :global(svg) { width: 2.5rem; height: 2.5rem; }
  @media (min-width: 768px) { .friend-group__list { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @keyframes friend-group-reveal { from { opacity: 0; transform: translateY(0.25rem); } to { opacity: 1; transform: none; } }
  @keyframes friend-group-loading-out { from { opacity: 1; transform: none; } to { opacity: 0; transform: scale(0.96); } }
</style>
