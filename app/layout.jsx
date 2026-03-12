export const metadata = {
  title: "Financial Risk Engine",
  description: "Probabilistic personal finance risk analysis — Monte Carlo simulation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#060b14" }}>
        {children}
      </body>
    </html>
  );
}
