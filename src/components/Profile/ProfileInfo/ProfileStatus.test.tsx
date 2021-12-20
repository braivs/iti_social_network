import React from "react";
import {ProfileStatus} from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus updateStatus={() => {}}  status="briws.ru" />);
        const instance = component.getInstance();
        instance && // @ts-ignore
        expect(instance.state.status).toBe("briws.ru");
    });

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus updateStatus={() => {}} status="briws.ru" />);
        const instance = component.getInstance();
        instance && // @ts-ignore
        expect(instance.state.status).toBe("briws.ru");
    });
});

// todo: need to fix @ts-ignore