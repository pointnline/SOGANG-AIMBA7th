import { BrandLockup } from "@/components/BrandLogo";
import { TOKENS as T } from "@/lib/tokens";
import { FILTERS, FUTURE_REPORT_PATH, PARTICIPATE_PATH } from "@/lib/data";
import { sitePath } from "@/lib/paths";

export function HomeSidebar() {
  return (
    <aside>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        <BrandLockup tone="dark" size="small" compact />
      </div>

      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.2em",
          color: T.ink3,
          marginBottom: 14,
          paddingBottom: 10,
          borderBottom: `1px solid ${T.ink}`,
        }}
      >
        BRIEF · CATALOG
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {FILTERS.map((f, i) => {
          const active = f.code === "ALL";
          return (
            <li
              key={i}
              style={{
                padding: "13px 0",
                borderBottom: `1px solid ${T.rule}`,
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 12,
                alignItems: "baseline",
                color: active ? T.wine : T.ink2,
                cursor: "pointer",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    color: active ? T.wine : T.ink3,
                    fontWeight: 700,
                    marginBottom: 3,
                  }}
                >
                  {f.code}
                </div>
                <a
                  href={sitePath(f.href)}
                  style={{
                    fontFamily: "var(--korean)",
                    fontSize: 13.5,
                    fontWeight: active ? 600 : 400,
                    display: "inline-block",
                  }}
                >
                  {f.label}
                </a>
              </div>
              <div
                className="tabular"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11.5,
                  color: T.ink3,
                }}
              >
                {String(f.count).padStart(2, "0")}
              </div>
            </li>
          );
        })}
      </ul>

      <div
        style={{
          marginTop: 20,
          padding: "11px 14px",
          background: "#fff",
          border: `1px solid ${T.rule}`,
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: T.ink3,
        }}
      >
        <span>⌕</span>
        <span>SEARCH...</span>
      </div>

      <div
        style={{
          marginTop: 14,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <a
          href={sitePath(PARTICIPATE_PATH)}
          style={{
            padding: "12px 14px",
            background: T.wine,
            color: "#faf6ef",
            borderRadius: 4,
            fontFamily: "var(--korean)",
            fontSize: 13,
            fontWeight: 600,
            textAlign: "left",
            display: "block",
          }}
        >
          → 참여하기
        </a>
        <a
          href={sitePath(FUTURE_REPORT_PATH)}
          style={{
            padding: "12px 14px",
            background: "#fff",
            color: T.ink,
            border: `1px solid ${T.rule}`,
            borderRadius: 4,
            fontFamily: "var(--korean)",
            fontSize: 13,
            fontWeight: 500,
            textAlign: "left",
            display: "block",
          }}
        >
          ↗ Future Report
        </a>
      </div>
    </aside>
  );
}
