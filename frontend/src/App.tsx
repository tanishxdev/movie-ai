import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: "#17171f",
            color: "#f3f3f7",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            fontSize: "13.5px",
          },
          success: {
            iconTheme: { primary: "#35d0e0", secondary: "#0d0d15" },
          },
          error: {
            iconTheme: { primary: "#f16565", secondary: "#0d0d15" },
          },
        }}
      />
    </div>
  );
}

export default App;
