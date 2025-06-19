export function convertHourToHourMinuteSecond(hour: number) {
    // 시 부분 (정수부)
    const hours = Math.floor(hour);

    // 분 계산: 남은 소수 부분 * 60
    const totalMinutes = (hour - hours) * 60;
    const minutes = Math.floor(totalMinutes);

    // 초 계산: 남은 소수 부분 * 60
    const totalSeconds = (totalMinutes - minutes) * 60;
    // 소수점 오차를 줄이기 위해 반올림
    let second = Math.round(totalSeconds);

    // seconds가 60이 될 수 있으므로 조정
    let extraMinutes = 0;
    if (second === 60) {
        second = 0;
        extraMinutes = 1;
    }

    let finalMinutes = minutes + extraMinutes;
    let extraHours = 0;
    if (finalMinutes === 60) {
        finalMinutes = 0;
        extraHours = 1;
    }

    return {
        hour: hours + extraHours,
        minute: finalMinutes,
        second
    };
}