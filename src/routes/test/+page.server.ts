import OpenAI from 'openai';
import type { PageLoad } from './$types'
import { OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({apiKey: OPENAI_API_KEY})
export const load = (async () => {
	const image = await openai.images.generate({
		prompt: 'cat',
	})

	console.log(image)
	  
	return {url: image.data[0].url}
	//return {url: image.data.url}
}) satisfies PageLoad
