import { render, screen } from "@testing-library/react";
import Page from './page';

it('Page: Renders home page', () => {
    render(<Page />);
    expect(screen.getByRole("heading")).toHaveTextContent("Home");
})