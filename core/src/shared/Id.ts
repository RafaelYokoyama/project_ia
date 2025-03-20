export default class Id {
	static generate(): string {
		return Array(3)
			.fill(null)
			.map(() => Math.random().toString(36).substring(2, 9))
			.join("-");
	}
}
