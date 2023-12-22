import OpenAI from 'openai'
import { OPENAI_API_KEY } from '$env/static/private'

const openai = new OpenAI({ apiKey: OPENAI_API_KEY })

export const actions = {
	generateImage: async ({ request }: { request: any }) => {
		let promptRequest = await request.formData()
		console.log(promptRequest)
		let prompt = promptRequest.get('imgPrompt')
		const image = await openai.images.generate({
			prompt: prompt.toString(),
			response_format: 'b64_json'
		})

		return {
			prompt: prompt,
			b64: image.data[0].b64_json
		}
	}
}
