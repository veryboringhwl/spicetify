import main from "@/main";

async function theme() {
	if (!(Spicetify.Platform && Spicetify.React && Spicetify.ReactDOM && Spicetify.Mousetrap)) {
		await new Promise((resolve) => setTimeout(resolve, 10))
	}

	await main()
}

export default theme;