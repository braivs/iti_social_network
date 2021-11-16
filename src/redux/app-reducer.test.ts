import {action} from "@storybook/addon-actions";
import {appReducer, initializedSuccess} from "./app-reducer";

let state = {
    initialized: false as boolean
}

test('initialize should become true', () => {
    let action = initializedSuccess()

    let newState = appReducer(state,action)

    expect(newState.initialized).toBe(true)
})