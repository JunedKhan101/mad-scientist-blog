import { createBucketClient } from "@cosmicjs/sdk";
import type { CosmicObject } from "../types/cosmicObj";

const cosmic = createBucketClient({
	bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
	readKey: import.meta.env.COSMIC_API_KEY,
});

export async function getAllPosts() {
	const data = await cosmic.objects
		.find({
			type: "posts",
		})
		.props([
			"title",
			"slug",
			"metadata.description",
			"metadata.tags",
			"metadata.content",
			"metadata.seokeywords",
			"metadata.createdat",
			"metadata.cover_image",
		]);

	return data.objects as CosmicObject[];
}
