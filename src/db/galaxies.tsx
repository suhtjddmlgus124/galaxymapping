import type { Galaxy } from "../types/galaxy";

const galaxies: Galaxy[] = [
    {
        id: 0,
        name: "M51",
        ra: 13.5, // 적경(시간)
        dec: 202.5, // 적위(도)
        distance: 3.1, // 1000만 광년 == 1
        photo: "/photo/M51_photo.jpg",
        metadata: "1Bin, 1800s x 6ea",
        spectrum: "/spectrum/M51_spectrum.png",
        dateTime: "2025년 5월 6일 22시 30분 ~ 2025년 5월 7일 00시 21분",
    },
]

export default galaxies;