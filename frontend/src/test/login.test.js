import {render, screen, fireEvent} from '@testing-library/react';
import HotelMenu from '../components/HotelMenuOptions/HotelMenu';

test('renders Customer Login', () => {
    render(<HotelMenu/>);
    const customerLoginText = screen.getByText(/Customer Login/i);
    expect(customerLoginText).toBeInTheDocument();
});

test('testing email input type', () => {
    render(<HotelMenu/>);
    const inputBox = screen.getByTestId('email');
    fireEvent.change(inputBox, {target: {value: 'sakethgali@gmail.com'}});
    expect(inputBox.value).toBe('sakethgali@gmail.com');
});