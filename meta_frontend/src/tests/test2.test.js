
import { useGetAvailableTimes } from '../hooks/useGetAvailableTimes';
import { renderHook } from '@testing-library/react';
test('useGetAvailableTimes returns available times based on bookedTimes', () => {
    const bookedTimes = {
        "2024-07-01": { booked: ["18:00", "20:00"] },
        "2024-07-02": { booked: ["17:00", "19:00", "21:00"] }
    };
    // Use renderHook to test the hook
    const { result, rerender } = renderHook(({ date }) => useGetAvailableTimes(date, bookedTimes), {
        initialProps: { date: "2024-07-01" }
    });

    expect(result.current).not.toContain("18:00");
    expect(result.current).not.toContain("20:00");
    // Rerender the hook with a different date
    rerender({ date: "2024-07-02" });
    expect(result.current).not.toContain("17:00");
    expect(result.current).not.toContain("19:00");
    expect(result.current).not.toContain("21:00");
});