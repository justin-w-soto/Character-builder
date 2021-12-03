import { render, screen } from '@testing-library/react';
import Picker from './Picker.jsx';
it('should do the thing', () => {
    const { container } = render(<Picker />);

    const selectHead = screen.getByLabelText(/Head/);
    const selectMiddle = screen.getByLabelText(/Middle/);
    const selectPants = screen.getByLabelText(/Pants/);
    const input = screen.getByLabelText(/New Catchphrase:/);

    expect(selectHead).toBeInTheDocument();
    expect(selectMiddle).toBeInTheDocument();
    expect(selectPants).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})