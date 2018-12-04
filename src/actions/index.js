import ReelData from "../data/Reels";

export const fetchReels = (id) => {
	return {
		type: 'RECEIVE_REELS',
		reels: ReelData[id]
	}
}