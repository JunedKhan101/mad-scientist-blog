import type { CosmicObject, Tag } from "../types/cosmicObj";

export default function getUniqueTagsList(cosmicObj: CosmicObject[]): Tag[] {
	if (cosmicObj && cosmicObj.length > 0) {
		const tagMap: Map<string, Tag> = new Map(); // Using a Map to store unique tags based on title
		for (let i = 0; i < cosmicObj.length; i++) {
			const tags = cosmicObj[i].metadata.tags;
			for (let j = 0; j < tags.length; j++) {
				const tag = tags[j];
				if (!tagMap.has(tag.title)) {
					tagMap.set(tag.title, tag); // Storing tag object with title as key
				}
			}
		}
		return Array.from(tagMap.values()); // Converting Map values to array and returning
	}
	return [];
}
