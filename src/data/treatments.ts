export interface Treatment {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  priceHint: string;
  duration: string;
  recovery: string;
  anesthesia: string;
}

export const treatments: Treatment[] = [
  {
    id: "eyes",
    title: "눈 성형",
    titleEn: "Eyes",
    subtitle: "자연스러운 라인의 완성",
    description: "개인의 눈 구조와 얼굴 비율을 정밀 분석하여, 자연스러우면서도 또렷한 눈매를 완성합니다. 절개·비절개·눈매교정 등 최적의 방법을 제안합니다.",
    details: ["자연유착 쌍꺼풀", "눈매교정(안검하수)", "앞트임·뒤트임", "눈밑지방 재배치", "상안검·하안검 성형"],
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
    priceHint: "80만원~",
    duration: "30~60분",
    recovery: "5~7일",
    anesthesia: "수면마취",
  },
  {
    id: "nose",
    title: "코 성형",
    titleEn: "Nose",
    subtitle: "조화로운 라인의 설계",
    description: "얼굴 전체의 조화를 고려한 코 성형. 콧대 높이, 코끝 모양, 콧볼 너비까지 세밀하게 디자인하여 자연스럽고 세련된 코 라인을 만듭니다.",
    details: ["콧대·코끝 성형", "매부리코 교정", "들창코·화살코 교정", "코재수술", "비중격·기능코 성형"],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    priceHint: "200만원~",
    duration: "1~2시간",
    recovery: "7~14일",
    anesthesia: "수면마취",
  },
  {
    id: "contour",
    title: "윤곽 성형",
    titleEn: "Contour",
    subtitle: "얼굴형의 완벽한 재설계",
    description: "3D CT 분석을 통한 정밀 윤곽 성형. 사각턱, 광대, 턱끝 등 뼈 구조를 교정하여 갸름하고 부드러운 얼굴 라인을 완성합니다.",
    details: ["사각턱 축소술", "광대 축소술", "턱끝 성형(무턱·긴턱)", "V라인 턱끝", "안면비대칭 교정"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
    priceHint: "300만원~",
    duration: "2~3시간",
    recovery: "2~3주",
    anesthesia: "전신마취",
  },
  {
    id: "lifting",
    title: "리프팅",
    titleEn: "Lifting",
    subtitle: "시간을 되돌리는 기술",
    description: "처진 피부와 조직을 근본적으로 개선하는 안면 리프팅. 절개·비절개 방식을 조합하여 자연스러운 동안 효과를 구현합니다.",
    details: ["안면거상술", "미니 리프팅", "실 리프팅", "이마 리프팅", "목 리프팅"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    priceHint: "150만원~",
    duration: "1~3시간",
    recovery: "7~14일",
    anesthesia: "수면/전신마취",
  },
  {
    id: "breast",
    title: "가슴 성형",
    titleEn: "Breast",
    subtitle: "자연스러운 볼륨과 라인",
    description: "체형과 가슴 조직을 정밀 분석하여 최적의 보형물과 수술법을 선택합니다. 자연스러운 촉감과 아름다운 실루엣을 동시에 완성합니다.",
    details: ["가슴 확대", "가슴 축소·거상", "보형물 교체", "지방이식 가슴성형", "남성 여유증 수술"],
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80",
    priceHint: "400만원~",
    duration: "1~2시간",
    recovery: "1~2주",
    anesthesia: "전신마취",
  },
  {
    id: "body",
    title: "바디 성형",
    titleEn: "Body",
    subtitle: "이상적인 바디라인",
    description: "최신 장비를 활용한 체형 교정. 지방흡입, 복부성형 등을 통해 매끈하고 균형 잡힌 바디라인을 디자인합니다.",
    details: ["지방흡입(복부·허벅지·팔뚝)", "복부 성형", "힙업 성형", "셀룰라이트 개선", "지방이식 바디"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    priceHint: "200만원~",
    duration: "1~3시간",
    recovery: "1~2주",
    anesthesia: "수면마취",
  },
];
