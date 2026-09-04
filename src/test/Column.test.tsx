import Column from "../components/Column";
import {describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react";

describe("Column", () => {

 it("visar titel och innehåll som skickas som children", () => {
        render(
            <Column title="Test Column">
                <p>Test content</p>
            </Column>
        );

        expect(screen.getByRole("heading", {name: "Test Column"})).toBeInTheDocument();
        expect(screen.getByText("Test content")).toBeInTheDocument();
    });






});