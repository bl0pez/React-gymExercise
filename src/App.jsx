import { Header } from "./components/ui/Header"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const App = () => {
  return (
    <AppTheme>
      <Header />
      <AppRouter />
    </AppTheme>
  )
}

