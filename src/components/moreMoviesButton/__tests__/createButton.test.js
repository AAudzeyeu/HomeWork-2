import { getByRole } from "@testing-library/dom";
import { createMoreButton } from "../createButton";

describe("createButton", () => {
    test("button should be rendered into proveded container", () => {
        const container = document.createElement("div");
        document.b.append(container);

        createMoreButton(container);

        expect(getByRole(container, "button")).toBeInTheDocument();
    })
})