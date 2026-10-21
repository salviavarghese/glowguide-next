export function Notice({ title, children, tone = "info" }: { title: string; children: React.ReactNode; tone?: "info" | "warn" | "error" }) {
  const cls = tone === "warn" ? "notice notice--warn" : tone === "error" ? "notice notice--error" : "notice"
  return (
    <div className={cls}>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  )
}
