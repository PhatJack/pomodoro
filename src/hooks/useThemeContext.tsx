import { useContext } from "react";
import { ThemeContext, UIAction, UIState } from "../context/ThemeContext";

export const useThemeContext = (): [UIState, React.Dispatch<UIAction>] => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useThemeContext must be used within a ThemeProvider");
	}
	return [context.state, context.dispatch];
};