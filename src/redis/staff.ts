import { client } from ".";

export async function addStaffToQueue(restaurantId: number, staffIds: string[]) {
    if (!Array.isArray(staffIds) || staffIds.length === 0) {
        console.error("Invalid staffIds array:", staffIds);
        return;
    }
    for (let staffId of staffIds) {
        if (typeof staffId !== "string") {
            console.error("Invalid staffId:", staffId);
            continue;
        }
        await client.rPush(String(restaurantId), staffId)
    }
}

export async function getNextStaff(restaurantId: number) {
    const staffId = await client.lPop(String(restaurantId));
    if (!staffId) {
        console.warn(`No staff found in queue for restaurant ${restaurantId}`);
        return null;
    }
    await client.rPush(String(restaurantId), staffId!);
    return staffId!;
}

export async function restaurantExists(restaurantId: number) {
    const length = await client.lLen(String(restaurantId));
    return length > 0;
}