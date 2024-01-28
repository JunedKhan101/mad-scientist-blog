import type { CosmicObject, Tag } from "../types/cosmicObj";

export default function getUniqueTagsList(cosmicObj: CosmicObject[]): Tag[] {
    const tagMap = new Map<string, Tag>();

    cosmicObj.forEach(({ metadata: { tags } }) => {
        tags.forEach(tag => {
            if (!tagMap.has(tag.title)) {
                tagMap.set(tag.title, tag);
            }
        });
    });

    return [...tagMap.values()];
}
