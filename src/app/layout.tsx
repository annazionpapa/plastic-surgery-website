import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "뤼에르 성형외과 | 자연스러운 아름다움의 완성",
  description: "15년 경력 성형외과 전문의 3인의 자연스러운 아름다움을 위한 맞춤 성형. 눈·코·윤곽·리프팅·가슴 성형 전문. 강남역 위치.",
  keywords: "성형외과, 눈성형, 코성형, 윤곽성형, 리프팅, 강남성형외과, 자연유착, 코끝성형, 안면윤곽",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "뤼에르 성형외과 | 자연스러운 아름다움의 완성",
    description: "15년 경력 성형외과 전문의 3인의 자연스러운 아름다움을 위한 맞춤 성형.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
