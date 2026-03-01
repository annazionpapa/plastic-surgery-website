export interface Doctor {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  specialty: string;
  image: string;
  education: string[];
  career: string[];
  certifications: string[];
  greeting: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-kim",
    name: "김도윤",
    nameEn: "Dr. Kim Do-Yun",
    title: "대표원장",
    specialty: "코성형 · 윤곽성형 전문",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    education: [
      "서울대학교 의과대학 졸업",
      "서울대학교 의학대학원 성형외과 석·박사",
    ],
    career: [
      "前 서울대학교병원 성형외과 전문의",
      "前 아산의료원 성형외과 전임의",
      "대한성형외과학회 정회원",
      "국제미용성형외과학회(ISAPS) 정회원",
    ],
    certifications: [
      "성형외과 전문의",
      "대한미용성형외과학회 인정의",
      "대한두개안면성형외과학회 정회원",
      "보건복지부 인정 성형외과 전문의",
    ],
    greeting: "성형은 단순한 외모 변화가 아닌, 삶의 자신감을 되찾는 과정입니다. 15년간의 경험과 기술로 가장 자연스러운 아름다움을 약속합니다.",
  },
  {
    id: "dr-park",
    name: "박서연",
    nameEn: "Dr. Park Seo-Yeon",
    title: "원장",
    specialty: "눈성형 · 리프팅 전문",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    education: [
      "연세대학교 의과대학 졸업",
      "연세대학교 의학대학원 성형외과 전공의 수료",
    ],
    career: [
      "前 세브란스병원 성형외과 전문의",
      "前 강남 대형 성형외과 원장",
      "대한성형외과학회 정회원",
      "대한미용외과학회 정회원",
    ],
    certifications: [
      "성형외과 전문의",
      "대한안면성형재건학회 정회원",
      "대한노화방지의학회 인정의",
    ],
    greeting: "눈은 인상의 70%를 결정합니다. 각 환자분의 고유한 눈 구조를 존중하면서도, 더 밝고 또렷한 눈매를 완성해드리겠습니다.",
  },
  {
    id: "dr-lee",
    name: "이준혁",
    nameEn: "Dr. Lee Jun-Hyeok",
    title: "원장",
    specialty: "가슴성형 · 바디 전문",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
    education: [
      "고려대학교 의과대학 졸업",
      "고려대학교 의학대학원 성형외과 전공의 수료",
    ],
    career: [
      "前 고려대학교 안암병원 성형외과 전문의",
      "前 미국 NYU 성형외과 연수",
      "대한성형외과학회 정회원",
      "대한유방성형재건학회 정회원",
    ],
    certifications: [
      "성형외과 전문의",
      "대한체형성형외과학회 인정의",
      "미국성형외과학회(ASPS) 국제회원",
    ],
    greeting: "가슴 성형은 기술과 미적 감각이 동시에 요구되는 섬세한 수술입니다. 최신 보형물과 정밀한 수술 기법으로 자연스러운 결과를 만들어드립니다.",
  },
];
