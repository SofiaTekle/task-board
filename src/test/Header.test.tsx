import Header from "../components/Header";
import {describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react";


describe("Header-tester", () => {

    it("visar headerns rubrik", () => {
        render(<Header />);
        
        expect(screen.getByRole(
            "heading", {name: "Task Board"})).toBeInTheDocument();
    });

    it("visar headerns text", () => {
        render(<Header />);

        expect(screen.getByText(
            "En taskboard för att organisera dina uppgifter")).toBeInTheDocument();
    });




});