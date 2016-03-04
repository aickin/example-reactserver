import React from "react"
import HelloWorld from "../components/HelloWorld"

export default class SimplePage {
	getElements () {
		return [
			<HelloWorld/>,
		];
	}
}
