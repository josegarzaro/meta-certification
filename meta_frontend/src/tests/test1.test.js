import {render, screen, fireEvent} from '@testing-library/react';
import BookingForm from '../main/components/BookingForm';
import '@testing-library/jest-dom'
import {useNavigate} from 'react-router';
import { useGetAvailableTimes } from '../hooks/useGetAvailableTimes';
jest.mock('react-router', () => {
    const actual = jest.requireActual('react-router'); 
    return {
        ...actual, 
        useNavigate: jest.fn(),     };
});
jest.mock('../hooks/useGetAvailableTimes', () => ({
    useGetAvailableTimes: jest.fn(),
}));
test('renders BookingForm component', () => {
    render(<BookingForm bookedTimes={{}} updateAvailableTimes={() => {}} />);
    const numberOfGuestsLabel = screen.getByText("Number of guests");
    expect(numberOfGuestsLabel).toBeInTheDocument();


});


test('Booking form can be submitted when all fields are filled', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    const mockSubmit = jest.fn();
    // Since alert is used in the component, we can mock it to test if it was called
    window.alert = jest.fn();
    const bookedTimes = {
        "2024-07-01": { booked: ["18:00", "20:00"] },
        "2024-07-02": { booked: ["17:00", "21:00"] }
    };
    useGetAvailableTimes.mockImplementation((date, bookedTimes)=> {return ["17:00", "19:00", "22:00"];});
    render(<BookingForm bookedTimes={bookedTimes} updateAvailableTimes={mockSubmit} />);
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-07-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    const submitButton = screen.getByDisplayValue("Make Your reservation");
    fireEvent.click(submitButton);


    expect(mockSubmit).toHaveBeenCalledWith({
        type: 'BOOK',
        payload: { date: '2024-07-01', time: '19:00' },
    });

});