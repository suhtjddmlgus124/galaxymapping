import type { Galaxy } from "../types/galaxy";

const galaxies: Galaxy[] = [
    {
        id: 0,
        name: "M51",
        ra: 13.5, // 적경(시간)
        dec: 47.2, // 적위(도)
        photo: "/photo/M51_photo.jpg",
        metadata: "1Bin, 1800s x 6ea",
        spectrum: "/spectrum/M51_spectrum.png",
        dateTime: "2025년 5월 6일 22시 30분 ~ 2025년 5월 7일 00시 21분",

        // 거리 문헌값, 측정값 (Mpc)
        reportedDistance: 3.1,
        measuredDistance: 13.90,
        // 적색편이량 문헌값, 측정값
        reportedRedshift: 0,
        measuredRedshift: 0.0032,
        // 후퇴 속도 문헌값, 측정값 (km/s)
        reportedRecessionVelocity: 0,
        measuredRecessionVelocity: 972.78, 
    },
    {
        id: 1,
        name: "M81",
        ra: 9.93,
        dec: 69.07,
        photo: "/photo/M81_photo.webp",
        metadata: "",
        spectrum: "/spectrum/M81_spectrum.png",
        dateTime: "2025년 6월",

        
        // 거리 문헌값, 측정값 (Mpc)
        reportedDistance: 3.62,
        measuredDistance: 0,
        // 적색편이량 문헌값, 측정값
        reportedRedshift: 0,
        measuredRedshift: -0.0004,
        // 후퇴 속도 문헌값, 측정값 (km/s)
        reportedRecessionVelocity: 0,
        measuredRecessionVelocity: -131.34,
        
    },
    {
        id: 2,
        name: "M82",
        ra: 9.93,
        dec: 69.68,
        photo: "/photo/M82_photo.webp",
        metadata: "1Bin, 1200s x 6ea",
        spectrum:"/spectrum/M82_spectrum.png",
        dateTime: "2025년 6월",

        
        // 거리 문헌값, 측정값 (Mpc)
        reportedDistance: 3.65,
        measuredDistance: 3.30,
        // 적색편이량 문헌값, 측정값
        reportedRedshift: 0,
        measuredRedshift: 0.0008,
        // 후퇴 속도 문헌값, 측정값 (km/s)
        reportedRecessionVelocity: 0,
        measuredRecessionVelocity: 230.81,
    },
    {
        id: 3,
        name: "M101",
        ra: 14.05,
        dec: 54.35,
        photo: "/photo/M101_photo.webp",
        metadata: "1Bin, 1200s x 6ea",
        spectrum:"/spectrum/M101_spectrum.png",
        dateTime: "2025년 6월",

        
        // 거리 문헌값, 측정값 (Mpc)
        reportedDistance: 20.9,
        measuredDistance: 9.04,
        // 적색편이량 문헌값, 측정값
        reportedRedshift: 0,
        measuredRedshift: 0.0021,
        // 후퇴 속도 문헌값, 측정값 (km/s)
        reportedRecessionVelocity: 0,
        measuredRecessionVelocity: 632.81,
    }
]

export default galaxies;