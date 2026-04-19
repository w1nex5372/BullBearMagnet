"use client";

import Script from "next/script";

export function WidgetScript() {
  return (
    <Script
      src="https://admin.aidra.lt/widget.js"
      data-client-id="bullbearmagnet"
      strategy="afterInteractive"
    />
  );
}
