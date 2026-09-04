import TaskCard from "../components/TaskCard";
import {describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react";

describe("TaskCard", () => {

    it("visar titel, beskrivning, ansvarig, kategori och prioritet", () => {
        render(
            <TaskCard 
                title="Test Task" 
                id={1} 
                description="This is a test task"
                assignee="John Doe" 
                category="Frontend" 
                priority="Medium" 
            />);

        expect(screen.getByRole("heading", {name: "Test Task"})).toBeInTheDocument();
        expect(screen.getByText("This is a test task")).toBeInTheDocument();
        expect(screen.getByText("Ansvarig: John Doe")).toBeInTheDocument();
        expect(screen.getByText("Frontend")).toBeInTheDocument();
        expect(screen.getByText("Medium")).toBeInTheDocument();
    });


});