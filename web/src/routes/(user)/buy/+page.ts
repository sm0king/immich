import { Route } from '$lib/route';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
  redirect(307, Route.photos());
}) satisfies PageLoad;
