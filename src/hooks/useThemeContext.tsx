import { useContext } from "react";
import { ThemeContext, TimeAction, TimeState } from "../context/ThemeContext";

export const useThemeContext = (): [TimeState, React.Dispatch<TimeAction>] => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useThemeContext must be used within a ThemeProvider");
	}
	return [context.state, context.dispatch];
};